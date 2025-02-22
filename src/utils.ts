import { type Either, left, right } from "./either";

export const fromPromise = async <T>(
  promise: Promise<T>,
): Promise<Either<Error, T>> => {
  try {
    const result = await promise;
    return right(result);
  } catch (error) {
    return left(error instanceof Error ? error : new Error(String(error)));
  }
};
