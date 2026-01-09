import { type RedisClientType, createClient } from "redis";

let redis: RedisClientType | null = null;

export async function getRedisClient(): Promise<RedisClientType | null> {
  if (!redis) {
    try {
      const configuredRedisUrl = process.env.REDIS_URL;
      if (!configuredRedisUrl && process.env.NODE_ENV === "production") {
        return null;
      }

      const redisUrl = configuredRedisUrl ?? "redis://localhost:6379";

      const redisConfig = {
        url: redisUrl,
        password: process.env.REDIS_PASSWORD || undefined,
        database: Number.parseInt(process.env.REDIS_DB || "0"),
        socket: {
          connectTimeout: 10000,
          ...(redisUrl.startsWith("rediss://") ? { tls: true } : {}),
          // biome-ignore lint/suspicious/noExplicitAny: Redis client type mismatch workaround
        } as any,
      };

      redis = createClient(redisConfig);

      redis.on("error", (err) => {
        console.error("Redis connection error:", err);
        redis = null;
      });

      redis.on("connect", () => {
        console.log("✅ Redis connected successfully");
      });

      redis.on("disconnect", () => {
        console.log("Redis disconnected");
        redis = null;
      });

      await redis.connect();
    } catch (error) {
      console.error("❌ Failed to connect to Redis:", error);
      redis = null;
    }
  }

  return redis;
}

export async function testRedisConnection(): Promise<boolean> {
  try {
    const client = await getRedisClient();
    if (!client) return false;

    await client.ping();
    console.log("✅ Redis connection test successful");
    return true;
  } catch (error) {
    console.error("❌ Redis connection test failed:", error);
    return false;
  }
}

export async function disconnectRedis(): Promise<void> {
  if (redis) {
    await redis.disconnect();
    redis = null;
  }
}
