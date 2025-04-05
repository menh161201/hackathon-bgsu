
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model House
 * 
 */
export type House = $Result.DefaultSelection<Prisma.$HousePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.house`: Exposes CRUD operations for the **House** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Houses
    * const houses = await prisma.house.findMany()
    * ```
    */
  get house(): Prisma.HouseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    House: 'House'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "house"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      House: {
        payload: Prisma.$HousePayload<ExtArgs>
        fields: Prisma.HouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findFirst: {
            args: Prisma.HouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          findMany: {
            args: Prisma.HouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          create: {
            args: Prisma.HouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          createMany: {
            args: Prisma.HouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          delete: {
            args: Prisma.HouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          update: {
            args: Prisma.HouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          deleteMany: {
            args: Prisma.HouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>[]
          }
          upsert: {
            args: Prisma.HouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HousePayload>
          }
          aggregate: {
            args: Prisma.HouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHouse>
          }
          groupBy: {
            args: Prisma.HouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<HouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.HouseCountArgs<ExtArgs>
            result: $Utils.Optional<HouseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    house?: HouseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    savedHouses: number
    viewedHouses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedHouses?: boolean | UserCountOutputTypeCountSavedHousesArgs
    viewedHouses?: boolean | UserCountOutputTypeCountViewedHousesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountViewedHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
  }


  /**
   * Count Type HouseCountOutputType
   */

  export type HouseCountOutputType = {
    savedBy: number
    viewedBy: number
  }

  export type HouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | HouseCountOutputTypeCountSavedByArgs
    viewedBy?: boolean | HouseCountOutputTypeCountViewedByArgs
  }

  // Custom InputTypes
  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HouseCountOutputType
     */
    select?: HouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * HouseCountOutputType without action
   */
  export type HouseCountOutputTypeCountViewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    savedHouses?: boolean | User$savedHousesArgs<ExtArgs>
    viewedHouses?: boolean | User$viewedHousesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedHouses?: boolean | User$savedHousesArgs<ExtArgs>
    viewedHouses?: boolean | User$viewedHousesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      savedHouses: Prisma.$HousePayload<ExtArgs>[]
      viewedHouses: Prisma.$HousePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedHouses<T extends User$savedHousesArgs<ExtArgs> = {}>(args?: Subset<T, User$savedHousesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewedHouses<T extends User$viewedHousesArgs<ExtArgs> = {}>(args?: Subset<T, User$viewedHousesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.savedHouses
   */
  export type User$savedHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    cursor?: HouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * User.viewedHouses
   */
  export type User$viewedHousesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    cursor?: HouseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model House
   */

  export type AggregateHouse = {
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  export type HouseAvgAggregateOutputType = {
    id: number | null
    bathrooms: number | null
    bedrooms: number | null
    price: number | null
    utitlities: number | null
    schoolDistance: number | null
    schoolWalkTime: number | null
    groceryDistance: number | null
    groceryWalkTime: number | null
    pharmacyDistance: number | null
    pharmacyWalkTime: number | null
    downtownDistance: number | null
    downtownWalkTime: number | null
  }

  export type HouseSumAggregateOutputType = {
    id: number | null
    bathrooms: number | null
    bedrooms: number | null
    price: number | null
    utitlities: number | null
    schoolDistance: number | null
    schoolWalkTime: number | null
    groceryDistance: number | null
    groceryWalkTime: number | null
    pharmacyDistance: number | null
    pharmacyWalkTime: number | null
    downtownDistance: number | null
    downtownWalkTime: number | null
  }

  export type HouseMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    bathrooms: number | null
    bedrooms: number | null
    price: number | null
    utitlities: number | null
    amenities: string | null
    image: string | null
    schoolDistance: number | null
    schoolWalkTime: number | null
    groceryDistance: number | null
    groceryWalkTime: number | null
    groceryStore: string | null
    groceryAdress: string | null
    pharmacyDistance: number | null
    pharmacyWalkTime: number | null
    pharmacyStore: string | null
    pharmacyAdress: string | null
    downtownDistance: number | null
    downtownWalkTime: number | null
    shuttle: boolean | null
    legitimate: boolean | null
  }

  export type HouseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    bathrooms: number | null
    bedrooms: number | null
    price: number | null
    utitlities: number | null
    amenities: string | null
    image: string | null
    schoolDistance: number | null
    schoolWalkTime: number | null
    groceryDistance: number | null
    groceryWalkTime: number | null
    groceryStore: string | null
    groceryAdress: string | null
    pharmacyDistance: number | null
    pharmacyWalkTime: number | null
    pharmacyStore: string | null
    pharmacyAdress: string | null
    downtownDistance: number | null
    downtownWalkTime: number | null
    shuttle: boolean | null
    legitimate: boolean | null
  }

  export type HouseCountAggregateOutputType = {
    id: number
    name: number
    address: number
    bathrooms: number
    bedrooms: number
    price: number
    utitlities: number
    amenities: number
    image: number
    schoolDistance: number
    schoolWalkTime: number
    groceryDistance: number
    groceryWalkTime: number
    groceryStore: number
    groceryAdress: number
    pharmacyDistance: number
    pharmacyWalkTime: number
    pharmacyStore: number
    pharmacyAdress: number
    downtownDistance: number
    downtownWalkTime: number
    shuttle: number
    legitimate: number
    _all: number
  }


  export type HouseAvgAggregateInputType = {
    id?: true
    bathrooms?: true
    bedrooms?: true
    price?: true
    utitlities?: true
    schoolDistance?: true
    schoolWalkTime?: true
    groceryDistance?: true
    groceryWalkTime?: true
    pharmacyDistance?: true
    pharmacyWalkTime?: true
    downtownDistance?: true
    downtownWalkTime?: true
  }

  export type HouseSumAggregateInputType = {
    id?: true
    bathrooms?: true
    bedrooms?: true
    price?: true
    utitlities?: true
    schoolDistance?: true
    schoolWalkTime?: true
    groceryDistance?: true
    groceryWalkTime?: true
    pharmacyDistance?: true
    pharmacyWalkTime?: true
    downtownDistance?: true
    downtownWalkTime?: true
  }

  export type HouseMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    bathrooms?: true
    bedrooms?: true
    price?: true
    utitlities?: true
    amenities?: true
    image?: true
    schoolDistance?: true
    schoolWalkTime?: true
    groceryDistance?: true
    groceryWalkTime?: true
    groceryStore?: true
    groceryAdress?: true
    pharmacyDistance?: true
    pharmacyWalkTime?: true
    pharmacyStore?: true
    pharmacyAdress?: true
    downtownDistance?: true
    downtownWalkTime?: true
    shuttle?: true
    legitimate?: true
  }

  export type HouseMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    bathrooms?: true
    bedrooms?: true
    price?: true
    utitlities?: true
    amenities?: true
    image?: true
    schoolDistance?: true
    schoolWalkTime?: true
    groceryDistance?: true
    groceryWalkTime?: true
    groceryStore?: true
    groceryAdress?: true
    pharmacyDistance?: true
    pharmacyWalkTime?: true
    pharmacyStore?: true
    pharmacyAdress?: true
    downtownDistance?: true
    downtownWalkTime?: true
    shuttle?: true
    legitimate?: true
  }

  export type HouseCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    bathrooms?: true
    bedrooms?: true
    price?: true
    utitlities?: true
    amenities?: true
    image?: true
    schoolDistance?: true
    schoolWalkTime?: true
    groceryDistance?: true
    groceryWalkTime?: true
    groceryStore?: true
    groceryAdress?: true
    pharmacyDistance?: true
    pharmacyWalkTime?: true
    pharmacyStore?: true
    pharmacyAdress?: true
    downtownDistance?: true
    downtownWalkTime?: true
    shuttle?: true
    legitimate?: true
    _all?: true
  }

  export type HouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which House to aggregate.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Houses
    **/
    _count?: true | HouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HouseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HouseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HouseMaxAggregateInputType
  }

  export type GetHouseAggregateType<T extends HouseAggregateArgs> = {
        [P in keyof T & keyof AggregateHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHouse[P]>
      : GetScalarType<T[P], AggregateHouse[P]>
  }




  export type HouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HouseWhereInput
    orderBy?: HouseOrderByWithAggregationInput | HouseOrderByWithAggregationInput[]
    by: HouseScalarFieldEnum[] | HouseScalarFieldEnum
    having?: HouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HouseCountAggregateInputType | true
    _avg?: HouseAvgAggregateInputType
    _sum?: HouseSumAggregateInputType
    _min?: HouseMinAggregateInputType
    _max?: HouseMaxAggregateInputType
  }

  export type HouseGroupByOutputType = {
    id: number
    name: string | null
    address: string | null
    bathrooms: number | null
    bedrooms: number | null
    price: number | null
    utitlities: number | null
    amenities: string | null
    image: string | null
    schoolDistance: number | null
    schoolWalkTime: number | null
    groceryDistance: number | null
    groceryWalkTime: number | null
    groceryStore: string | null
    groceryAdress: string | null
    pharmacyDistance: number | null
    pharmacyWalkTime: number | null
    pharmacyStore: string | null
    pharmacyAdress: string | null
    downtownDistance: number | null
    downtownWalkTime: number | null
    shuttle: boolean | null
    legitimate: boolean | null
    _count: HouseCountAggregateOutputType | null
    _avg: HouseAvgAggregateOutputType | null
    _sum: HouseSumAggregateOutputType | null
    _min: HouseMinAggregateOutputType | null
    _max: HouseMaxAggregateOutputType | null
  }

  type GetHouseGroupByPayload<T extends HouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HouseGroupByOutputType[P]>
            : GetScalarType<T[P], HouseGroupByOutputType[P]>
        }
      >
    >


  export type HouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    bathrooms?: boolean
    bedrooms?: boolean
    price?: boolean
    utitlities?: boolean
    amenities?: boolean
    image?: boolean
    schoolDistance?: boolean
    schoolWalkTime?: boolean
    groceryDistance?: boolean
    groceryWalkTime?: boolean
    groceryStore?: boolean
    groceryAdress?: boolean
    pharmacyDistance?: boolean
    pharmacyWalkTime?: boolean
    pharmacyStore?: boolean
    pharmacyAdress?: boolean
    downtownDistance?: boolean
    downtownWalkTime?: boolean
    shuttle?: boolean
    legitimate?: boolean
    savedBy?: boolean | House$savedByArgs<ExtArgs>
    viewedBy?: boolean | House$viewedByArgs<ExtArgs>
    _count?: boolean | HouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["house"]>

  export type HouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    bathrooms?: boolean
    bedrooms?: boolean
    price?: boolean
    utitlities?: boolean
    amenities?: boolean
    image?: boolean
    schoolDistance?: boolean
    schoolWalkTime?: boolean
    groceryDistance?: boolean
    groceryWalkTime?: boolean
    groceryStore?: boolean
    groceryAdress?: boolean
    pharmacyDistance?: boolean
    pharmacyWalkTime?: boolean
    pharmacyStore?: boolean
    pharmacyAdress?: boolean
    downtownDistance?: boolean
    downtownWalkTime?: boolean
    shuttle?: boolean
    legitimate?: boolean
  }, ExtArgs["result"]["house"]>

  export type HouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    bathrooms?: boolean
    bedrooms?: boolean
    price?: boolean
    utitlities?: boolean
    amenities?: boolean
    image?: boolean
    schoolDistance?: boolean
    schoolWalkTime?: boolean
    groceryDistance?: boolean
    groceryWalkTime?: boolean
    groceryStore?: boolean
    groceryAdress?: boolean
    pharmacyDistance?: boolean
    pharmacyWalkTime?: boolean
    pharmacyStore?: boolean
    pharmacyAdress?: boolean
    downtownDistance?: boolean
    downtownWalkTime?: boolean
    shuttle?: boolean
    legitimate?: boolean
  }, ExtArgs["result"]["house"]>

  export type HouseSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    bathrooms?: boolean
    bedrooms?: boolean
    price?: boolean
    utitlities?: boolean
    amenities?: boolean
    image?: boolean
    schoolDistance?: boolean
    schoolWalkTime?: boolean
    groceryDistance?: boolean
    groceryWalkTime?: boolean
    groceryStore?: boolean
    groceryAdress?: boolean
    pharmacyDistance?: boolean
    pharmacyWalkTime?: boolean
    pharmacyStore?: boolean
    pharmacyAdress?: boolean
    downtownDistance?: boolean
    downtownWalkTime?: boolean
    shuttle?: boolean
    legitimate?: boolean
  }

  export type HouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "bathrooms" | "bedrooms" | "price" | "utitlities" | "amenities" | "image" | "schoolDistance" | "schoolWalkTime" | "groceryDistance" | "groceryWalkTime" | "groceryStore" | "groceryAdress" | "pharmacyDistance" | "pharmacyWalkTime" | "pharmacyStore" | "pharmacyAdress" | "downtownDistance" | "downtownWalkTime" | "shuttle" | "legitimate", ExtArgs["result"]["house"]>
  export type HouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    savedBy?: boolean | House$savedByArgs<ExtArgs>
    viewedBy?: boolean | House$viewedByArgs<ExtArgs>
    _count?: boolean | HouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "House"
    objects: {
      savedBy: Prisma.$UserPayload<ExtArgs>[]
      viewedBy: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      address: string | null
      bathrooms: number | null
      bedrooms: number | null
      price: number | null
      utitlities: number | null
      amenities: string | null
      image: string | null
      schoolDistance: number | null
      schoolWalkTime: number | null
      groceryDistance: number | null
      groceryWalkTime: number | null
      groceryStore: string | null
      groceryAdress: string | null
      pharmacyDistance: number | null
      pharmacyWalkTime: number | null
      pharmacyStore: string | null
      pharmacyAdress: string | null
      downtownDistance: number | null
      downtownWalkTime: number | null
      shuttle: boolean | null
      legitimate: boolean | null
    }, ExtArgs["result"]["house"]>
    composites: {}
  }

  type HouseGetPayload<S extends boolean | null | undefined | HouseDefaultArgs> = $Result.GetResult<Prisma.$HousePayload, S>

  type HouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HouseCountAggregateInputType | true
    }

  export interface HouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['House'], meta: { name: 'House' } }
    /**
     * Find zero or one House that matches the filter.
     * @param {HouseFindUniqueArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HouseFindUniqueArgs>(args: SelectSubset<T, HouseFindUniqueArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one House that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HouseFindUniqueOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HouseFindUniqueOrThrowArgs>(args: SelectSubset<T, HouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HouseFindFirstArgs>(args?: SelectSubset<T, HouseFindFirstArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first House that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindFirstOrThrowArgs} args - Arguments to find a House
     * @example
     * // Get one House
     * const house = await prisma.house.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HouseFindFirstOrThrowArgs>(args?: SelectSubset<T, HouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Houses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Houses
     * const houses = await prisma.house.findMany()
     * 
     * // Get first 10 Houses
     * const houses = await prisma.house.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const houseWithIdOnly = await prisma.house.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HouseFindManyArgs>(args?: SelectSubset<T, HouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a House.
     * @param {HouseCreateArgs} args - Arguments to create a House.
     * @example
     * // Create one House
     * const House = await prisma.house.create({
     *   data: {
     *     // ... data to create a House
     *   }
     * })
     * 
     */
    create<T extends HouseCreateArgs>(args: SelectSubset<T, HouseCreateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Houses.
     * @param {HouseCreateManyArgs} args - Arguments to create many Houses.
     * @example
     * // Create many Houses
     * const house = await prisma.house.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HouseCreateManyArgs>(args?: SelectSubset<T, HouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Houses and returns the data saved in the database.
     * @param {HouseCreateManyAndReturnArgs} args - Arguments to create many Houses.
     * @example
     * // Create many Houses
     * const house = await prisma.house.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Houses and only return the `id`
     * const houseWithIdOnly = await prisma.house.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HouseCreateManyAndReturnArgs>(args?: SelectSubset<T, HouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a House.
     * @param {HouseDeleteArgs} args - Arguments to delete one House.
     * @example
     * // Delete one House
     * const House = await prisma.house.delete({
     *   where: {
     *     // ... filter to delete one House
     *   }
     * })
     * 
     */
    delete<T extends HouseDeleteArgs>(args: SelectSubset<T, HouseDeleteArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one House.
     * @param {HouseUpdateArgs} args - Arguments to update one House.
     * @example
     * // Update one House
     * const house = await prisma.house.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HouseUpdateArgs>(args: SelectSubset<T, HouseUpdateArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Houses.
     * @param {HouseDeleteManyArgs} args - Arguments to filter Houses to delete.
     * @example
     * // Delete a few Houses
     * const { count } = await prisma.house.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HouseDeleteManyArgs>(args?: SelectSubset<T, HouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HouseUpdateManyArgs>(args: SelectSubset<T, HouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Houses and returns the data updated in the database.
     * @param {HouseUpdateManyAndReturnArgs} args - Arguments to update many Houses.
     * @example
     * // Update many Houses
     * const house = await prisma.house.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Houses and only return the `id`
     * const houseWithIdOnly = await prisma.house.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HouseUpdateManyAndReturnArgs>(args: SelectSubset<T, HouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one House.
     * @param {HouseUpsertArgs} args - Arguments to update or create a House.
     * @example
     * // Update or create a House
     * const house = await prisma.house.upsert({
     *   create: {
     *     // ... data to create a House
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the House we want to update
     *   }
     * })
     */
    upsert<T extends HouseUpsertArgs>(args: SelectSubset<T, HouseUpsertArgs<ExtArgs>>): Prisma__HouseClient<$Result.GetResult<Prisma.$HousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Houses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseCountArgs} args - Arguments to filter Houses to count.
     * @example
     * // Count the number of Houses
     * const count = await prisma.house.count({
     *   where: {
     *     // ... the filter for the Houses we want to count
     *   }
     * })
    **/
    count<T extends HouseCountArgs>(
      args?: Subset<T, HouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HouseAggregateArgs>(args: Subset<T, HouseAggregateArgs>): Prisma.PrismaPromise<GetHouseAggregateType<T>>

    /**
     * Group by House.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HouseGroupByArgs['orderBy'] }
        : { orderBy?: HouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the House model
   */
  readonly fields: HouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for House.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    savedBy<T extends House$savedByArgs<ExtArgs> = {}>(args?: Subset<T, House$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewedBy<T extends House$viewedByArgs<ExtArgs> = {}>(args?: Subset<T, House$viewedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the House model
   */ 
  interface HouseFieldRefs {
    readonly id: FieldRef<"House", 'Int'>
    readonly name: FieldRef<"House", 'String'>
    readonly address: FieldRef<"House", 'String'>
    readonly bathrooms: FieldRef<"House", 'Float'>
    readonly bedrooms: FieldRef<"House", 'Int'>
    readonly price: FieldRef<"House", 'Float'>
    readonly utitlities: FieldRef<"House", 'Float'>
    readonly amenities: FieldRef<"House", 'String'>
    readonly image: FieldRef<"House", 'String'>
    readonly schoolDistance: FieldRef<"House", 'Float'>
    readonly schoolWalkTime: FieldRef<"House", 'Float'>
    readonly groceryDistance: FieldRef<"House", 'Float'>
    readonly groceryWalkTime: FieldRef<"House", 'Float'>
    readonly groceryStore: FieldRef<"House", 'String'>
    readonly groceryAdress: FieldRef<"House", 'String'>
    readonly pharmacyDistance: FieldRef<"House", 'Float'>
    readonly pharmacyWalkTime: FieldRef<"House", 'Float'>
    readonly pharmacyStore: FieldRef<"House", 'String'>
    readonly pharmacyAdress: FieldRef<"House", 'String'>
    readonly downtownDistance: FieldRef<"House", 'Float'>
    readonly downtownWalkTime: FieldRef<"House", 'Float'>
    readonly shuttle: FieldRef<"House", 'Boolean'>
    readonly legitimate: FieldRef<"House", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * House findUnique
   */
  export type HouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findUniqueOrThrow
   */
  export type HouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House findFirst
   */
  export type HouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findFirstOrThrow
   */
  export type HouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which House to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Houses.
     */
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House findMany
   */
  export type HouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter, which Houses to fetch.
     */
    where?: HouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Houses to fetch.
     */
    orderBy?: HouseOrderByWithRelationInput | HouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Houses.
     */
    cursor?: HouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Houses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Houses.
     */
    skip?: number
    distinct?: HouseScalarFieldEnum | HouseScalarFieldEnum[]
  }

  /**
   * House create
   */
  export type HouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The data needed to create a House.
     */
    data?: XOR<HouseCreateInput, HouseUncheckedCreateInput>
  }

  /**
   * House createMany
   */
  export type HouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Houses.
     */
    data: HouseCreateManyInput | HouseCreateManyInput[]
  }

  /**
   * House createManyAndReturn
   */
  export type HouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * The data used to create many Houses.
     */
    data: HouseCreateManyInput | HouseCreateManyInput[]
  }

  /**
   * House update
   */
  export type HouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The data needed to update a House.
     */
    data: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
    /**
     * Choose, which House to update.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House updateMany
   */
  export type HouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Houses.
     */
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyInput>
    /**
     * Filter which Houses to update
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to update.
     */
    limit?: number
  }

  /**
   * House updateManyAndReturn
   */
  export type HouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * The data used to update Houses.
     */
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyInput>
    /**
     * Filter which Houses to update
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to update.
     */
    limit?: number
  }

  /**
   * House upsert
   */
  export type HouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * The filter to search for the House to update in case it exists.
     */
    where: HouseWhereUniqueInput
    /**
     * In case the House found by the `where` argument doesn't exist, create a new House with this data.
     */
    create: XOR<HouseCreateInput, HouseUncheckedCreateInput>
    /**
     * In case the House was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HouseUpdateInput, HouseUncheckedUpdateInput>
  }

  /**
   * House delete
   */
  export type HouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
    /**
     * Filter which House to delete.
     */
    where: HouseWhereUniqueInput
  }

  /**
   * House deleteMany
   */
  export type HouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Houses to delete
     */
    where?: HouseWhereInput
    /**
     * Limit how many Houses to delete.
     */
    limit?: number
  }

  /**
   * House.savedBy
   */
  export type House$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * House.viewedBy
   */
  export type House$viewedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * House without action
   */
  export type HouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the House
     */
    select?: HouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the House
     */
    omit?: HouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HouseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    bathrooms: 'bathrooms',
    bedrooms: 'bedrooms',
    price: 'price',
    utitlities: 'utitlities',
    amenities: 'amenities',
    image: 'image',
    schoolDistance: 'schoolDistance',
    schoolWalkTime: 'schoolWalkTime',
    groceryDistance: 'groceryDistance',
    groceryWalkTime: 'groceryWalkTime',
    groceryStore: 'groceryStore',
    groceryAdress: 'groceryAdress',
    pharmacyDistance: 'pharmacyDistance',
    pharmacyWalkTime: 'pharmacyWalkTime',
    pharmacyStore: 'pharmacyStore',
    pharmacyAdress: 'pharmacyAdress',
    downtownDistance: 'downtownDistance',
    downtownWalkTime: 'downtownWalkTime',
    shuttle: 'shuttle',
    legitimate: 'legitimate'
  };

  export type HouseScalarFieldEnum = (typeof HouseScalarFieldEnum)[keyof typeof HouseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    savedHouses?: HouseListRelationFilter
    viewedHouses?: HouseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    savedHouses?: HouseOrderByRelationAggregateInput
    viewedHouses?: HouseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    savedHouses?: HouseListRelationFilter
    viewedHouses?: HouseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type HouseWhereInput = {
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    id?: IntFilter<"House"> | number
    name?: StringNullableFilter<"House"> | string | null
    address?: StringNullableFilter<"House"> | string | null
    bathrooms?: FloatNullableFilter<"House"> | number | null
    bedrooms?: IntNullableFilter<"House"> | number | null
    price?: FloatNullableFilter<"House"> | number | null
    utitlities?: FloatNullableFilter<"House"> | number | null
    amenities?: StringNullableFilter<"House"> | string | null
    image?: StringNullableFilter<"House"> | string | null
    schoolDistance?: FloatNullableFilter<"House"> | number | null
    schoolWalkTime?: FloatNullableFilter<"House"> | number | null
    groceryDistance?: FloatNullableFilter<"House"> | number | null
    groceryWalkTime?: FloatNullableFilter<"House"> | number | null
    groceryStore?: StringNullableFilter<"House"> | string | null
    groceryAdress?: StringNullableFilter<"House"> | string | null
    pharmacyDistance?: FloatNullableFilter<"House"> | number | null
    pharmacyWalkTime?: FloatNullableFilter<"House"> | number | null
    pharmacyStore?: StringNullableFilter<"House"> | string | null
    pharmacyAdress?: StringNullableFilter<"House"> | string | null
    downtownDistance?: FloatNullableFilter<"House"> | number | null
    downtownWalkTime?: FloatNullableFilter<"House"> | number | null
    shuttle?: BoolNullableFilter<"House"> | boolean | null
    legitimate?: BoolNullableFilter<"House"> | boolean | null
    savedBy?: UserListRelationFilter
    viewedBy?: UserListRelationFilter
  }

  export type HouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    utitlities?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    schoolDistance?: SortOrderInput | SortOrder
    schoolWalkTime?: SortOrderInput | SortOrder
    groceryDistance?: SortOrderInput | SortOrder
    groceryWalkTime?: SortOrderInput | SortOrder
    groceryStore?: SortOrderInput | SortOrder
    groceryAdress?: SortOrderInput | SortOrder
    pharmacyDistance?: SortOrderInput | SortOrder
    pharmacyWalkTime?: SortOrderInput | SortOrder
    pharmacyStore?: SortOrderInput | SortOrder
    pharmacyAdress?: SortOrderInput | SortOrder
    downtownDistance?: SortOrderInput | SortOrder
    downtownWalkTime?: SortOrderInput | SortOrder
    shuttle?: SortOrderInput | SortOrder
    legitimate?: SortOrderInput | SortOrder
    savedBy?: UserOrderByRelationAggregateInput
    viewedBy?: UserOrderByRelationAggregateInput
  }

  export type HouseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HouseWhereInput | HouseWhereInput[]
    OR?: HouseWhereInput[]
    NOT?: HouseWhereInput | HouseWhereInput[]
    name?: StringNullableFilter<"House"> | string | null
    address?: StringNullableFilter<"House"> | string | null
    bathrooms?: FloatNullableFilter<"House"> | number | null
    bedrooms?: IntNullableFilter<"House"> | number | null
    price?: FloatNullableFilter<"House"> | number | null
    utitlities?: FloatNullableFilter<"House"> | number | null
    amenities?: StringNullableFilter<"House"> | string | null
    image?: StringNullableFilter<"House"> | string | null
    schoolDistance?: FloatNullableFilter<"House"> | number | null
    schoolWalkTime?: FloatNullableFilter<"House"> | number | null
    groceryDistance?: FloatNullableFilter<"House"> | number | null
    groceryWalkTime?: FloatNullableFilter<"House"> | number | null
    groceryStore?: StringNullableFilter<"House"> | string | null
    groceryAdress?: StringNullableFilter<"House"> | string | null
    pharmacyDistance?: FloatNullableFilter<"House"> | number | null
    pharmacyWalkTime?: FloatNullableFilter<"House"> | number | null
    pharmacyStore?: StringNullableFilter<"House"> | string | null
    pharmacyAdress?: StringNullableFilter<"House"> | string | null
    downtownDistance?: FloatNullableFilter<"House"> | number | null
    downtownWalkTime?: FloatNullableFilter<"House"> | number | null
    shuttle?: BoolNullableFilter<"House"> | boolean | null
    legitimate?: BoolNullableFilter<"House"> | boolean | null
    savedBy?: UserListRelationFilter
    viewedBy?: UserListRelationFilter
  }, "id">

  export type HouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    bathrooms?: SortOrderInput | SortOrder
    bedrooms?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    utitlities?: SortOrderInput | SortOrder
    amenities?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    schoolDistance?: SortOrderInput | SortOrder
    schoolWalkTime?: SortOrderInput | SortOrder
    groceryDistance?: SortOrderInput | SortOrder
    groceryWalkTime?: SortOrderInput | SortOrder
    groceryStore?: SortOrderInput | SortOrder
    groceryAdress?: SortOrderInput | SortOrder
    pharmacyDistance?: SortOrderInput | SortOrder
    pharmacyWalkTime?: SortOrderInput | SortOrder
    pharmacyStore?: SortOrderInput | SortOrder
    pharmacyAdress?: SortOrderInput | SortOrder
    downtownDistance?: SortOrderInput | SortOrder
    downtownWalkTime?: SortOrderInput | SortOrder
    shuttle?: SortOrderInput | SortOrder
    legitimate?: SortOrderInput | SortOrder
    _count?: HouseCountOrderByAggregateInput
    _avg?: HouseAvgOrderByAggregateInput
    _max?: HouseMaxOrderByAggregateInput
    _min?: HouseMinOrderByAggregateInput
    _sum?: HouseSumOrderByAggregateInput
  }

  export type HouseScalarWhereWithAggregatesInput = {
    AND?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    OR?: HouseScalarWhereWithAggregatesInput[]
    NOT?: HouseScalarWhereWithAggregatesInput | HouseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"House"> | number
    name?: StringNullableWithAggregatesFilter<"House"> | string | null
    address?: StringNullableWithAggregatesFilter<"House"> | string | null
    bathrooms?: FloatNullableWithAggregatesFilter<"House"> | number | null
    bedrooms?: IntNullableWithAggregatesFilter<"House"> | number | null
    price?: FloatNullableWithAggregatesFilter<"House"> | number | null
    utitlities?: FloatNullableWithAggregatesFilter<"House"> | number | null
    amenities?: StringNullableWithAggregatesFilter<"House"> | string | null
    image?: StringNullableWithAggregatesFilter<"House"> | string | null
    schoolDistance?: FloatNullableWithAggregatesFilter<"House"> | number | null
    schoolWalkTime?: FloatNullableWithAggregatesFilter<"House"> | number | null
    groceryDistance?: FloatNullableWithAggregatesFilter<"House"> | number | null
    groceryWalkTime?: FloatNullableWithAggregatesFilter<"House"> | number | null
    groceryStore?: StringNullableWithAggregatesFilter<"House"> | string | null
    groceryAdress?: StringNullableWithAggregatesFilter<"House"> | string | null
    pharmacyDistance?: FloatNullableWithAggregatesFilter<"House"> | number | null
    pharmacyWalkTime?: FloatNullableWithAggregatesFilter<"House"> | number | null
    pharmacyStore?: StringNullableWithAggregatesFilter<"House"> | string | null
    pharmacyAdress?: StringNullableWithAggregatesFilter<"House"> | string | null
    downtownDistance?: FloatNullableWithAggregatesFilter<"House"> | number | null
    downtownWalkTime?: FloatNullableWithAggregatesFilter<"House"> | number | null
    shuttle?: BoolNullableWithAggregatesFilter<"House"> | boolean | null
    legitimate?: BoolNullableWithAggregatesFilter<"House"> | boolean | null
  }

  export type UserCreateInput = {
    id: string
    email: string
    savedHouses?: HouseCreateNestedManyWithoutSavedByInput
    viewedHouses?: HouseCreateNestedManyWithoutViewedByInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    savedHouses?: HouseUncheckedCreateNestedManyWithoutSavedByInput
    viewedHouses?: HouseUncheckedCreateNestedManyWithoutViewedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    savedHouses?: HouseUpdateManyWithoutSavedByNestedInput
    viewedHouses?: HouseUpdateManyWithoutViewedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    savedHouses?: HouseUncheckedUpdateManyWithoutSavedByNestedInput
    viewedHouses?: HouseUncheckedUpdateManyWithoutViewedByNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type HouseCreateInput = {
    name?: string | null
    address?: string | null
    bathrooms?: number | null
    bedrooms?: number | null
    price?: number | null
    utitlities?: number | null
    amenities?: string | null
    image?: string | null
    schoolDistance?: number | null
    schoolWalkTime?: number | null
    groceryDistance?: number | null
    groceryWalkTime?: number | null
    groceryStore?: string | null
    groceryAdress?: string | null
    pharmacyDistance?: number | null
    pharmacyWalkTime?: number | null
    pharmacyStore?: string | null
    pharmacyAdress?: string | null
    downtownDistance?: number | null
    downtownWalkTime?: number | null
    shuttle?: boolean | null
    legitimate?: boolean | null
    savedBy?: UserCreateNestedManyWithoutSavedHousesInput
    viewedBy?: UserCreateNestedManyWithoutViewedHousesInput
  }

  export type HouseUncheckedCreateInput = {
    id?: number
    name?: string | null
    address?: string | null
    bathrooms?: number | null
    bedrooms?: number | null
    price?: number | null
    utitlities?: number | null
    amenities?: string | null
    image?: string | null
    schoolDistance?: number | null
    schoolWalkTime?: number | null
    groceryDistance?: number | null
    groceryWalkTime?: number | null
    groceryStore?: string | null
    groceryAdress?: string | null
    pharmacyDistance?: number | null
    pharmacyWalkTime?: number | null
    pharmacyStore?: string | null
    pharmacyAdress?: string | null
    downtownDistance?: number | null
    downtownWalkTime?: number | null
    shuttle?: boolean | null
    legitimate?: boolean | null
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedHousesInput
    viewedBy?: UserUncheckedCreateNestedManyWithoutViewedHousesInput
  }

  export type HouseUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    savedBy?: UserUpdateManyWithoutSavedHousesNestedInput
    viewedBy?: UserUpdateManyWithoutViewedHousesNestedInput
  }

  export type HouseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    savedBy?: UserUncheckedUpdateManyWithoutSavedHousesNestedInput
    viewedBy?: UserUncheckedUpdateManyWithoutViewedHousesNestedInput
  }

  export type HouseCreateManyInput = {
    id?: number
    name?: string | null
    address?: string | null
    bathrooms?: number | null
    bedrooms?: number | null
    price?: number | null
    utitlities?: number | null
    amenities?: string | null
    image?: string | null
    schoolDistance?: number | null
    schoolWalkTime?: number | null
    groceryDistance?: number | null
    groceryWalkTime?: number | null
    groceryStore?: string | null
    groceryAdress?: string | null
    pharmacyDistance?: number | null
    pharmacyWalkTime?: number | null
    pharmacyStore?: string | null
    pharmacyAdress?: string | null
    downtownDistance?: number | null
    downtownWalkTime?: number | null
    shuttle?: boolean | null
    legitimate?: boolean | null
  }

  export type HouseUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type HouseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type HouseListRelationFilter = {
    every?: HouseWhereInput
    some?: HouseWhereInput
    none?: HouseWhereInput
  }

  export type HouseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    bathrooms?: SortOrder
    bedrooms?: SortOrder
    price?: SortOrder
    utitlities?: SortOrder
    amenities?: SortOrder
    image?: SortOrder
    schoolDistance?: SortOrder
    schoolWalkTime?: SortOrder
    groceryDistance?: SortOrder
    groceryWalkTime?: SortOrder
    groceryStore?: SortOrder
    groceryAdress?: SortOrder
    pharmacyDistance?: SortOrder
    pharmacyWalkTime?: SortOrder
    pharmacyStore?: SortOrder
    pharmacyAdress?: SortOrder
    downtownDistance?: SortOrder
    downtownWalkTime?: SortOrder
    shuttle?: SortOrder
    legitimate?: SortOrder
  }

  export type HouseAvgOrderByAggregateInput = {
    id?: SortOrder
    bathrooms?: SortOrder
    bedrooms?: SortOrder
    price?: SortOrder
    utitlities?: SortOrder
    schoolDistance?: SortOrder
    schoolWalkTime?: SortOrder
    groceryDistance?: SortOrder
    groceryWalkTime?: SortOrder
    pharmacyDistance?: SortOrder
    pharmacyWalkTime?: SortOrder
    downtownDistance?: SortOrder
    downtownWalkTime?: SortOrder
  }

  export type HouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    bathrooms?: SortOrder
    bedrooms?: SortOrder
    price?: SortOrder
    utitlities?: SortOrder
    amenities?: SortOrder
    image?: SortOrder
    schoolDistance?: SortOrder
    schoolWalkTime?: SortOrder
    groceryDistance?: SortOrder
    groceryWalkTime?: SortOrder
    groceryStore?: SortOrder
    groceryAdress?: SortOrder
    pharmacyDistance?: SortOrder
    pharmacyWalkTime?: SortOrder
    pharmacyStore?: SortOrder
    pharmacyAdress?: SortOrder
    downtownDistance?: SortOrder
    downtownWalkTime?: SortOrder
    shuttle?: SortOrder
    legitimate?: SortOrder
  }

  export type HouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    bathrooms?: SortOrder
    bedrooms?: SortOrder
    price?: SortOrder
    utitlities?: SortOrder
    amenities?: SortOrder
    image?: SortOrder
    schoolDistance?: SortOrder
    schoolWalkTime?: SortOrder
    groceryDistance?: SortOrder
    groceryWalkTime?: SortOrder
    groceryStore?: SortOrder
    groceryAdress?: SortOrder
    pharmacyDistance?: SortOrder
    pharmacyWalkTime?: SortOrder
    pharmacyStore?: SortOrder
    pharmacyAdress?: SortOrder
    downtownDistance?: SortOrder
    downtownWalkTime?: SortOrder
    shuttle?: SortOrder
    legitimate?: SortOrder
  }

  export type HouseSumOrderByAggregateInput = {
    id?: SortOrder
    bathrooms?: SortOrder
    bedrooms?: SortOrder
    price?: SortOrder
    utitlities?: SortOrder
    schoolDistance?: SortOrder
    schoolWalkTime?: SortOrder
    groceryDistance?: SortOrder
    groceryWalkTime?: SortOrder
    pharmacyDistance?: SortOrder
    pharmacyWalkTime?: SortOrder
    downtownDistance?: SortOrder
    downtownWalkTime?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type HouseCreateNestedManyWithoutSavedByInput = {
    create?: XOR<HouseCreateWithoutSavedByInput, HouseUncheckedCreateWithoutSavedByInput> | HouseCreateWithoutSavedByInput[] | HouseUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutSavedByInput | HouseCreateOrConnectWithoutSavedByInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type HouseCreateNestedManyWithoutViewedByInput = {
    create?: XOR<HouseCreateWithoutViewedByInput, HouseUncheckedCreateWithoutViewedByInput> | HouseCreateWithoutViewedByInput[] | HouseUncheckedCreateWithoutViewedByInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutViewedByInput | HouseCreateOrConnectWithoutViewedByInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type HouseUncheckedCreateNestedManyWithoutSavedByInput = {
    create?: XOR<HouseCreateWithoutSavedByInput, HouseUncheckedCreateWithoutSavedByInput> | HouseCreateWithoutSavedByInput[] | HouseUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutSavedByInput | HouseCreateOrConnectWithoutSavedByInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type HouseUncheckedCreateNestedManyWithoutViewedByInput = {
    create?: XOR<HouseCreateWithoutViewedByInput, HouseUncheckedCreateWithoutViewedByInput> | HouseCreateWithoutViewedByInput[] | HouseUncheckedCreateWithoutViewedByInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutViewedByInput | HouseCreateOrConnectWithoutViewedByInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type HouseUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<HouseCreateWithoutSavedByInput, HouseUncheckedCreateWithoutSavedByInput> | HouseCreateWithoutSavedByInput[] | HouseUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutSavedByInput | HouseCreateOrConnectWithoutSavedByInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutSavedByInput | HouseUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutSavedByInput | HouseUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutSavedByInput | HouseUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type HouseUpdateManyWithoutViewedByNestedInput = {
    create?: XOR<HouseCreateWithoutViewedByInput, HouseUncheckedCreateWithoutViewedByInput> | HouseCreateWithoutViewedByInput[] | HouseUncheckedCreateWithoutViewedByInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutViewedByInput | HouseCreateOrConnectWithoutViewedByInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutViewedByInput | HouseUpsertWithWhereUniqueWithoutViewedByInput[]
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutViewedByInput | HouseUpdateWithWhereUniqueWithoutViewedByInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutViewedByInput | HouseUpdateManyWithWhereWithoutViewedByInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type HouseUncheckedUpdateManyWithoutSavedByNestedInput = {
    create?: XOR<HouseCreateWithoutSavedByInput, HouseUncheckedCreateWithoutSavedByInput> | HouseCreateWithoutSavedByInput[] | HouseUncheckedCreateWithoutSavedByInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutSavedByInput | HouseCreateOrConnectWithoutSavedByInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutSavedByInput | HouseUpsertWithWhereUniqueWithoutSavedByInput[]
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutSavedByInput | HouseUpdateWithWhereUniqueWithoutSavedByInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutSavedByInput | HouseUpdateManyWithWhereWithoutSavedByInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type HouseUncheckedUpdateManyWithoutViewedByNestedInput = {
    create?: XOR<HouseCreateWithoutViewedByInput, HouseUncheckedCreateWithoutViewedByInput> | HouseCreateWithoutViewedByInput[] | HouseUncheckedCreateWithoutViewedByInput[]
    connectOrCreate?: HouseCreateOrConnectWithoutViewedByInput | HouseCreateOrConnectWithoutViewedByInput[]
    upsert?: HouseUpsertWithWhereUniqueWithoutViewedByInput | HouseUpsertWithWhereUniqueWithoutViewedByInput[]
    set?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    disconnect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    delete?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    connect?: HouseWhereUniqueInput | HouseWhereUniqueInput[]
    update?: HouseUpdateWithWhereUniqueWithoutViewedByInput | HouseUpdateWithWhereUniqueWithoutViewedByInput[]
    updateMany?: HouseUpdateManyWithWhereWithoutViewedByInput | HouseUpdateManyWithWhereWithoutViewedByInput[]
    deleteMany?: HouseScalarWhereInput | HouseScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutSavedHousesInput = {
    create?: XOR<UserCreateWithoutSavedHousesInput, UserUncheckedCreateWithoutSavedHousesInput> | UserCreateWithoutSavedHousesInput[] | UserUncheckedCreateWithoutSavedHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedHousesInput | UserCreateOrConnectWithoutSavedHousesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutViewedHousesInput = {
    create?: XOR<UserCreateWithoutViewedHousesInput, UserUncheckedCreateWithoutViewedHousesInput> | UserCreateWithoutViewedHousesInput[] | UserUncheckedCreateWithoutViewedHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutViewedHousesInput | UserCreateOrConnectWithoutViewedHousesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSavedHousesInput = {
    create?: XOR<UserCreateWithoutSavedHousesInput, UserUncheckedCreateWithoutSavedHousesInput> | UserCreateWithoutSavedHousesInput[] | UserUncheckedCreateWithoutSavedHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedHousesInput | UserCreateOrConnectWithoutSavedHousesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutViewedHousesInput = {
    create?: XOR<UserCreateWithoutViewedHousesInput, UserUncheckedCreateWithoutViewedHousesInput> | UserCreateWithoutViewedHousesInput[] | UserUncheckedCreateWithoutViewedHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutViewedHousesInput | UserCreateOrConnectWithoutViewedHousesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateManyWithoutSavedHousesNestedInput = {
    create?: XOR<UserCreateWithoutSavedHousesInput, UserUncheckedCreateWithoutSavedHousesInput> | UserCreateWithoutSavedHousesInput[] | UserUncheckedCreateWithoutSavedHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedHousesInput | UserCreateOrConnectWithoutSavedHousesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedHousesInput | UserUpsertWithWhereUniqueWithoutSavedHousesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedHousesInput | UserUpdateWithWhereUniqueWithoutSavedHousesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedHousesInput | UserUpdateManyWithWhereWithoutSavedHousesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutViewedHousesNestedInput = {
    create?: XOR<UserCreateWithoutViewedHousesInput, UserUncheckedCreateWithoutViewedHousesInput> | UserCreateWithoutViewedHousesInput[] | UserUncheckedCreateWithoutViewedHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutViewedHousesInput | UserCreateOrConnectWithoutViewedHousesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutViewedHousesInput | UserUpsertWithWhereUniqueWithoutViewedHousesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutViewedHousesInput | UserUpdateWithWhereUniqueWithoutViewedHousesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutViewedHousesInput | UserUpdateManyWithWhereWithoutViewedHousesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutSavedHousesNestedInput = {
    create?: XOR<UserCreateWithoutSavedHousesInput, UserUncheckedCreateWithoutSavedHousesInput> | UserCreateWithoutSavedHousesInput[] | UserUncheckedCreateWithoutSavedHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSavedHousesInput | UserCreateOrConnectWithoutSavedHousesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSavedHousesInput | UserUpsertWithWhereUniqueWithoutSavedHousesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSavedHousesInput | UserUpdateWithWhereUniqueWithoutSavedHousesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSavedHousesInput | UserUpdateManyWithWhereWithoutSavedHousesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutViewedHousesNestedInput = {
    create?: XOR<UserCreateWithoutViewedHousesInput, UserUncheckedCreateWithoutViewedHousesInput> | UserCreateWithoutViewedHousesInput[] | UserUncheckedCreateWithoutViewedHousesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutViewedHousesInput | UserCreateOrConnectWithoutViewedHousesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutViewedHousesInput | UserUpsertWithWhereUniqueWithoutViewedHousesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutViewedHousesInput | UserUpdateWithWhereUniqueWithoutViewedHousesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutViewedHousesInput | UserUpdateManyWithWhereWithoutViewedHousesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type HouseCreateWithoutSavedByInput = {
    name?: string | null
    address?: string | null
    bathrooms?: number | null
    bedrooms?: number | null
    price?: number | null
    utitlities?: number | null
    amenities?: string | null
    image?: string | null
    schoolDistance?: number | null
    schoolWalkTime?: number | null
    groceryDistance?: number | null
    groceryWalkTime?: number | null
    groceryStore?: string | null
    groceryAdress?: string | null
    pharmacyDistance?: number | null
    pharmacyWalkTime?: number | null
    pharmacyStore?: string | null
    pharmacyAdress?: string | null
    downtownDistance?: number | null
    downtownWalkTime?: number | null
    shuttle?: boolean | null
    legitimate?: boolean | null
    viewedBy?: UserCreateNestedManyWithoutViewedHousesInput
  }

  export type HouseUncheckedCreateWithoutSavedByInput = {
    id?: number
    name?: string | null
    address?: string | null
    bathrooms?: number | null
    bedrooms?: number | null
    price?: number | null
    utitlities?: number | null
    amenities?: string | null
    image?: string | null
    schoolDistance?: number | null
    schoolWalkTime?: number | null
    groceryDistance?: number | null
    groceryWalkTime?: number | null
    groceryStore?: string | null
    groceryAdress?: string | null
    pharmacyDistance?: number | null
    pharmacyWalkTime?: number | null
    pharmacyStore?: string | null
    pharmacyAdress?: string | null
    downtownDistance?: number | null
    downtownWalkTime?: number | null
    shuttle?: boolean | null
    legitimate?: boolean | null
    viewedBy?: UserUncheckedCreateNestedManyWithoutViewedHousesInput
  }

  export type HouseCreateOrConnectWithoutSavedByInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutSavedByInput, HouseUncheckedCreateWithoutSavedByInput>
  }

  export type HouseCreateWithoutViewedByInput = {
    name?: string | null
    address?: string | null
    bathrooms?: number | null
    bedrooms?: number | null
    price?: number | null
    utitlities?: number | null
    amenities?: string | null
    image?: string | null
    schoolDistance?: number | null
    schoolWalkTime?: number | null
    groceryDistance?: number | null
    groceryWalkTime?: number | null
    groceryStore?: string | null
    groceryAdress?: string | null
    pharmacyDistance?: number | null
    pharmacyWalkTime?: number | null
    pharmacyStore?: string | null
    pharmacyAdress?: string | null
    downtownDistance?: number | null
    downtownWalkTime?: number | null
    shuttle?: boolean | null
    legitimate?: boolean | null
    savedBy?: UserCreateNestedManyWithoutSavedHousesInput
  }

  export type HouseUncheckedCreateWithoutViewedByInput = {
    id?: number
    name?: string | null
    address?: string | null
    bathrooms?: number | null
    bedrooms?: number | null
    price?: number | null
    utitlities?: number | null
    amenities?: string | null
    image?: string | null
    schoolDistance?: number | null
    schoolWalkTime?: number | null
    groceryDistance?: number | null
    groceryWalkTime?: number | null
    groceryStore?: string | null
    groceryAdress?: string | null
    pharmacyDistance?: number | null
    pharmacyWalkTime?: number | null
    pharmacyStore?: string | null
    pharmacyAdress?: string | null
    downtownDistance?: number | null
    downtownWalkTime?: number | null
    shuttle?: boolean | null
    legitimate?: boolean | null
    savedBy?: UserUncheckedCreateNestedManyWithoutSavedHousesInput
  }

  export type HouseCreateOrConnectWithoutViewedByInput = {
    where: HouseWhereUniqueInput
    create: XOR<HouseCreateWithoutViewedByInput, HouseUncheckedCreateWithoutViewedByInput>
  }

  export type HouseUpsertWithWhereUniqueWithoutSavedByInput = {
    where: HouseWhereUniqueInput
    update: XOR<HouseUpdateWithoutSavedByInput, HouseUncheckedUpdateWithoutSavedByInput>
    create: XOR<HouseCreateWithoutSavedByInput, HouseUncheckedCreateWithoutSavedByInput>
  }

  export type HouseUpdateWithWhereUniqueWithoutSavedByInput = {
    where: HouseWhereUniqueInput
    data: XOR<HouseUpdateWithoutSavedByInput, HouseUncheckedUpdateWithoutSavedByInput>
  }

  export type HouseUpdateManyWithWhereWithoutSavedByInput = {
    where: HouseScalarWhereInput
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyWithoutSavedByInput>
  }

  export type HouseScalarWhereInput = {
    AND?: HouseScalarWhereInput | HouseScalarWhereInput[]
    OR?: HouseScalarWhereInput[]
    NOT?: HouseScalarWhereInput | HouseScalarWhereInput[]
    id?: IntFilter<"House"> | number
    name?: StringNullableFilter<"House"> | string | null
    address?: StringNullableFilter<"House"> | string | null
    bathrooms?: FloatNullableFilter<"House"> | number | null
    bedrooms?: IntNullableFilter<"House"> | number | null
    price?: FloatNullableFilter<"House"> | number | null
    utitlities?: FloatNullableFilter<"House"> | number | null
    amenities?: StringNullableFilter<"House"> | string | null
    image?: StringNullableFilter<"House"> | string | null
    schoolDistance?: FloatNullableFilter<"House"> | number | null
    schoolWalkTime?: FloatNullableFilter<"House"> | number | null
    groceryDistance?: FloatNullableFilter<"House"> | number | null
    groceryWalkTime?: FloatNullableFilter<"House"> | number | null
    groceryStore?: StringNullableFilter<"House"> | string | null
    groceryAdress?: StringNullableFilter<"House"> | string | null
    pharmacyDistance?: FloatNullableFilter<"House"> | number | null
    pharmacyWalkTime?: FloatNullableFilter<"House"> | number | null
    pharmacyStore?: StringNullableFilter<"House"> | string | null
    pharmacyAdress?: StringNullableFilter<"House"> | string | null
    downtownDistance?: FloatNullableFilter<"House"> | number | null
    downtownWalkTime?: FloatNullableFilter<"House"> | number | null
    shuttle?: BoolNullableFilter<"House"> | boolean | null
    legitimate?: BoolNullableFilter<"House"> | boolean | null
  }

  export type HouseUpsertWithWhereUniqueWithoutViewedByInput = {
    where: HouseWhereUniqueInput
    update: XOR<HouseUpdateWithoutViewedByInput, HouseUncheckedUpdateWithoutViewedByInput>
    create: XOR<HouseCreateWithoutViewedByInput, HouseUncheckedCreateWithoutViewedByInput>
  }

  export type HouseUpdateWithWhereUniqueWithoutViewedByInput = {
    where: HouseWhereUniqueInput
    data: XOR<HouseUpdateWithoutViewedByInput, HouseUncheckedUpdateWithoutViewedByInput>
  }

  export type HouseUpdateManyWithWhereWithoutViewedByInput = {
    where: HouseScalarWhereInput
    data: XOR<HouseUpdateManyMutationInput, HouseUncheckedUpdateManyWithoutViewedByInput>
  }

  export type UserCreateWithoutSavedHousesInput = {
    id: string
    email: string
    viewedHouses?: HouseCreateNestedManyWithoutViewedByInput
  }

  export type UserUncheckedCreateWithoutSavedHousesInput = {
    id: string
    email: string
    viewedHouses?: HouseUncheckedCreateNestedManyWithoutViewedByInput
  }

  export type UserCreateOrConnectWithoutSavedHousesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedHousesInput, UserUncheckedCreateWithoutSavedHousesInput>
  }

  export type UserCreateWithoutViewedHousesInput = {
    id: string
    email: string
    savedHouses?: HouseCreateNestedManyWithoutSavedByInput
  }

  export type UserUncheckedCreateWithoutViewedHousesInput = {
    id: string
    email: string
    savedHouses?: HouseUncheckedCreateNestedManyWithoutSavedByInput
  }

  export type UserCreateOrConnectWithoutViewedHousesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutViewedHousesInput, UserUncheckedCreateWithoutViewedHousesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutSavedHousesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSavedHousesInput, UserUncheckedUpdateWithoutSavedHousesInput>
    create: XOR<UserCreateWithoutSavedHousesInput, UserUncheckedCreateWithoutSavedHousesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSavedHousesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSavedHousesInput, UserUncheckedUpdateWithoutSavedHousesInput>
  }

  export type UserUpdateManyWithWhereWithoutSavedHousesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSavedHousesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutViewedHousesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutViewedHousesInput, UserUncheckedUpdateWithoutViewedHousesInput>
    create: XOR<UserCreateWithoutViewedHousesInput, UserUncheckedCreateWithoutViewedHousesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutViewedHousesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutViewedHousesInput, UserUncheckedUpdateWithoutViewedHousesInput>
  }

  export type UserUpdateManyWithWhereWithoutViewedHousesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutViewedHousesInput>
  }

  export type HouseUpdateWithoutSavedByInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewedBy?: UserUpdateManyWithoutViewedHousesNestedInput
  }

  export type HouseUncheckedUpdateWithoutSavedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    viewedBy?: UserUncheckedUpdateManyWithoutViewedHousesNestedInput
  }

  export type HouseUncheckedUpdateManyWithoutSavedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type HouseUpdateWithoutViewedByInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    savedBy?: UserUpdateManyWithoutSavedHousesNestedInput
  }

  export type HouseUncheckedUpdateWithoutViewedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
    savedBy?: UserUncheckedUpdateManyWithoutSavedHousesNestedInput
  }

  export type HouseUncheckedUpdateManyWithoutViewedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    bathrooms?: NullableFloatFieldUpdateOperationsInput | number | null
    bedrooms?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    utitlities?: NullableFloatFieldUpdateOperationsInput | number | null
    amenities?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    schoolDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    schoolWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    groceryStore?: NullableStringFieldUpdateOperationsInput | string | null
    groceryAdress?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    pharmacyStore?: NullableStringFieldUpdateOperationsInput | string | null
    pharmacyAdress?: NullableStringFieldUpdateOperationsInput | string | null
    downtownDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    downtownWalkTime?: NullableFloatFieldUpdateOperationsInput | number | null
    shuttle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    legitimate?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type UserUpdateWithoutSavedHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    viewedHouses?: HouseUpdateManyWithoutViewedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    viewedHouses?: HouseUncheckedUpdateManyWithoutViewedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSavedHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutViewedHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    savedHouses?: HouseUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateWithoutViewedHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    savedHouses?: HouseUncheckedUpdateManyWithoutSavedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutViewedHousesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}