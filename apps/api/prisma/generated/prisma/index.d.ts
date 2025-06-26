
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
 * Model AdminAccount
 * 
 */
export type AdminAccount = $Result.DefaultSelection<Prisma.$AdminAccountPayload>
/**
 * Model AdminAuth
 * 
 */
export type AdminAuth = $Result.DefaultSelection<Prisma.$AdminAuthPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AdminAccounts
 * const adminAccounts = await prisma.adminAccount.findMany()
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
   * // Fetch zero or more AdminAccounts
   * const adminAccounts = await prisma.adminAccount.findMany()
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
   * `prisma.adminAccount`: Exposes CRUD operations for the **AdminAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminAccounts
    * const adminAccounts = await prisma.adminAccount.findMany()
    * ```
    */
  get adminAccount(): Prisma.AdminAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminAuth`: Exposes CRUD operations for the **AdminAuth** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminAuths
    * const adminAuths = await prisma.adminAuth.findMany()
    * ```
    */
  get adminAuth(): Prisma.AdminAuthDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    AdminAccount: 'AdminAccount',
    AdminAuth: 'AdminAuth'
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
      modelProps: "adminAccount" | "adminAuth"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AdminAccount: {
        payload: Prisma.$AdminAccountPayload<ExtArgs>
        fields: Prisma.AdminAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          findFirst: {
            args: Prisma.AdminAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          findMany: {
            args: Prisma.AdminAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>[]
          }
          create: {
            args: Prisma.AdminAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          createMany: {
            args: Prisma.AdminAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>[]
          }
          delete: {
            args: Prisma.AdminAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          update: {
            args: Prisma.AdminAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          deleteMany: {
            args: Prisma.AdminAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>[]
          }
          upsert: {
            args: Prisma.AdminAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAccountPayload>
          }
          aggregate: {
            args: Prisma.AdminAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminAccount>
          }
          groupBy: {
            args: Prisma.AdminAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminAccountCountArgs<ExtArgs>
            result: $Utils.Optional<AdminAccountCountAggregateOutputType> | number
          }
        }
      }
      AdminAuth: {
        payload: Prisma.$AdminAuthPayload<ExtArgs>
        fields: Prisma.AdminAuthFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminAuthFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminAuthFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload>
          }
          findFirst: {
            args: Prisma.AdminAuthFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminAuthFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload>
          }
          findMany: {
            args: Prisma.AdminAuthFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload>[]
          }
          create: {
            args: Prisma.AdminAuthCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload>
          }
          createMany: {
            args: Prisma.AdminAuthCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminAuthCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload>[]
          }
          delete: {
            args: Prisma.AdminAuthDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload>
          }
          update: {
            args: Prisma.AdminAuthUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload>
          }
          deleteMany: {
            args: Prisma.AdminAuthDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminAuthUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminAuthUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload>[]
          }
          upsert: {
            args: Prisma.AdminAuthUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminAuthPayload>
          }
          aggregate: {
            args: Prisma.AdminAuthAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminAuth>
          }
          groupBy: {
            args: Prisma.AdminAuthGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminAuthGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminAuthCountArgs<ExtArgs>
            result: $Utils.Optional<AdminAuthCountAggregateOutputType> | number
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
    adminAccount?: AdminAccountOmit
    adminAuth?: AdminAuthOmit
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
   * Count Type AdminAccountCountOutputType
   */

  export type AdminAccountCountOutputType = {
    AdminAuth: number
  }

  export type AdminAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdminAuth?: boolean | AdminAccountCountOutputTypeCountAdminAuthArgs
  }

  // Custom InputTypes
  /**
   * AdminAccountCountOutputType without action
   */
  export type AdminAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccountCountOutputType
     */
    select?: AdminAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminAccountCountOutputType without action
   */
  export type AdminAccountCountOutputTypeCountAdminAuthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAuthWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AdminAccount
   */

  export type AggregateAdminAccount = {
    _count: AdminAccountCountAggregateOutputType | null
    _min: AdminAccountMinAggregateOutputType | null
    _max: AdminAccountMaxAggregateOutputType | null
  }

  export type AdminAccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminAccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminAccountCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AdminAccountMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminAccountMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminAccountCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AdminAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAccount to aggregate.
     */
    where?: AdminAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAccounts to fetch.
     */
    orderBy?: AdminAccountOrderByWithRelationInput | AdminAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminAccounts
    **/
    _count?: true | AdminAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminAccountMaxAggregateInputType
  }

  export type GetAdminAccountAggregateType<T extends AdminAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminAccount[P]>
      : GetScalarType<T[P], AggregateAdminAccount[P]>
  }




  export type AdminAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAccountWhereInput
    orderBy?: AdminAccountOrderByWithAggregationInput | AdminAccountOrderByWithAggregationInput[]
    by: AdminAccountScalarFieldEnum[] | AdminAccountScalarFieldEnum
    having?: AdminAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminAccountCountAggregateInputType | true
    _min?: AdminAccountMinAggregateInputType
    _max?: AdminAccountMaxAggregateInputType
  }

  export type AdminAccountGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AdminAccountCountAggregateOutputType | null
    _min: AdminAccountMinAggregateOutputType | null
    _max: AdminAccountMaxAggregateOutputType | null
  }

  type GetAdminAccountGroupByPayload<T extends AdminAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AdminAccountGroupByOutputType[P]>
        }
      >
    >


  export type AdminAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    AdminAuth?: boolean | AdminAccount$AdminAuthArgs<ExtArgs>
    _count?: boolean | AdminAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAccount"]>

  export type AdminAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["adminAccount"]>

  export type AdminAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["adminAccount"]>

  export type AdminAccountSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AdminAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["adminAccount"]>
  export type AdminAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AdminAuth?: boolean | AdminAccount$AdminAuthArgs<ExtArgs>
    _count?: boolean | AdminAccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminAccount"
    objects: {
      AdminAuth: Prisma.$AdminAuthPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["adminAccount"]>
    composites: {}
  }

  type AdminAccountGetPayload<S extends boolean | null | undefined | AdminAccountDefaultArgs> = $Result.GetResult<Prisma.$AdminAccountPayload, S>

  type AdminAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminAccountCountAggregateInputType | true
    }

  export interface AdminAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminAccount'], meta: { name: 'AdminAccount' } }
    /**
     * Find zero or one AdminAccount that matches the filter.
     * @param {AdminAccountFindUniqueArgs} args - Arguments to find a AdminAccount
     * @example
     * // Get one AdminAccount
     * const adminAccount = await prisma.adminAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminAccountFindUniqueArgs>(args: SelectSubset<T, AdminAccountFindUniqueArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminAccountFindUniqueOrThrowArgs} args - Arguments to find a AdminAccount
     * @example
     * // Get one AdminAccount
     * const adminAccount = await prisma.adminAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountFindFirstArgs} args - Arguments to find a AdminAccount
     * @example
     * // Get one AdminAccount
     * const adminAccount = await prisma.adminAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminAccountFindFirstArgs>(args?: SelectSubset<T, AdminAccountFindFirstArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountFindFirstOrThrowArgs} args - Arguments to find a AdminAccount
     * @example
     * // Get one AdminAccount
     * const adminAccount = await prisma.adminAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminAccounts
     * const adminAccounts = await prisma.adminAccount.findMany()
     * 
     * // Get first 10 AdminAccounts
     * const adminAccounts = await prisma.adminAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminAccountWithIdOnly = await prisma.adminAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminAccountFindManyArgs>(args?: SelectSubset<T, AdminAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminAccount.
     * @param {AdminAccountCreateArgs} args - Arguments to create a AdminAccount.
     * @example
     * // Create one AdminAccount
     * const AdminAccount = await prisma.adminAccount.create({
     *   data: {
     *     // ... data to create a AdminAccount
     *   }
     * })
     * 
     */
    create<T extends AdminAccountCreateArgs>(args: SelectSubset<T, AdminAccountCreateArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminAccounts.
     * @param {AdminAccountCreateManyArgs} args - Arguments to create many AdminAccounts.
     * @example
     * // Create many AdminAccounts
     * const adminAccount = await prisma.adminAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminAccountCreateManyArgs>(args?: SelectSubset<T, AdminAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminAccounts and returns the data saved in the database.
     * @param {AdminAccountCreateManyAndReturnArgs} args - Arguments to create many AdminAccounts.
     * @example
     * // Create many AdminAccounts
     * const adminAccount = await prisma.adminAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminAccounts and only return the `id`
     * const adminAccountWithIdOnly = await prisma.adminAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminAccount.
     * @param {AdminAccountDeleteArgs} args - Arguments to delete one AdminAccount.
     * @example
     * // Delete one AdminAccount
     * const AdminAccount = await prisma.adminAccount.delete({
     *   where: {
     *     // ... filter to delete one AdminAccount
     *   }
     * })
     * 
     */
    delete<T extends AdminAccountDeleteArgs>(args: SelectSubset<T, AdminAccountDeleteArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminAccount.
     * @param {AdminAccountUpdateArgs} args - Arguments to update one AdminAccount.
     * @example
     * // Update one AdminAccount
     * const adminAccount = await prisma.adminAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminAccountUpdateArgs>(args: SelectSubset<T, AdminAccountUpdateArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminAccounts.
     * @param {AdminAccountDeleteManyArgs} args - Arguments to filter AdminAccounts to delete.
     * @example
     * // Delete a few AdminAccounts
     * const { count } = await prisma.adminAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminAccountDeleteManyArgs>(args?: SelectSubset<T, AdminAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminAccounts
     * const adminAccount = await prisma.adminAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminAccountUpdateManyArgs>(args: SelectSubset<T, AdminAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAccounts and returns the data updated in the database.
     * @param {AdminAccountUpdateManyAndReturnArgs} args - Arguments to update many AdminAccounts.
     * @example
     * // Update many AdminAccounts
     * const adminAccount = await prisma.adminAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminAccounts and only return the `id`
     * const adminAccountWithIdOnly = await prisma.adminAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminAccount.
     * @param {AdminAccountUpsertArgs} args - Arguments to update or create a AdminAccount.
     * @example
     * // Update or create a AdminAccount
     * const adminAccount = await prisma.adminAccount.upsert({
     *   create: {
     *     // ... data to create a AdminAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminAccount we want to update
     *   }
     * })
     */
    upsert<T extends AdminAccountUpsertArgs>(args: SelectSubset<T, AdminAccountUpsertArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountCountArgs} args - Arguments to filter AdminAccounts to count.
     * @example
     * // Count the number of AdminAccounts
     * const count = await prisma.adminAccount.count({
     *   where: {
     *     // ... the filter for the AdminAccounts we want to count
     *   }
     * })
    **/
    count<T extends AdminAccountCountArgs>(
      args?: Subset<T, AdminAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAccountAggregateArgs>(args: Subset<T, AdminAccountAggregateArgs>): Prisma.PrismaPromise<GetAdminAccountAggregateType<T>>

    /**
     * Group by AdminAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAccountGroupByArgs} args - Group by arguments.
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
      T extends AdminAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminAccountGroupByArgs['orderBy'] }
        : { orderBy?: AdminAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminAccount model
   */
  readonly fields: AdminAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AdminAuth<T extends AdminAccount$AdminAuthArgs<ExtArgs> = {}>(args?: Subset<T, AdminAccount$AdminAuthArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AdminAccount model
   */
  interface AdminAccountFieldRefs {
    readonly id: FieldRef<"AdminAccount", 'String'>
    readonly name: FieldRef<"AdminAccount", 'String'>
    readonly email: FieldRef<"AdminAccount", 'String'>
    readonly phone: FieldRef<"AdminAccount", 'String'>
    readonly createdAt: FieldRef<"AdminAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminAccount", 'DateTime'>
    readonly deletedAt: FieldRef<"AdminAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminAccount findUnique
   */
  export type AdminAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdminAccount to fetch.
     */
    where: AdminAccountWhereUniqueInput
  }

  /**
   * AdminAccount findUniqueOrThrow
   */
  export type AdminAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdminAccount to fetch.
     */
    where: AdminAccountWhereUniqueInput
  }

  /**
   * AdminAccount findFirst
   */
  export type AdminAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdminAccount to fetch.
     */
    where?: AdminAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAccounts to fetch.
     */
    orderBy?: AdminAccountOrderByWithRelationInput | AdminAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAccounts.
     */
    cursor?: AdminAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAccounts.
     */
    distinct?: AdminAccountScalarFieldEnum | AdminAccountScalarFieldEnum[]
  }

  /**
   * AdminAccount findFirstOrThrow
   */
  export type AdminAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdminAccount to fetch.
     */
    where?: AdminAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAccounts to fetch.
     */
    orderBy?: AdminAccountOrderByWithRelationInput | AdminAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAccounts.
     */
    cursor?: AdminAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAccounts.
     */
    distinct?: AdminAccountScalarFieldEnum | AdminAccountScalarFieldEnum[]
  }

  /**
   * AdminAccount findMany
   */
  export type AdminAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
    /**
     * Filter, which AdminAccounts to fetch.
     */
    where?: AdminAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAccounts to fetch.
     */
    orderBy?: AdminAccountOrderByWithRelationInput | AdminAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminAccounts.
     */
    cursor?: AdminAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAccounts.
     */
    skip?: number
    distinct?: AdminAccountScalarFieldEnum | AdminAccountScalarFieldEnum[]
  }

  /**
   * AdminAccount create
   */
  export type AdminAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminAccount.
     */
    data: XOR<AdminAccountCreateInput, AdminAccountUncheckedCreateInput>
  }

  /**
   * AdminAccount createMany
   */
  export type AdminAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminAccounts.
     */
    data: AdminAccountCreateManyInput | AdminAccountCreateManyInput[]
  }

  /**
   * AdminAccount createManyAndReturn
   */
  export type AdminAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * The data used to create many AdminAccounts.
     */
    data: AdminAccountCreateManyInput | AdminAccountCreateManyInput[]
  }

  /**
   * AdminAccount update
   */
  export type AdminAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminAccount.
     */
    data: XOR<AdminAccountUpdateInput, AdminAccountUncheckedUpdateInput>
    /**
     * Choose, which AdminAccount to update.
     */
    where: AdminAccountWhereUniqueInput
  }

  /**
   * AdminAccount updateMany
   */
  export type AdminAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminAccounts.
     */
    data: XOR<AdminAccountUpdateManyMutationInput, AdminAccountUncheckedUpdateManyInput>
    /**
     * Filter which AdminAccounts to update
     */
    where?: AdminAccountWhereInput
    /**
     * Limit how many AdminAccounts to update.
     */
    limit?: number
  }

  /**
   * AdminAccount updateManyAndReturn
   */
  export type AdminAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * The data used to update AdminAccounts.
     */
    data: XOR<AdminAccountUpdateManyMutationInput, AdminAccountUncheckedUpdateManyInput>
    /**
     * Filter which AdminAccounts to update
     */
    where?: AdminAccountWhereInput
    /**
     * Limit how many AdminAccounts to update.
     */
    limit?: number
  }

  /**
   * AdminAccount upsert
   */
  export type AdminAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminAccount to update in case it exists.
     */
    where: AdminAccountWhereUniqueInput
    /**
     * In case the AdminAccount found by the `where` argument doesn't exist, create a new AdminAccount with this data.
     */
    create: XOR<AdminAccountCreateInput, AdminAccountUncheckedCreateInput>
    /**
     * In case the AdminAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminAccountUpdateInput, AdminAccountUncheckedUpdateInput>
  }

  /**
   * AdminAccount delete
   */
  export type AdminAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
    /**
     * Filter which AdminAccount to delete.
     */
    where: AdminAccountWhereUniqueInput
  }

  /**
   * AdminAccount deleteMany
   */
  export type AdminAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAccounts to delete
     */
    where?: AdminAccountWhereInput
    /**
     * Limit how many AdminAccounts to delete.
     */
    limit?: number
  }

  /**
   * AdminAccount.AdminAuth
   */
  export type AdminAccount$AdminAuthArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    where?: AdminAuthWhereInput
    orderBy?: AdminAuthOrderByWithRelationInput | AdminAuthOrderByWithRelationInput[]
    cursor?: AdminAuthWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdminAuthScalarFieldEnum | AdminAuthScalarFieldEnum[]
  }

  /**
   * AdminAccount without action
   */
  export type AdminAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAccount
     */
    select?: AdminAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAccount
     */
    omit?: AdminAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAccountInclude<ExtArgs> | null
  }


  /**
   * Model AdminAuth
   */

  export type AggregateAdminAuth = {
    _count: AdminAuthCountAggregateOutputType | null
    _min: AdminAuthMinAggregateOutputType | null
    _max: AdminAuthMaxAggregateOutputType | null
  }

  export type AdminAuthMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    otp: string | null
    otpExpiresAt: Date | null
    accessToken: string | null
    accessTokenExpiresAt: Date | null
    refreshToken: string | null
    refreshTokenExpiresAt: Date | null
    jti: string | null
    jtiExpiresAt: Date | null
    provider: string | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminAuthMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    otp: string | null
    otpExpiresAt: Date | null
    accessToken: string | null
    accessTokenExpiresAt: Date | null
    refreshToken: string | null
    refreshTokenExpiresAt: Date | null
    jti: string | null
    jtiExpiresAt: Date | null
    provider: string | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type AdminAuthCountAggregateOutputType = {
    id: number
    adminId: number
    otp: number
    otpExpiresAt: number
    accessToken: number
    accessTokenExpiresAt: number
    refreshToken: number
    refreshTokenExpiresAt: number
    jti: number
    jtiExpiresAt: number
    provider: number
    providerId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type AdminAuthMinAggregateInputType = {
    id?: true
    adminId?: true
    otp?: true
    otpExpiresAt?: true
    accessToken?: true
    accessTokenExpiresAt?: true
    refreshToken?: true
    refreshTokenExpiresAt?: true
    jti?: true
    jtiExpiresAt?: true
    provider?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminAuthMaxAggregateInputType = {
    id?: true
    adminId?: true
    otp?: true
    otpExpiresAt?: true
    accessToken?: true
    accessTokenExpiresAt?: true
    refreshToken?: true
    refreshTokenExpiresAt?: true
    jti?: true
    jtiExpiresAt?: true
    provider?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type AdminAuthCountAggregateInputType = {
    id?: true
    adminId?: true
    otp?: true
    otpExpiresAt?: true
    accessToken?: true
    accessTokenExpiresAt?: true
    refreshToken?: true
    refreshTokenExpiresAt?: true
    jti?: true
    jtiExpiresAt?: true
    provider?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type AdminAuthAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAuth to aggregate.
     */
    where?: AdminAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuths to fetch.
     */
    orderBy?: AdminAuthOrderByWithRelationInput | AdminAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminAuths
    **/
    _count?: true | AdminAuthCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminAuthMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminAuthMaxAggregateInputType
  }

  export type GetAdminAuthAggregateType<T extends AdminAuthAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminAuth]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminAuth[P]>
      : GetScalarType<T[P], AggregateAdminAuth[P]>
  }




  export type AdminAuthGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminAuthWhereInput
    orderBy?: AdminAuthOrderByWithAggregationInput | AdminAuthOrderByWithAggregationInput[]
    by: AdminAuthScalarFieldEnum[] | AdminAuthScalarFieldEnum
    having?: AdminAuthScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminAuthCountAggregateInputType | true
    _min?: AdminAuthMinAggregateInputType
    _max?: AdminAuthMaxAggregateInputType
  }

  export type AdminAuthGroupByOutputType = {
    id: string
    adminId: string
    otp: string | null
    otpExpiresAt: Date | null
    accessToken: string | null
    accessTokenExpiresAt: Date | null
    refreshToken: string | null
    refreshTokenExpiresAt: Date | null
    jti: string | null
    jtiExpiresAt: Date | null
    provider: string | null
    providerId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: AdminAuthCountAggregateOutputType | null
    _min: AdminAuthMinAggregateOutputType | null
    _max: AdminAuthMaxAggregateOutputType | null
  }

  type GetAdminAuthGroupByPayload<T extends AdminAuthGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminAuthGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminAuthGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminAuthGroupByOutputType[P]>
            : GetScalarType<T[P], AdminAuthGroupByOutputType[P]>
        }
      >
    >


  export type AdminAuthSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    accessToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshToken?: boolean
    refreshTokenExpiresAt?: boolean
    jti?: boolean
    jtiExpiresAt?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    admin?: boolean | AdminAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAuth"]>

  export type AdminAuthSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    accessToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshToken?: boolean
    refreshTokenExpiresAt?: boolean
    jti?: boolean
    jtiExpiresAt?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    admin?: boolean | AdminAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAuth"]>

  export type AdminAuthSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    accessToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshToken?: boolean
    refreshTokenExpiresAt?: boolean
    jti?: boolean
    jtiExpiresAt?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    admin?: boolean | AdminAccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminAuth"]>

  export type AdminAuthSelectScalar = {
    id?: boolean
    adminId?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    accessToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshToken?: boolean
    refreshTokenExpiresAt?: boolean
    jti?: boolean
    jtiExpiresAt?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type AdminAuthOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "otp" | "otpExpiresAt" | "accessToken" | "accessTokenExpiresAt" | "refreshToken" | "refreshTokenExpiresAt" | "jti" | "jtiExpiresAt" | "provider" | "providerId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["adminAuth"]>
  export type AdminAuthInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminAccountDefaultArgs<ExtArgs>
  }
  export type AdminAuthIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminAccountDefaultArgs<ExtArgs>
  }
  export type AdminAuthIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminAccountDefaultArgs<ExtArgs>
  }

  export type $AdminAuthPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminAuth"
    objects: {
      admin: Prisma.$AdminAccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      otp: string | null
      otpExpiresAt: Date | null
      accessToken: string | null
      accessTokenExpiresAt: Date | null
      refreshToken: string | null
      refreshTokenExpiresAt: Date | null
      jti: string | null
      jtiExpiresAt: Date | null
      provider: string | null
      providerId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["adminAuth"]>
    composites: {}
  }

  type AdminAuthGetPayload<S extends boolean | null | undefined | AdminAuthDefaultArgs> = $Result.GetResult<Prisma.$AdminAuthPayload, S>

  type AdminAuthCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminAuthFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminAuthCountAggregateInputType | true
    }

  export interface AdminAuthDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminAuth'], meta: { name: 'AdminAuth' } }
    /**
     * Find zero or one AdminAuth that matches the filter.
     * @param {AdminAuthFindUniqueArgs} args - Arguments to find a AdminAuth
     * @example
     * // Get one AdminAuth
     * const adminAuth = await prisma.adminAuth.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminAuthFindUniqueArgs>(args: SelectSubset<T, AdminAuthFindUniqueArgs<ExtArgs>>): Prisma__AdminAuthClient<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminAuth that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminAuthFindUniqueOrThrowArgs} args - Arguments to find a AdminAuth
     * @example
     * // Get one AdminAuth
     * const adminAuth = await prisma.adminAuth.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminAuthFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminAuthFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminAuthClient<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAuth that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuthFindFirstArgs} args - Arguments to find a AdminAuth
     * @example
     * // Get one AdminAuth
     * const adminAuth = await prisma.adminAuth.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminAuthFindFirstArgs>(args?: SelectSubset<T, AdminAuthFindFirstArgs<ExtArgs>>): Prisma__AdminAuthClient<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminAuth that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuthFindFirstOrThrowArgs} args - Arguments to find a AdminAuth
     * @example
     * // Get one AdminAuth
     * const adminAuth = await prisma.adminAuth.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminAuthFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminAuthFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminAuthClient<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminAuths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuthFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminAuths
     * const adminAuths = await prisma.adminAuth.findMany()
     * 
     * // Get first 10 AdminAuths
     * const adminAuths = await prisma.adminAuth.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminAuthWithIdOnly = await prisma.adminAuth.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminAuthFindManyArgs>(args?: SelectSubset<T, AdminAuthFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminAuth.
     * @param {AdminAuthCreateArgs} args - Arguments to create a AdminAuth.
     * @example
     * // Create one AdminAuth
     * const AdminAuth = await prisma.adminAuth.create({
     *   data: {
     *     // ... data to create a AdminAuth
     *   }
     * })
     * 
     */
    create<T extends AdminAuthCreateArgs>(args: SelectSubset<T, AdminAuthCreateArgs<ExtArgs>>): Prisma__AdminAuthClient<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminAuths.
     * @param {AdminAuthCreateManyArgs} args - Arguments to create many AdminAuths.
     * @example
     * // Create many AdminAuths
     * const adminAuth = await prisma.adminAuth.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminAuthCreateManyArgs>(args?: SelectSubset<T, AdminAuthCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminAuths and returns the data saved in the database.
     * @param {AdminAuthCreateManyAndReturnArgs} args - Arguments to create many AdminAuths.
     * @example
     * // Create many AdminAuths
     * const adminAuth = await prisma.adminAuth.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminAuths and only return the `id`
     * const adminAuthWithIdOnly = await prisma.adminAuth.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminAuthCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminAuthCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminAuth.
     * @param {AdminAuthDeleteArgs} args - Arguments to delete one AdminAuth.
     * @example
     * // Delete one AdminAuth
     * const AdminAuth = await prisma.adminAuth.delete({
     *   where: {
     *     // ... filter to delete one AdminAuth
     *   }
     * })
     * 
     */
    delete<T extends AdminAuthDeleteArgs>(args: SelectSubset<T, AdminAuthDeleteArgs<ExtArgs>>): Prisma__AdminAuthClient<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminAuth.
     * @param {AdminAuthUpdateArgs} args - Arguments to update one AdminAuth.
     * @example
     * // Update one AdminAuth
     * const adminAuth = await prisma.adminAuth.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminAuthUpdateArgs>(args: SelectSubset<T, AdminAuthUpdateArgs<ExtArgs>>): Prisma__AdminAuthClient<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminAuths.
     * @param {AdminAuthDeleteManyArgs} args - Arguments to filter AdminAuths to delete.
     * @example
     * // Delete a few AdminAuths
     * const { count } = await prisma.adminAuth.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminAuthDeleteManyArgs>(args?: SelectSubset<T, AdminAuthDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuthUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminAuths
     * const adminAuth = await prisma.adminAuth.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminAuthUpdateManyArgs>(args: SelectSubset<T, AdminAuthUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminAuths and returns the data updated in the database.
     * @param {AdminAuthUpdateManyAndReturnArgs} args - Arguments to update many AdminAuths.
     * @example
     * // Update many AdminAuths
     * const adminAuth = await prisma.adminAuth.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminAuths and only return the `id`
     * const adminAuthWithIdOnly = await prisma.adminAuth.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminAuthUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminAuthUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminAuth.
     * @param {AdminAuthUpsertArgs} args - Arguments to update or create a AdminAuth.
     * @example
     * // Update or create a AdminAuth
     * const adminAuth = await prisma.adminAuth.upsert({
     *   create: {
     *     // ... data to create a AdminAuth
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminAuth we want to update
     *   }
     * })
     */
    upsert<T extends AdminAuthUpsertArgs>(args: SelectSubset<T, AdminAuthUpsertArgs<ExtArgs>>): Prisma__AdminAuthClient<$Result.GetResult<Prisma.$AdminAuthPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminAuths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuthCountArgs} args - Arguments to filter AdminAuths to count.
     * @example
     * // Count the number of AdminAuths
     * const count = await prisma.adminAuth.count({
     *   where: {
     *     // ... the filter for the AdminAuths we want to count
     *   }
     * })
    **/
    count<T extends AdminAuthCountArgs>(
      args?: Subset<T, AdminAuthCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminAuthCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuthAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAuthAggregateArgs>(args: Subset<T, AdminAuthAggregateArgs>): Prisma.PrismaPromise<GetAdminAuthAggregateType<T>>

    /**
     * Group by AdminAuth.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAuthGroupByArgs} args - Group by arguments.
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
      T extends AdminAuthGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminAuthGroupByArgs['orderBy'] }
        : { orderBy?: AdminAuthGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminAuthGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminAuthGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminAuth model
   */
  readonly fields: AdminAuthFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminAuth.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminAuthClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminAccountDefaultArgs<ExtArgs>>): Prisma__AdminAccountClient<$Result.GetResult<Prisma.$AdminAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AdminAuth model
   */
  interface AdminAuthFieldRefs {
    readonly id: FieldRef<"AdminAuth", 'String'>
    readonly adminId: FieldRef<"AdminAuth", 'String'>
    readonly otp: FieldRef<"AdminAuth", 'String'>
    readonly otpExpiresAt: FieldRef<"AdminAuth", 'DateTime'>
    readonly accessToken: FieldRef<"AdminAuth", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"AdminAuth", 'DateTime'>
    readonly refreshToken: FieldRef<"AdminAuth", 'String'>
    readonly refreshTokenExpiresAt: FieldRef<"AdminAuth", 'DateTime'>
    readonly jti: FieldRef<"AdminAuth", 'String'>
    readonly jtiExpiresAt: FieldRef<"AdminAuth", 'DateTime'>
    readonly provider: FieldRef<"AdminAuth", 'String'>
    readonly providerId: FieldRef<"AdminAuth", 'String'>
    readonly createdAt: FieldRef<"AdminAuth", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminAuth", 'DateTime'>
    readonly deletedAt: FieldRef<"AdminAuth", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminAuth findUnique
   */
  export type AdminAuthFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuth to fetch.
     */
    where: AdminAuthWhereUniqueInput
  }

  /**
   * AdminAuth findUniqueOrThrow
   */
  export type AdminAuthFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuth to fetch.
     */
    where: AdminAuthWhereUniqueInput
  }

  /**
   * AdminAuth findFirst
   */
  export type AdminAuthFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuth to fetch.
     */
    where?: AdminAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuths to fetch.
     */
    orderBy?: AdminAuthOrderByWithRelationInput | AdminAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAuths.
     */
    cursor?: AdminAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAuths.
     */
    distinct?: AdminAuthScalarFieldEnum | AdminAuthScalarFieldEnum[]
  }

  /**
   * AdminAuth findFirstOrThrow
   */
  export type AdminAuthFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuth to fetch.
     */
    where?: AdminAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuths to fetch.
     */
    orderBy?: AdminAuthOrderByWithRelationInput | AdminAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminAuths.
     */
    cursor?: AdminAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminAuths.
     */
    distinct?: AdminAuthScalarFieldEnum | AdminAuthScalarFieldEnum[]
  }

  /**
   * AdminAuth findMany
   */
  export type AdminAuthFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    /**
     * Filter, which AdminAuths to fetch.
     */
    where?: AdminAuthWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminAuths to fetch.
     */
    orderBy?: AdminAuthOrderByWithRelationInput | AdminAuthOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminAuths.
     */
    cursor?: AdminAuthWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminAuths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminAuths.
     */
    skip?: number
    distinct?: AdminAuthScalarFieldEnum | AdminAuthScalarFieldEnum[]
  }

  /**
   * AdminAuth create
   */
  export type AdminAuthCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminAuth.
     */
    data: XOR<AdminAuthCreateInput, AdminAuthUncheckedCreateInput>
  }

  /**
   * AdminAuth createMany
   */
  export type AdminAuthCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminAuths.
     */
    data: AdminAuthCreateManyInput | AdminAuthCreateManyInput[]
  }

  /**
   * AdminAuth createManyAndReturn
   */
  export type AdminAuthCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * The data used to create many AdminAuths.
     */
    data: AdminAuthCreateManyInput | AdminAuthCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminAuth update
   */
  export type AdminAuthUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminAuth.
     */
    data: XOR<AdminAuthUpdateInput, AdminAuthUncheckedUpdateInput>
    /**
     * Choose, which AdminAuth to update.
     */
    where: AdminAuthWhereUniqueInput
  }

  /**
   * AdminAuth updateMany
   */
  export type AdminAuthUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminAuths.
     */
    data: XOR<AdminAuthUpdateManyMutationInput, AdminAuthUncheckedUpdateManyInput>
    /**
     * Filter which AdminAuths to update
     */
    where?: AdminAuthWhereInput
    /**
     * Limit how many AdminAuths to update.
     */
    limit?: number
  }

  /**
   * AdminAuth updateManyAndReturn
   */
  export type AdminAuthUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * The data used to update AdminAuths.
     */
    data: XOR<AdminAuthUpdateManyMutationInput, AdminAuthUncheckedUpdateManyInput>
    /**
     * Filter which AdminAuths to update
     */
    where?: AdminAuthWhereInput
    /**
     * Limit how many AdminAuths to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdminAuth upsert
   */
  export type AdminAuthUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminAuth to update in case it exists.
     */
    where: AdminAuthWhereUniqueInput
    /**
     * In case the AdminAuth found by the `where` argument doesn't exist, create a new AdminAuth with this data.
     */
    create: XOR<AdminAuthCreateInput, AdminAuthUncheckedCreateInput>
    /**
     * In case the AdminAuth was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminAuthUpdateInput, AdminAuthUncheckedUpdateInput>
  }

  /**
   * AdminAuth delete
   */
  export type AdminAuthDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
    /**
     * Filter which AdminAuth to delete.
     */
    where: AdminAuthWhereUniqueInput
  }

  /**
   * AdminAuth deleteMany
   */
  export type AdminAuthDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminAuths to delete
     */
    where?: AdminAuthWhereInput
    /**
     * Limit how many AdminAuths to delete.
     */
    limit?: number
  }

  /**
   * AdminAuth without action
   */
  export type AdminAuthDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAuth
     */
    select?: AdminAuthSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminAuth
     */
    omit?: AdminAuthOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminAuthInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AdminAccountScalarFieldEnum = (typeof AdminAccountScalarFieldEnum)[keyof typeof AdminAccountScalarFieldEnum]


  export const AdminAuthScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    otp: 'otp',
    otpExpiresAt: 'otpExpiresAt',
    accessToken: 'accessToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshToken: 'refreshToken',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    jti: 'jti',
    jtiExpiresAt: 'jtiExpiresAt',
    provider: 'provider',
    providerId: 'providerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type AdminAuthScalarFieldEnum = (typeof AdminAuthScalarFieldEnum)[keyof typeof AdminAuthScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type AdminAccountWhereInput = {
    AND?: AdminAccountWhereInput | AdminAccountWhereInput[]
    OR?: AdminAccountWhereInput[]
    NOT?: AdminAccountWhereInput | AdminAccountWhereInput[]
    id?: StringFilter<"AdminAccount"> | string
    name?: StringFilter<"AdminAccount"> | string
    email?: StringFilter<"AdminAccount"> | string
    phone?: StringNullableFilter<"AdminAccount"> | string | null
    createdAt?: DateTimeFilter<"AdminAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AdminAccount"> | Date | string
    deletedAt?: DateTimeNullableFilter<"AdminAccount"> | Date | string | null
    AdminAuth?: AdminAuthListRelationFilter
  }

  export type AdminAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    AdminAuth?: AdminAuthOrderByRelationAggregateInput
  }

  export type AdminAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminAccountWhereInput | AdminAccountWhereInput[]
    OR?: AdminAccountWhereInput[]
    NOT?: AdminAccountWhereInput | AdminAccountWhereInput[]
    name?: StringFilter<"AdminAccount"> | string
    phone?: StringNullableFilter<"AdminAccount"> | string | null
    createdAt?: DateTimeFilter<"AdminAccount"> | Date | string
    updatedAt?: DateTimeFilter<"AdminAccount"> | Date | string
    deletedAt?: DateTimeNullableFilter<"AdminAccount"> | Date | string | null
    AdminAuth?: AdminAuthListRelationFilter
  }, "id" | "email">

  export type AdminAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AdminAccountCountOrderByAggregateInput
    _max?: AdminAccountMaxOrderByAggregateInput
    _min?: AdminAccountMinOrderByAggregateInput
  }

  export type AdminAccountScalarWhereWithAggregatesInput = {
    AND?: AdminAccountScalarWhereWithAggregatesInput | AdminAccountScalarWhereWithAggregatesInput[]
    OR?: AdminAccountScalarWhereWithAggregatesInput[]
    NOT?: AdminAccountScalarWhereWithAggregatesInput | AdminAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminAccount"> | string
    name?: StringWithAggregatesFilter<"AdminAccount"> | string
    email?: StringWithAggregatesFilter<"AdminAccount"> | string
    phone?: StringNullableWithAggregatesFilter<"AdminAccount"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminAccount"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"AdminAccount"> | Date | string | null
  }

  export type AdminAuthWhereInput = {
    AND?: AdminAuthWhereInput | AdminAuthWhereInput[]
    OR?: AdminAuthWhereInput[]
    NOT?: AdminAuthWhereInput | AdminAuthWhereInput[]
    id?: StringFilter<"AdminAuth"> | string
    adminId?: StringFilter<"AdminAuth"> | string
    otp?: StringNullableFilter<"AdminAuth"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    accessToken?: StringNullableFilter<"AdminAuth"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    refreshToken?: StringNullableFilter<"AdminAuth"> | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    jti?: StringNullableFilter<"AdminAuth"> | string | null
    jtiExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    provider?: StringNullableFilter<"AdminAuth"> | string | null
    providerId?: StringNullableFilter<"AdminAuth"> | string | null
    createdAt?: DateTimeFilter<"AdminAuth"> | Date | string
    updatedAt?: DateTimeFilter<"AdminAuth"> | Date | string
    deletedAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    admin?: XOR<AdminAccountScalarRelationFilter, AdminAccountWhereInput>
  }

  export type AdminAuthOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    jti?: SortOrderInput | SortOrder
    jtiExpiresAt?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    admin?: AdminAccountOrderByWithRelationInput
  }

  export type AdminAuthWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminAuthWhereInput | AdminAuthWhereInput[]
    OR?: AdminAuthWhereInput[]
    NOT?: AdminAuthWhereInput | AdminAuthWhereInput[]
    adminId?: StringFilter<"AdminAuth"> | string
    otp?: StringNullableFilter<"AdminAuth"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    accessToken?: StringNullableFilter<"AdminAuth"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    refreshToken?: StringNullableFilter<"AdminAuth"> | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    jti?: StringNullableFilter<"AdminAuth"> | string | null
    jtiExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    provider?: StringNullableFilter<"AdminAuth"> | string | null
    providerId?: StringNullableFilter<"AdminAuth"> | string | null
    createdAt?: DateTimeFilter<"AdminAuth"> | Date | string
    updatedAt?: DateTimeFilter<"AdminAuth"> | Date | string
    deletedAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    admin?: XOR<AdminAccountScalarRelationFilter, AdminAccountWhereInput>
  }, "id">

  export type AdminAuthOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    jti?: SortOrderInput | SortOrder
    jtiExpiresAt?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: AdminAuthCountOrderByAggregateInput
    _max?: AdminAuthMaxOrderByAggregateInput
    _min?: AdminAuthMinOrderByAggregateInput
  }

  export type AdminAuthScalarWhereWithAggregatesInput = {
    AND?: AdminAuthScalarWhereWithAggregatesInput | AdminAuthScalarWhereWithAggregatesInput[]
    OR?: AdminAuthScalarWhereWithAggregatesInput[]
    NOT?: AdminAuthScalarWhereWithAggregatesInput | AdminAuthScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminAuth"> | string
    adminId?: StringWithAggregatesFilter<"AdminAuth"> | string
    otp?: StringNullableWithAggregatesFilter<"AdminAuth"> | string | null
    otpExpiresAt?: DateTimeNullableWithAggregatesFilter<"AdminAuth"> | Date | string | null
    accessToken?: StringNullableWithAggregatesFilter<"AdminAuth"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"AdminAuth"> | Date | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"AdminAuth"> | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"AdminAuth"> | Date | string | null
    jti?: StringNullableWithAggregatesFilter<"AdminAuth"> | string | null
    jtiExpiresAt?: DateTimeNullableWithAggregatesFilter<"AdminAuth"> | Date | string | null
    provider?: StringNullableWithAggregatesFilter<"AdminAuth"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"AdminAuth"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AdminAuth"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminAuth"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"AdminAuth"> | Date | string | null
  }

  export type AdminAccountCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    AdminAuth?: AdminAuthCreateNestedManyWithoutAdminInput
  }

  export type AdminAccountUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    AdminAuth?: AdminAuthUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdminAuth?: AdminAuthUpdateManyWithoutAdminNestedInput
  }

  export type AdminAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    AdminAuth?: AdminAuthUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminAccountCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminAuthCreateInput = {
    id?: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    accessToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    jti?: string | null
    jtiExpiresAt?: Date | string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    admin: AdminAccountCreateNestedOneWithoutAdminAuthInput
  }

  export type AdminAuthUncheckedCreateInput = {
    id?: string
    adminId: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    accessToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    jti?: string | null
    jtiExpiresAt?: Date | string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminAuthUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jti?: NullableStringFieldUpdateOperationsInput | string | null
    jtiExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminAccountUpdateOneRequiredWithoutAdminAuthNestedInput
  }

  export type AdminAuthUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jti?: NullableStringFieldUpdateOperationsInput | string | null
    jtiExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminAuthCreateManyInput = {
    id?: string
    adminId: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    accessToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    jti?: string | null
    jtiExpiresAt?: Date | string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminAuthUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jti?: NullableStringFieldUpdateOperationsInput | string | null
    jtiExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminAuthUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jti?: NullableStringFieldUpdateOperationsInput | string | null
    jtiExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AdminAuthListRelationFilter = {
    every?: AdminAuthWhereInput
    some?: AdminAuthWhereInput
    none?: AdminAuthWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminAuthOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AdminAccountScalarRelationFilter = {
    is?: AdminAccountWhereInput
    isNot?: AdminAccountWhereInput
  }

  export type AdminAuthCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    accessToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshToken?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    jti?: SortOrder
    jtiExpiresAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminAuthMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    accessToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshToken?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    jti?: SortOrder
    jtiExpiresAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminAuthMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    accessToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshToken?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    jti?: SortOrder
    jtiExpiresAt?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type AdminAuthCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminAuthCreateWithoutAdminInput, AdminAuthUncheckedCreateWithoutAdminInput> | AdminAuthCreateWithoutAdminInput[] | AdminAuthUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminAuthCreateOrConnectWithoutAdminInput | AdminAuthCreateOrConnectWithoutAdminInput[]
    createMany?: AdminAuthCreateManyAdminInputEnvelope
    connect?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
  }

  export type AdminAuthUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<AdminAuthCreateWithoutAdminInput, AdminAuthUncheckedCreateWithoutAdminInput> | AdminAuthCreateWithoutAdminInput[] | AdminAuthUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminAuthCreateOrConnectWithoutAdminInput | AdminAuthCreateOrConnectWithoutAdminInput[]
    createMany?: AdminAuthCreateManyAdminInputEnvelope
    connect?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AdminAuthUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminAuthCreateWithoutAdminInput, AdminAuthUncheckedCreateWithoutAdminInput> | AdminAuthCreateWithoutAdminInput[] | AdminAuthUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminAuthCreateOrConnectWithoutAdminInput | AdminAuthCreateOrConnectWithoutAdminInput[]
    upsert?: AdminAuthUpsertWithWhereUniqueWithoutAdminInput | AdminAuthUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminAuthCreateManyAdminInputEnvelope
    set?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
    disconnect?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
    delete?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
    connect?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
    update?: AdminAuthUpdateWithWhereUniqueWithoutAdminInput | AdminAuthUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminAuthUpdateManyWithWhereWithoutAdminInput | AdminAuthUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminAuthScalarWhereInput | AdminAuthScalarWhereInput[]
  }

  export type AdminAuthUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<AdminAuthCreateWithoutAdminInput, AdminAuthUncheckedCreateWithoutAdminInput> | AdminAuthCreateWithoutAdminInput[] | AdminAuthUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: AdminAuthCreateOrConnectWithoutAdminInput | AdminAuthCreateOrConnectWithoutAdminInput[]
    upsert?: AdminAuthUpsertWithWhereUniqueWithoutAdminInput | AdminAuthUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: AdminAuthCreateManyAdminInputEnvelope
    set?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
    disconnect?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
    delete?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
    connect?: AdminAuthWhereUniqueInput | AdminAuthWhereUniqueInput[]
    update?: AdminAuthUpdateWithWhereUniqueWithoutAdminInput | AdminAuthUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: AdminAuthUpdateManyWithWhereWithoutAdminInput | AdminAuthUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: AdminAuthScalarWhereInput | AdminAuthScalarWhereInput[]
  }

  export type AdminAccountCreateNestedOneWithoutAdminAuthInput = {
    create?: XOR<AdminAccountCreateWithoutAdminAuthInput, AdminAccountUncheckedCreateWithoutAdminAuthInput>
    connectOrCreate?: AdminAccountCreateOrConnectWithoutAdminAuthInput
    connect?: AdminAccountWhereUniqueInput
  }

  export type AdminAccountUpdateOneRequiredWithoutAdminAuthNestedInput = {
    create?: XOR<AdminAccountCreateWithoutAdminAuthInput, AdminAccountUncheckedCreateWithoutAdminAuthInput>
    connectOrCreate?: AdminAccountCreateOrConnectWithoutAdminAuthInput
    upsert?: AdminAccountUpsertWithoutAdminAuthInput
    connect?: AdminAccountWhereUniqueInput
    update?: XOR<XOR<AdminAccountUpdateToOneWithWhereWithoutAdminAuthInput, AdminAccountUpdateWithoutAdminAuthInput>, AdminAccountUncheckedUpdateWithoutAdminAuthInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AdminAuthCreateWithoutAdminInput = {
    id?: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    accessToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    jti?: string | null
    jtiExpiresAt?: Date | string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminAuthUncheckedCreateWithoutAdminInput = {
    id?: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    accessToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    jti?: string | null
    jtiExpiresAt?: Date | string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminAuthCreateOrConnectWithoutAdminInput = {
    where: AdminAuthWhereUniqueInput
    create: XOR<AdminAuthCreateWithoutAdminInput, AdminAuthUncheckedCreateWithoutAdminInput>
  }

  export type AdminAuthCreateManyAdminInputEnvelope = {
    data: AdminAuthCreateManyAdminInput | AdminAuthCreateManyAdminInput[]
  }

  export type AdminAuthUpsertWithWhereUniqueWithoutAdminInput = {
    where: AdminAuthWhereUniqueInput
    update: XOR<AdminAuthUpdateWithoutAdminInput, AdminAuthUncheckedUpdateWithoutAdminInput>
    create: XOR<AdminAuthCreateWithoutAdminInput, AdminAuthUncheckedCreateWithoutAdminInput>
  }

  export type AdminAuthUpdateWithWhereUniqueWithoutAdminInput = {
    where: AdminAuthWhereUniqueInput
    data: XOR<AdminAuthUpdateWithoutAdminInput, AdminAuthUncheckedUpdateWithoutAdminInput>
  }

  export type AdminAuthUpdateManyWithWhereWithoutAdminInput = {
    where: AdminAuthScalarWhereInput
    data: XOR<AdminAuthUpdateManyMutationInput, AdminAuthUncheckedUpdateManyWithoutAdminInput>
  }

  export type AdminAuthScalarWhereInput = {
    AND?: AdminAuthScalarWhereInput | AdminAuthScalarWhereInput[]
    OR?: AdminAuthScalarWhereInput[]
    NOT?: AdminAuthScalarWhereInput | AdminAuthScalarWhereInput[]
    id?: StringFilter<"AdminAuth"> | string
    adminId?: StringFilter<"AdminAuth"> | string
    otp?: StringNullableFilter<"AdminAuth"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    accessToken?: StringNullableFilter<"AdminAuth"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    refreshToken?: StringNullableFilter<"AdminAuth"> | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    jti?: StringNullableFilter<"AdminAuth"> | string | null
    jtiExpiresAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
    provider?: StringNullableFilter<"AdminAuth"> | string | null
    providerId?: StringNullableFilter<"AdminAuth"> | string | null
    createdAt?: DateTimeFilter<"AdminAuth"> | Date | string
    updatedAt?: DateTimeFilter<"AdminAuth"> | Date | string
    deletedAt?: DateTimeNullableFilter<"AdminAuth"> | Date | string | null
  }

  export type AdminAccountCreateWithoutAdminAuthInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminAccountUncheckedCreateWithoutAdminAuthInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminAccountCreateOrConnectWithoutAdminAuthInput = {
    where: AdminAccountWhereUniqueInput
    create: XOR<AdminAccountCreateWithoutAdminAuthInput, AdminAccountUncheckedCreateWithoutAdminAuthInput>
  }

  export type AdminAccountUpsertWithoutAdminAuthInput = {
    update: XOR<AdminAccountUpdateWithoutAdminAuthInput, AdminAccountUncheckedUpdateWithoutAdminAuthInput>
    create: XOR<AdminAccountCreateWithoutAdminAuthInput, AdminAccountUncheckedCreateWithoutAdminAuthInput>
    where?: AdminAccountWhereInput
  }

  export type AdminAccountUpdateToOneWithWhereWithoutAdminAuthInput = {
    where?: AdminAccountWhereInput
    data: XOR<AdminAccountUpdateWithoutAdminAuthInput, AdminAccountUncheckedUpdateWithoutAdminAuthInput>
  }

  export type AdminAccountUpdateWithoutAdminAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminAccountUncheckedUpdateWithoutAdminAuthInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminAuthCreateManyAdminInput = {
    id?: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    accessToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshToken?: string | null
    refreshTokenExpiresAt?: Date | string | null
    jti?: string | null
    jtiExpiresAt?: Date | string | null
    provider?: string | null
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type AdminAuthUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jti?: NullableStringFieldUpdateOperationsInput | string | null
    jtiExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminAuthUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jti?: NullableStringFieldUpdateOperationsInput | string | null
    jtiExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminAuthUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    jti?: NullableStringFieldUpdateOperationsInput | string | null
    jtiExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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