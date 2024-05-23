
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
 * Model Cryptocurrency
 * 
 */
export type Cryptocurrency = $Result.DefaultSelection<Prisma.$CryptocurrencyPayload>
/**
 * Model FiatCurrency
 * 
 */
export type FiatCurrency = $Result.DefaultSelection<Prisma.$FiatCurrencyPayload>
/**
 * Model CryptoWallet
 * 
 */
export type CryptoWallet = $Result.DefaultSelection<Prisma.$CryptoWalletPayload>
/**
 * Model FiatWallet
 * 
 */
export type FiatWallet = $Result.DefaultSelection<Prisma.$FiatWalletPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Transfer
 * 
 */
export type Transfer = $Result.DefaultSelection<Prisma.$TransferPayload>
/**
 * Model ExternalTransfer
 * 
 */
export type ExternalTransfer = $Result.DefaultSelection<Prisma.$ExternalTransferPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionType: {
  BUY: 'BUY',
  SELL: 'SELL'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransferType: {
  INTERNAL: 'INTERNAL',
  EXTERNAL: 'EXTERNAL'
};

export type TransferType = (typeof TransferType)[keyof typeof TransferType]

}

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransferType = $Enums.TransferType

export const TransferType: typeof $Enums.TransferType

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.cryptocurrency`: Exposes CRUD operations for the **Cryptocurrency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cryptocurrencies
    * const cryptocurrencies = await prisma.cryptocurrency.findMany()
    * ```
    */
  get cryptocurrency(): Prisma.CryptocurrencyDelegate<ExtArgs>;

  /**
   * `prisma.fiatCurrency`: Exposes CRUD operations for the **FiatCurrency** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FiatCurrencies
    * const fiatCurrencies = await prisma.fiatCurrency.findMany()
    * ```
    */
  get fiatCurrency(): Prisma.FiatCurrencyDelegate<ExtArgs>;

  /**
   * `prisma.cryptoWallet`: Exposes CRUD operations for the **CryptoWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CryptoWallets
    * const cryptoWallets = await prisma.cryptoWallet.findMany()
    * ```
    */
  get cryptoWallet(): Prisma.CryptoWalletDelegate<ExtArgs>;

  /**
   * `prisma.fiatWallet`: Exposes CRUD operations for the **FiatWallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FiatWallets
    * const fiatWallets = await prisma.fiatWallet.findMany()
    * ```
    */
  get fiatWallet(): Prisma.FiatWalletDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.transfer`: Exposes CRUD operations for the **Transfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transfers
    * const transfers = await prisma.transfer.findMany()
    * ```
    */
  get transfer(): Prisma.TransferDelegate<ExtArgs>;

  /**
   * `prisma.externalTransfer`: Exposes CRUD operations for the **ExternalTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalTransfers
    * const externalTransfers = await prisma.externalTransfer.findMany()
    * ```
    */
  get externalTransfer(): Prisma.ExternalTransferDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Cryptocurrency: 'Cryptocurrency',
    FiatCurrency: 'FiatCurrency',
    CryptoWallet: 'CryptoWallet',
    FiatWallet: 'FiatWallet',
    Transaction: 'Transaction',
    Transfer: 'Transfer',
    ExternalTransfer: 'ExternalTransfer'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'cryptocurrency' | 'fiatCurrency' | 'cryptoWallet' | 'fiatWallet' | 'transaction' | 'transfer' | 'externalTransfer'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Cryptocurrency: {
        payload: Prisma.$CryptocurrencyPayload<ExtArgs>
        fields: Prisma.CryptocurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CryptocurrencyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CryptocurrencyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          findFirst: {
            args: Prisma.CryptocurrencyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CryptocurrencyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          findMany: {
            args: Prisma.CryptocurrencyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>[]
          }
          create: {
            args: Prisma.CryptocurrencyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          createMany: {
            args: Prisma.CryptocurrencyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CryptocurrencyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          update: {
            args: Prisma.CryptocurrencyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          deleteMany: {
            args: Prisma.CryptocurrencyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CryptocurrencyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CryptocurrencyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptocurrencyPayload>
          }
          aggregate: {
            args: Prisma.CryptocurrencyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCryptocurrency>
          }
          groupBy: {
            args: Prisma.CryptocurrencyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CryptocurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CryptocurrencyCountArgs<ExtArgs>,
            result: $Utils.Optional<CryptocurrencyCountAggregateOutputType> | number
          }
        }
      }
      FiatCurrency: {
        payload: Prisma.$FiatCurrencyPayload<ExtArgs>
        fields: Prisma.FiatCurrencyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiatCurrencyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiatCurrencyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          findFirst: {
            args: Prisma.FiatCurrencyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiatCurrencyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          findMany: {
            args: Prisma.FiatCurrencyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>[]
          }
          create: {
            args: Prisma.FiatCurrencyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          createMany: {
            args: Prisma.FiatCurrencyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FiatCurrencyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          update: {
            args: Prisma.FiatCurrencyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          deleteMany: {
            args: Prisma.FiatCurrencyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FiatCurrencyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FiatCurrencyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatCurrencyPayload>
          }
          aggregate: {
            args: Prisma.FiatCurrencyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFiatCurrency>
          }
          groupBy: {
            args: Prisma.FiatCurrencyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FiatCurrencyGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiatCurrencyCountArgs<ExtArgs>,
            result: $Utils.Optional<FiatCurrencyCountAggregateOutputType> | number
          }
        }
      }
      CryptoWallet: {
        payload: Prisma.$CryptoWalletPayload<ExtArgs>
        fields: Prisma.CryptoWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CryptoWalletFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CryptoWalletFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletPayload>
          }
          findFirst: {
            args: Prisma.CryptoWalletFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CryptoWalletFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletPayload>
          }
          findMany: {
            args: Prisma.CryptoWalletFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletPayload>[]
          }
          create: {
            args: Prisma.CryptoWalletCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletPayload>
          }
          createMany: {
            args: Prisma.CryptoWalletCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CryptoWalletDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletPayload>
          }
          update: {
            args: Prisma.CryptoWalletUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletPayload>
          }
          deleteMany: {
            args: Prisma.CryptoWalletDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CryptoWalletUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CryptoWalletUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CryptoWalletPayload>
          }
          aggregate: {
            args: Prisma.CryptoWalletAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCryptoWallet>
          }
          groupBy: {
            args: Prisma.CryptoWalletGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CryptoWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.CryptoWalletCountArgs<ExtArgs>,
            result: $Utils.Optional<CryptoWalletCountAggregateOutputType> | number
          }
        }
      }
      FiatWallet: {
        payload: Prisma.$FiatWalletPayload<ExtArgs>
        fields: Prisma.FiatWalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FiatWalletFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatWalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FiatWalletFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatWalletPayload>
          }
          findFirst: {
            args: Prisma.FiatWalletFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatWalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FiatWalletFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatWalletPayload>
          }
          findMany: {
            args: Prisma.FiatWalletFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatWalletPayload>[]
          }
          create: {
            args: Prisma.FiatWalletCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatWalletPayload>
          }
          createMany: {
            args: Prisma.FiatWalletCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FiatWalletDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatWalletPayload>
          }
          update: {
            args: Prisma.FiatWalletUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatWalletPayload>
          }
          deleteMany: {
            args: Prisma.FiatWalletDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FiatWalletUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FiatWalletUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FiatWalletPayload>
          }
          aggregate: {
            args: Prisma.FiatWalletAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFiatWallet>
          }
          groupBy: {
            args: Prisma.FiatWalletGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FiatWalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.FiatWalletCountArgs<ExtArgs>,
            result: $Utils.Optional<FiatWalletCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>,
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Transfer: {
        payload: Prisma.$TransferPayload<ExtArgs>
        fields: Prisma.TransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransferFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransferFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          findFirst: {
            args: Prisma.TransferFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransferFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          findMany: {
            args: Prisma.TransferFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>[]
          }
          create: {
            args: Prisma.TransferCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          createMany: {
            args: Prisma.TransferCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TransferDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          update: {
            args: Prisma.TransferUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          deleteMany: {
            args: Prisma.TransferDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TransferUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TransferUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TransferPayload>
          }
          aggregate: {
            args: Prisma.TransferAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTransfer>
          }
          groupBy: {
            args: Prisma.TransferGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransferCountArgs<ExtArgs>,
            result: $Utils.Optional<TransferCountAggregateOutputType> | number
          }
        }
      }
      ExternalTransfer: {
        payload: Prisma.$ExternalTransferPayload<ExtArgs>
        fields: Prisma.ExternalTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalTransferFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalTransferFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTransferPayload>
          }
          findFirst: {
            args: Prisma.ExternalTransferFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalTransferFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTransferPayload>
          }
          findMany: {
            args: Prisma.ExternalTransferFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTransferPayload>[]
          }
          create: {
            args: Prisma.ExternalTransferCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTransferPayload>
          }
          createMany: {
            args: Prisma.ExternalTransferCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExternalTransferDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTransferPayload>
          }
          update: {
            args: Prisma.ExternalTransferUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTransferPayload>
          }
          deleteMany: {
            args: Prisma.ExternalTransferDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalTransferUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExternalTransferUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExternalTransferPayload>
          }
          aggregate: {
            args: Prisma.ExternalTransferAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExternalTransfer>
          }
          groupBy: {
            args: Prisma.ExternalTransferGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExternalTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalTransferCountArgs<ExtArgs>,
            result: $Utils.Optional<ExternalTransferCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    cryptoWallets: number
    fiatWallets: number
    transactions: number
    transfers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cryptoWallets?: boolean | UserCountOutputTypeCountCryptoWalletsArgs
    fiatWallets?: boolean | UserCountOutputTypeCountFiatWalletsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    transfers?: boolean | UserCountOutputTypeCountTransfersArgs
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
  export type UserCountOutputTypeCountCryptoWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoWalletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFiatWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiatWalletWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
  }


  /**
   * Count Type CryptocurrencyCountOutputType
   */

  export type CryptocurrencyCountOutputType = {
    cryptoWallets: number
    transactions: number
  }

  export type CryptocurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cryptoWallets?: boolean | CryptocurrencyCountOutputTypeCountCryptoWalletsArgs
    transactions?: boolean | CryptocurrencyCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * CryptocurrencyCountOutputType without action
   */
  export type CryptocurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptocurrencyCountOutputType
     */
    select?: CryptocurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CryptocurrencyCountOutputType without action
   */
  export type CryptocurrencyCountOutputTypeCountCryptoWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoWalletWhereInput
  }

  /**
   * CryptocurrencyCountOutputType without action
   */
  export type CryptocurrencyCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type FiatCurrencyCountOutputType
   */

  export type FiatCurrencyCountOutputType = {
    fiatWallets: number
    transactions: number
  }

  export type FiatCurrencyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fiatWallets?: boolean | FiatCurrencyCountOutputTypeCountFiatWalletsArgs
    transactions?: boolean | FiatCurrencyCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * FiatCurrencyCountOutputType without action
   */
  export type FiatCurrencyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrencyCountOutputType
     */
    select?: FiatCurrencyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FiatCurrencyCountOutputType without action
   */
  export type FiatCurrencyCountOutputTypeCountFiatWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiatWalletWhereInput
  }

  /**
   * FiatCurrencyCountOutputType without action
   */
  export type FiatCurrencyCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type CryptoWalletCountOutputType
   */

  export type CryptoWalletCountOutputType = {
    transfersFrom: number
    transfersTo: number
  }

  export type CryptoWalletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transfersFrom?: boolean | CryptoWalletCountOutputTypeCountTransfersFromArgs
    transfersTo?: boolean | CryptoWalletCountOutputTypeCountTransfersToArgs
  }

  // Custom InputTypes
  /**
   * CryptoWalletCountOutputType without action
   */
  export type CryptoWalletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWalletCountOutputType
     */
    select?: CryptoWalletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CryptoWalletCountOutputType without action
   */
  export type CryptoWalletCountOutputTypeCountTransfersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
  }

  /**
   * CryptoWalletCountOutputType without action
   */
  export type CryptoWalletCountOutputTypeCountTransfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    fullName: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    fullName: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    fullName: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    fullName?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    fullName?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    fullName?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    fullName: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    username?: boolean
    password?: boolean
    email?: boolean
    fullName?: boolean
    createdAt?: boolean
    cryptoWallets?: boolean | User$cryptoWalletsArgs<ExtArgs>
    fiatWallets?: boolean | User$fiatWalletsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    transfers?: boolean | User$transfersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    fullName?: boolean
    createdAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cryptoWallets?: boolean | User$cryptoWalletsArgs<ExtArgs>
    fiatWallets?: boolean | User$fiatWalletsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    transfers?: boolean | User$transfersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cryptoWallets: Prisma.$CryptoWalletPayload<ExtArgs>[]
      fiatWallets: Prisma.$FiatWalletPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      transfers: Prisma.$TransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      fullName: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cryptoWallets<T extends User$cryptoWalletsArgs<ExtArgs> = {}>(args?: Subset<T, User$cryptoWalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'findMany'> | Null>;

    fiatWallets<T extends User$fiatWalletsArgs<ExtArgs> = {}>(args?: Subset<T, User$fiatWalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'findMany'> | Null>;

    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    transfers<T extends User$transfersArgs<ExtArgs> = {}>(args?: Subset<T, User$transfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
    skipDuplicates?: boolean
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
  }

  /**
   * User.cryptoWallets
   */
  export type User$cryptoWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    where?: CryptoWalletWhereInput
    orderBy?: CryptoWalletOrderByWithRelationInput | CryptoWalletOrderByWithRelationInput[]
    cursor?: CryptoWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CryptoWalletScalarFieldEnum | CryptoWalletScalarFieldEnum[]
  }

  /**
   * User.fiatWallets
   */
  export type User$fiatWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    where?: FiatWalletWhereInput
    orderBy?: FiatWalletOrderByWithRelationInput | FiatWalletOrderByWithRelationInput[]
    cursor?: FiatWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FiatWalletScalarFieldEnum | FiatWalletScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.transfers
   */
  export type User$transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    cursor?: TransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Cryptocurrency
   */

  export type AggregateCryptocurrency = {
    _count: CryptocurrencyCountAggregateOutputType | null
    _avg: CryptocurrencyAvgAggregateOutputType | null
    _sum: CryptocurrencySumAggregateOutputType | null
    _min: CryptocurrencyMinAggregateOutputType | null
    _max: CryptocurrencyMaxAggregateOutputType | null
  }

  export type CryptocurrencyAvgAggregateOutputType = {
    id: number | null
  }

  export type CryptocurrencySumAggregateOutputType = {
    id: number | null
  }

  export type CryptocurrencyMinAggregateOutputType = {
    id: number | null
    name: string | null
    symbol: string | null
  }

  export type CryptocurrencyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    symbol: string | null
  }

  export type CryptocurrencyCountAggregateOutputType = {
    id: number
    name: number
    symbol: number
    _all: number
  }


  export type CryptocurrencyAvgAggregateInputType = {
    id?: true
  }

  export type CryptocurrencySumAggregateInputType = {
    id?: true
  }

  export type CryptocurrencyMinAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
  }

  export type CryptocurrencyMaxAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
  }

  export type CryptocurrencyCountAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    _all?: true
  }

  export type CryptocurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cryptocurrency to aggregate.
     */
    where?: CryptocurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptocurrencies to fetch.
     */
    orderBy?: CryptocurrencyOrderByWithRelationInput | CryptocurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CryptocurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptocurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptocurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cryptocurrencies
    **/
    _count?: true | CryptocurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CryptocurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CryptocurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CryptocurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CryptocurrencyMaxAggregateInputType
  }

  export type GetCryptocurrencyAggregateType<T extends CryptocurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateCryptocurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCryptocurrency[P]>
      : GetScalarType<T[P], AggregateCryptocurrency[P]>
  }




  export type CryptocurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptocurrencyWhereInput
    orderBy?: CryptocurrencyOrderByWithAggregationInput | CryptocurrencyOrderByWithAggregationInput[]
    by: CryptocurrencyScalarFieldEnum[] | CryptocurrencyScalarFieldEnum
    having?: CryptocurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CryptocurrencyCountAggregateInputType | true
    _avg?: CryptocurrencyAvgAggregateInputType
    _sum?: CryptocurrencySumAggregateInputType
    _min?: CryptocurrencyMinAggregateInputType
    _max?: CryptocurrencyMaxAggregateInputType
  }

  export type CryptocurrencyGroupByOutputType = {
    id: number
    name: string
    symbol: string
    _count: CryptocurrencyCountAggregateOutputType | null
    _avg: CryptocurrencyAvgAggregateOutputType | null
    _sum: CryptocurrencySumAggregateOutputType | null
    _min: CryptocurrencyMinAggregateOutputType | null
    _max: CryptocurrencyMaxAggregateOutputType | null
  }

  type GetCryptocurrencyGroupByPayload<T extends CryptocurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CryptocurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CryptocurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CryptocurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], CryptocurrencyGroupByOutputType[P]>
        }
      >
    >


  export type CryptocurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    cryptoWallets?: boolean | Cryptocurrency$cryptoWalletsArgs<ExtArgs>
    transactions?: boolean | Cryptocurrency$transactionsArgs<ExtArgs>
    _count?: boolean | CryptocurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cryptocurrency"]>

  export type CryptocurrencySelectScalar = {
    id?: boolean
    name?: boolean
    symbol?: boolean
  }


  export type CryptocurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cryptoWallets?: boolean | Cryptocurrency$cryptoWalletsArgs<ExtArgs>
    transactions?: boolean | Cryptocurrency$transactionsArgs<ExtArgs>
    _count?: boolean | CryptocurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CryptocurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cryptocurrency"
    objects: {
      cryptoWallets: Prisma.$CryptoWalletPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      symbol: string
    }, ExtArgs["result"]["cryptocurrency"]>
    composites: {}
  }


  type CryptocurrencyGetPayload<S extends boolean | null | undefined | CryptocurrencyDefaultArgs> = $Result.GetResult<Prisma.$CryptocurrencyPayload, S>

  type CryptocurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CryptocurrencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CryptocurrencyCountAggregateInputType | true
    }

  export interface CryptocurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cryptocurrency'], meta: { name: 'Cryptocurrency' } }
    /**
     * Find zero or one Cryptocurrency that matches the filter.
     * @param {CryptocurrencyFindUniqueArgs} args - Arguments to find a Cryptocurrency
     * @example
     * // Get one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CryptocurrencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CryptocurrencyFindUniqueArgs<ExtArgs>>
    ): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cryptocurrency that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CryptocurrencyFindUniqueOrThrowArgs} args - Arguments to find a Cryptocurrency
     * @example
     * // Get one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CryptocurrencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptocurrencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cryptocurrency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyFindFirstArgs} args - Arguments to find a Cryptocurrency
     * @example
     * // Get one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CryptocurrencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptocurrencyFindFirstArgs<ExtArgs>>
    ): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cryptocurrency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyFindFirstOrThrowArgs} args - Arguments to find a Cryptocurrency
     * @example
     * // Get one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CryptocurrencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptocurrencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cryptocurrencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cryptocurrencies
     * const cryptocurrencies = await prisma.cryptocurrency.findMany()
     * 
     * // Get first 10 Cryptocurrencies
     * const cryptocurrencies = await prisma.cryptocurrency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cryptocurrencyWithIdOnly = await prisma.cryptocurrency.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CryptocurrencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptocurrencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cryptocurrency.
     * @param {CryptocurrencyCreateArgs} args - Arguments to create a Cryptocurrency.
     * @example
     * // Create one Cryptocurrency
     * const Cryptocurrency = await prisma.cryptocurrency.create({
     *   data: {
     *     // ... data to create a Cryptocurrency
     *   }
     * })
     * 
    **/
    create<T extends CryptocurrencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CryptocurrencyCreateArgs<ExtArgs>>
    ): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cryptocurrencies.
     * @param {CryptocurrencyCreateManyArgs} args - Arguments to create many Cryptocurrencies.
     * @example
     * // Create many Cryptocurrencies
     * const cryptocurrency = await prisma.cryptocurrency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CryptocurrencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptocurrencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cryptocurrency.
     * @param {CryptocurrencyDeleteArgs} args - Arguments to delete one Cryptocurrency.
     * @example
     * // Delete one Cryptocurrency
     * const Cryptocurrency = await prisma.cryptocurrency.delete({
     *   where: {
     *     // ... filter to delete one Cryptocurrency
     *   }
     * })
     * 
    **/
    delete<T extends CryptocurrencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CryptocurrencyDeleteArgs<ExtArgs>>
    ): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cryptocurrency.
     * @param {CryptocurrencyUpdateArgs} args - Arguments to update one Cryptocurrency.
     * @example
     * // Update one Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CryptocurrencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CryptocurrencyUpdateArgs<ExtArgs>>
    ): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cryptocurrencies.
     * @param {CryptocurrencyDeleteManyArgs} args - Arguments to filter Cryptocurrencies to delete.
     * @example
     * // Delete a few Cryptocurrencies
     * const { count } = await prisma.cryptocurrency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CryptocurrencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptocurrencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cryptocurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cryptocurrencies
     * const cryptocurrency = await prisma.cryptocurrency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CryptocurrencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CryptocurrencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cryptocurrency.
     * @param {CryptocurrencyUpsertArgs} args - Arguments to update or create a Cryptocurrency.
     * @example
     * // Update or create a Cryptocurrency
     * const cryptocurrency = await prisma.cryptocurrency.upsert({
     *   create: {
     *     // ... data to create a Cryptocurrency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cryptocurrency we want to update
     *   }
     * })
    **/
    upsert<T extends CryptocurrencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CryptocurrencyUpsertArgs<ExtArgs>>
    ): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cryptocurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyCountArgs} args - Arguments to filter Cryptocurrencies to count.
     * @example
     * // Count the number of Cryptocurrencies
     * const count = await prisma.cryptocurrency.count({
     *   where: {
     *     // ... the filter for the Cryptocurrencies we want to count
     *   }
     * })
    **/
    count<T extends CryptocurrencyCountArgs>(
      args?: Subset<T, CryptocurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CryptocurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cryptocurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CryptocurrencyAggregateArgs>(args: Subset<T, CryptocurrencyAggregateArgs>): Prisma.PrismaPromise<GetCryptocurrencyAggregateType<T>>

    /**
     * Group by Cryptocurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptocurrencyGroupByArgs} args - Group by arguments.
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
      T extends CryptocurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CryptocurrencyGroupByArgs['orderBy'] }
        : { orderBy?: CryptocurrencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CryptocurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCryptocurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cryptocurrency model
   */
  readonly fields: CryptocurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cryptocurrency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CryptocurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    cryptoWallets<T extends Cryptocurrency$cryptoWalletsArgs<ExtArgs> = {}>(args?: Subset<T, Cryptocurrency$cryptoWalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'findMany'> | Null>;

    transactions<T extends Cryptocurrency$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Cryptocurrency$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cryptocurrency model
   */ 
  interface CryptocurrencyFieldRefs {
    readonly id: FieldRef<"Cryptocurrency", 'Int'>
    readonly name: FieldRef<"Cryptocurrency", 'String'>
    readonly symbol: FieldRef<"Cryptocurrency", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cryptocurrency findUnique
   */
  export type CryptocurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrency to fetch.
     */
    where: CryptocurrencyWhereUniqueInput
  }

  /**
   * Cryptocurrency findUniqueOrThrow
   */
  export type CryptocurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrency to fetch.
     */
    where: CryptocurrencyWhereUniqueInput
  }

  /**
   * Cryptocurrency findFirst
   */
  export type CryptocurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrency to fetch.
     */
    where?: CryptocurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptocurrencies to fetch.
     */
    orderBy?: CryptocurrencyOrderByWithRelationInput | CryptocurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cryptocurrencies.
     */
    cursor?: CryptocurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptocurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptocurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cryptocurrencies.
     */
    distinct?: CryptocurrencyScalarFieldEnum | CryptocurrencyScalarFieldEnum[]
  }

  /**
   * Cryptocurrency findFirstOrThrow
   */
  export type CryptocurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrency to fetch.
     */
    where?: CryptocurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptocurrencies to fetch.
     */
    orderBy?: CryptocurrencyOrderByWithRelationInput | CryptocurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cryptocurrencies.
     */
    cursor?: CryptocurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptocurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptocurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cryptocurrencies.
     */
    distinct?: CryptocurrencyScalarFieldEnum | CryptocurrencyScalarFieldEnum[]
  }

  /**
   * Cryptocurrency findMany
   */
  export type CryptocurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter, which Cryptocurrencies to fetch.
     */
    where?: CryptocurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cryptocurrencies to fetch.
     */
    orderBy?: CryptocurrencyOrderByWithRelationInput | CryptocurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cryptocurrencies.
     */
    cursor?: CryptocurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cryptocurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cryptocurrencies.
     */
    skip?: number
    distinct?: CryptocurrencyScalarFieldEnum | CryptocurrencyScalarFieldEnum[]
  }

  /**
   * Cryptocurrency create
   */
  export type CryptocurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a Cryptocurrency.
     */
    data: XOR<CryptocurrencyCreateInput, CryptocurrencyUncheckedCreateInput>
  }

  /**
   * Cryptocurrency createMany
   */
  export type CryptocurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cryptocurrencies.
     */
    data: CryptocurrencyCreateManyInput | CryptocurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cryptocurrency update
   */
  export type CryptocurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a Cryptocurrency.
     */
    data: XOR<CryptocurrencyUpdateInput, CryptocurrencyUncheckedUpdateInput>
    /**
     * Choose, which Cryptocurrency to update.
     */
    where: CryptocurrencyWhereUniqueInput
  }

  /**
   * Cryptocurrency updateMany
   */
  export type CryptocurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cryptocurrencies.
     */
    data: XOR<CryptocurrencyUpdateManyMutationInput, CryptocurrencyUncheckedUpdateManyInput>
    /**
     * Filter which Cryptocurrencies to update
     */
    where?: CryptocurrencyWhereInput
  }

  /**
   * Cryptocurrency upsert
   */
  export type CryptocurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the Cryptocurrency to update in case it exists.
     */
    where: CryptocurrencyWhereUniqueInput
    /**
     * In case the Cryptocurrency found by the `where` argument doesn't exist, create a new Cryptocurrency with this data.
     */
    create: XOR<CryptocurrencyCreateInput, CryptocurrencyUncheckedCreateInput>
    /**
     * In case the Cryptocurrency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CryptocurrencyUpdateInput, CryptocurrencyUncheckedUpdateInput>
  }

  /**
   * Cryptocurrency delete
   */
  export type CryptocurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
    /**
     * Filter which Cryptocurrency to delete.
     */
    where: CryptocurrencyWhereUniqueInput
  }

  /**
   * Cryptocurrency deleteMany
   */
  export type CryptocurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cryptocurrencies to delete
     */
    where?: CryptocurrencyWhereInput
  }

  /**
   * Cryptocurrency.cryptoWallets
   */
  export type Cryptocurrency$cryptoWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    where?: CryptoWalletWhereInput
    orderBy?: CryptoWalletOrderByWithRelationInput | CryptoWalletOrderByWithRelationInput[]
    cursor?: CryptoWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CryptoWalletScalarFieldEnum | CryptoWalletScalarFieldEnum[]
  }

  /**
   * Cryptocurrency.transactions
   */
  export type Cryptocurrency$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Cryptocurrency without action
   */
  export type CryptocurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cryptocurrency
     */
    select?: CryptocurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptocurrencyInclude<ExtArgs> | null
  }


  /**
   * Model FiatCurrency
   */

  export type AggregateFiatCurrency = {
    _count: FiatCurrencyCountAggregateOutputType | null
    _avg: FiatCurrencyAvgAggregateOutputType | null
    _sum: FiatCurrencySumAggregateOutputType | null
    _min: FiatCurrencyMinAggregateOutputType | null
    _max: FiatCurrencyMaxAggregateOutputType | null
  }

  export type FiatCurrencyAvgAggregateOutputType = {
    id: number | null
  }

  export type FiatCurrencySumAggregateOutputType = {
    id: number | null
  }

  export type FiatCurrencyMinAggregateOutputType = {
    id: number | null
    name: string | null
    symbol: string | null
  }

  export type FiatCurrencyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    symbol: string | null
  }

  export type FiatCurrencyCountAggregateOutputType = {
    id: number
    name: number
    symbol: number
    _all: number
  }


  export type FiatCurrencyAvgAggregateInputType = {
    id?: true
  }

  export type FiatCurrencySumAggregateInputType = {
    id?: true
  }

  export type FiatCurrencyMinAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
  }

  export type FiatCurrencyMaxAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
  }

  export type FiatCurrencyCountAggregateInputType = {
    id?: true
    name?: true
    symbol?: true
    _all?: true
  }

  export type FiatCurrencyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiatCurrency to aggregate.
     */
    where?: FiatCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatCurrencies to fetch.
     */
    orderBy?: FiatCurrencyOrderByWithRelationInput | FiatCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiatCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatCurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FiatCurrencies
    **/
    _count?: true | FiatCurrencyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FiatCurrencyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FiatCurrencySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiatCurrencyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiatCurrencyMaxAggregateInputType
  }

  export type GetFiatCurrencyAggregateType<T extends FiatCurrencyAggregateArgs> = {
        [P in keyof T & keyof AggregateFiatCurrency]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiatCurrency[P]>
      : GetScalarType<T[P], AggregateFiatCurrency[P]>
  }




  export type FiatCurrencyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiatCurrencyWhereInput
    orderBy?: FiatCurrencyOrderByWithAggregationInput | FiatCurrencyOrderByWithAggregationInput[]
    by: FiatCurrencyScalarFieldEnum[] | FiatCurrencyScalarFieldEnum
    having?: FiatCurrencyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiatCurrencyCountAggregateInputType | true
    _avg?: FiatCurrencyAvgAggregateInputType
    _sum?: FiatCurrencySumAggregateInputType
    _min?: FiatCurrencyMinAggregateInputType
    _max?: FiatCurrencyMaxAggregateInputType
  }

  export type FiatCurrencyGroupByOutputType = {
    id: number
    name: string
    symbol: string
    _count: FiatCurrencyCountAggregateOutputType | null
    _avg: FiatCurrencyAvgAggregateOutputType | null
    _sum: FiatCurrencySumAggregateOutputType | null
    _min: FiatCurrencyMinAggregateOutputType | null
    _max: FiatCurrencyMaxAggregateOutputType | null
  }

  type GetFiatCurrencyGroupByPayload<T extends FiatCurrencyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiatCurrencyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiatCurrencyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiatCurrencyGroupByOutputType[P]>
            : GetScalarType<T[P], FiatCurrencyGroupByOutputType[P]>
        }
      >
    >


  export type FiatCurrencySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    symbol?: boolean
    fiatWallets?: boolean | FiatCurrency$fiatWalletsArgs<ExtArgs>
    transactions?: boolean | FiatCurrency$transactionsArgs<ExtArgs>
    _count?: boolean | FiatCurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiatCurrency"]>

  export type FiatCurrencySelectScalar = {
    id?: boolean
    name?: boolean
    symbol?: boolean
  }


  export type FiatCurrencyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fiatWallets?: boolean | FiatCurrency$fiatWalletsArgs<ExtArgs>
    transactions?: boolean | FiatCurrency$transactionsArgs<ExtArgs>
    _count?: boolean | FiatCurrencyCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FiatCurrencyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FiatCurrency"
    objects: {
      fiatWallets: Prisma.$FiatWalletPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      symbol: string
    }, ExtArgs["result"]["fiatCurrency"]>
    composites: {}
  }


  type FiatCurrencyGetPayload<S extends boolean | null | undefined | FiatCurrencyDefaultArgs> = $Result.GetResult<Prisma.$FiatCurrencyPayload, S>

  type FiatCurrencyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FiatCurrencyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FiatCurrencyCountAggregateInputType | true
    }

  export interface FiatCurrencyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FiatCurrency'], meta: { name: 'FiatCurrency' } }
    /**
     * Find zero or one FiatCurrency that matches the filter.
     * @param {FiatCurrencyFindUniqueArgs} args - Arguments to find a FiatCurrency
     * @example
     * // Get one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FiatCurrencyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FiatCurrencyFindUniqueArgs<ExtArgs>>
    ): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FiatCurrency that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FiatCurrencyFindUniqueOrThrowArgs} args - Arguments to find a FiatCurrency
     * @example
     * // Get one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FiatCurrencyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatCurrencyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FiatCurrency that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyFindFirstArgs} args - Arguments to find a FiatCurrency
     * @example
     * // Get one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FiatCurrencyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatCurrencyFindFirstArgs<ExtArgs>>
    ): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FiatCurrency that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyFindFirstOrThrowArgs} args - Arguments to find a FiatCurrency
     * @example
     * // Get one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FiatCurrencyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatCurrencyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FiatCurrencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FiatCurrencies
     * const fiatCurrencies = await prisma.fiatCurrency.findMany()
     * 
     * // Get first 10 FiatCurrencies
     * const fiatCurrencies = await prisma.fiatCurrency.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fiatCurrencyWithIdOnly = await prisma.fiatCurrency.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FiatCurrencyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatCurrencyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FiatCurrency.
     * @param {FiatCurrencyCreateArgs} args - Arguments to create a FiatCurrency.
     * @example
     * // Create one FiatCurrency
     * const FiatCurrency = await prisma.fiatCurrency.create({
     *   data: {
     *     // ... data to create a FiatCurrency
     *   }
     * })
     * 
    **/
    create<T extends FiatCurrencyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FiatCurrencyCreateArgs<ExtArgs>>
    ): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FiatCurrencies.
     * @param {FiatCurrencyCreateManyArgs} args - Arguments to create many FiatCurrencies.
     * @example
     * // Create many FiatCurrencies
     * const fiatCurrency = await prisma.fiatCurrency.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends FiatCurrencyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatCurrencyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FiatCurrency.
     * @param {FiatCurrencyDeleteArgs} args - Arguments to delete one FiatCurrency.
     * @example
     * // Delete one FiatCurrency
     * const FiatCurrency = await prisma.fiatCurrency.delete({
     *   where: {
     *     // ... filter to delete one FiatCurrency
     *   }
     * })
     * 
    **/
    delete<T extends FiatCurrencyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FiatCurrencyDeleteArgs<ExtArgs>>
    ): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FiatCurrency.
     * @param {FiatCurrencyUpdateArgs} args - Arguments to update one FiatCurrency.
     * @example
     * // Update one FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FiatCurrencyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FiatCurrencyUpdateArgs<ExtArgs>>
    ): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FiatCurrencies.
     * @param {FiatCurrencyDeleteManyArgs} args - Arguments to filter FiatCurrencies to delete.
     * @example
     * // Delete a few FiatCurrencies
     * const { count } = await prisma.fiatCurrency.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FiatCurrencyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatCurrencyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiatCurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FiatCurrencies
     * const fiatCurrency = await prisma.fiatCurrency.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FiatCurrencyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FiatCurrencyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FiatCurrency.
     * @param {FiatCurrencyUpsertArgs} args - Arguments to update or create a FiatCurrency.
     * @example
     * // Update or create a FiatCurrency
     * const fiatCurrency = await prisma.fiatCurrency.upsert({
     *   create: {
     *     // ... data to create a FiatCurrency
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FiatCurrency we want to update
     *   }
     * })
    **/
    upsert<T extends FiatCurrencyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FiatCurrencyUpsertArgs<ExtArgs>>
    ): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FiatCurrencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyCountArgs} args - Arguments to filter FiatCurrencies to count.
     * @example
     * // Count the number of FiatCurrencies
     * const count = await prisma.fiatCurrency.count({
     *   where: {
     *     // ... the filter for the FiatCurrencies we want to count
     *   }
     * })
    **/
    count<T extends FiatCurrencyCountArgs>(
      args?: Subset<T, FiatCurrencyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiatCurrencyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FiatCurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FiatCurrencyAggregateArgs>(args: Subset<T, FiatCurrencyAggregateArgs>): Prisma.PrismaPromise<GetFiatCurrencyAggregateType<T>>

    /**
     * Group by FiatCurrency.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatCurrencyGroupByArgs} args - Group by arguments.
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
      T extends FiatCurrencyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiatCurrencyGroupByArgs['orderBy'] }
        : { orderBy?: FiatCurrencyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FiatCurrencyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiatCurrencyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FiatCurrency model
   */
  readonly fields: FiatCurrencyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FiatCurrency.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiatCurrencyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    fiatWallets<T extends FiatCurrency$fiatWalletsArgs<ExtArgs> = {}>(args?: Subset<T, FiatCurrency$fiatWalletsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'findMany'> | Null>;

    transactions<T extends FiatCurrency$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, FiatCurrency$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FiatCurrency model
   */ 
  interface FiatCurrencyFieldRefs {
    readonly id: FieldRef<"FiatCurrency", 'Int'>
    readonly name: FieldRef<"FiatCurrency", 'String'>
    readonly symbol: FieldRef<"FiatCurrency", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FiatCurrency findUnique
   */
  export type FiatCurrencyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrency to fetch.
     */
    where: FiatCurrencyWhereUniqueInput
  }

  /**
   * FiatCurrency findUniqueOrThrow
   */
  export type FiatCurrencyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrency to fetch.
     */
    where: FiatCurrencyWhereUniqueInput
  }

  /**
   * FiatCurrency findFirst
   */
  export type FiatCurrencyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrency to fetch.
     */
    where?: FiatCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatCurrencies to fetch.
     */
    orderBy?: FiatCurrencyOrderByWithRelationInput | FiatCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiatCurrencies.
     */
    cursor?: FiatCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatCurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiatCurrencies.
     */
    distinct?: FiatCurrencyScalarFieldEnum | FiatCurrencyScalarFieldEnum[]
  }

  /**
   * FiatCurrency findFirstOrThrow
   */
  export type FiatCurrencyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrency to fetch.
     */
    where?: FiatCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatCurrencies to fetch.
     */
    orderBy?: FiatCurrencyOrderByWithRelationInput | FiatCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiatCurrencies.
     */
    cursor?: FiatCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatCurrencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiatCurrencies.
     */
    distinct?: FiatCurrencyScalarFieldEnum | FiatCurrencyScalarFieldEnum[]
  }

  /**
   * FiatCurrency findMany
   */
  export type FiatCurrencyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter, which FiatCurrencies to fetch.
     */
    where?: FiatCurrencyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatCurrencies to fetch.
     */
    orderBy?: FiatCurrencyOrderByWithRelationInput | FiatCurrencyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FiatCurrencies.
     */
    cursor?: FiatCurrencyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatCurrencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatCurrencies.
     */
    skip?: number
    distinct?: FiatCurrencyScalarFieldEnum | FiatCurrencyScalarFieldEnum[]
  }

  /**
   * FiatCurrency create
   */
  export type FiatCurrencyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * The data needed to create a FiatCurrency.
     */
    data: XOR<FiatCurrencyCreateInput, FiatCurrencyUncheckedCreateInput>
  }

  /**
   * FiatCurrency createMany
   */
  export type FiatCurrencyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FiatCurrencies.
     */
    data: FiatCurrencyCreateManyInput | FiatCurrencyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiatCurrency update
   */
  export type FiatCurrencyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * The data needed to update a FiatCurrency.
     */
    data: XOR<FiatCurrencyUpdateInput, FiatCurrencyUncheckedUpdateInput>
    /**
     * Choose, which FiatCurrency to update.
     */
    where: FiatCurrencyWhereUniqueInput
  }

  /**
   * FiatCurrency updateMany
   */
  export type FiatCurrencyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FiatCurrencies.
     */
    data: XOR<FiatCurrencyUpdateManyMutationInput, FiatCurrencyUncheckedUpdateManyInput>
    /**
     * Filter which FiatCurrencies to update
     */
    where?: FiatCurrencyWhereInput
  }

  /**
   * FiatCurrency upsert
   */
  export type FiatCurrencyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * The filter to search for the FiatCurrency to update in case it exists.
     */
    where: FiatCurrencyWhereUniqueInput
    /**
     * In case the FiatCurrency found by the `where` argument doesn't exist, create a new FiatCurrency with this data.
     */
    create: XOR<FiatCurrencyCreateInput, FiatCurrencyUncheckedCreateInput>
    /**
     * In case the FiatCurrency was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiatCurrencyUpdateInput, FiatCurrencyUncheckedUpdateInput>
  }

  /**
   * FiatCurrency delete
   */
  export type FiatCurrencyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
    /**
     * Filter which FiatCurrency to delete.
     */
    where: FiatCurrencyWhereUniqueInput
  }

  /**
   * FiatCurrency deleteMany
   */
  export type FiatCurrencyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiatCurrencies to delete
     */
    where?: FiatCurrencyWhereInput
  }

  /**
   * FiatCurrency.fiatWallets
   */
  export type FiatCurrency$fiatWalletsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    where?: FiatWalletWhereInput
    orderBy?: FiatWalletOrderByWithRelationInput | FiatWalletOrderByWithRelationInput[]
    cursor?: FiatWalletWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FiatWalletScalarFieldEnum | FiatWalletScalarFieldEnum[]
  }

  /**
   * FiatCurrency.transactions
   */
  export type FiatCurrency$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * FiatCurrency without action
   */
  export type FiatCurrencyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatCurrency
     */
    select?: FiatCurrencySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatCurrencyInclude<ExtArgs> | null
  }


  /**
   * Model CryptoWallet
   */

  export type AggregateCryptoWallet = {
    _count: CryptoWalletCountAggregateOutputType | null
    _avg: CryptoWalletAvgAggregateOutputType | null
    _sum: CryptoWalletSumAggregateOutputType | null
    _min: CryptoWalletMinAggregateOutputType | null
    _max: CryptoWalletMaxAggregateOutputType | null
  }

  export type CryptoWalletAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    cryptoId: number | null
    balance: number | null
  }

  export type CryptoWalletSumAggregateOutputType = {
    id: number | null
    userId: number | null
    cryptoId: number | null
    balance: number | null
  }

  export type CryptoWalletMinAggregateOutputType = {
    id: number | null
    userId: number | null
    cryptoId: number | null
    balance: number | null
  }

  export type CryptoWalletMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    cryptoId: number | null
    balance: number | null
  }

  export type CryptoWalletCountAggregateOutputType = {
    id: number
    userId: number
    cryptoId: number
    balance: number
    _all: number
  }


  export type CryptoWalletAvgAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    balance?: true
  }

  export type CryptoWalletSumAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    balance?: true
  }

  export type CryptoWalletMinAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    balance?: true
  }

  export type CryptoWalletMaxAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    balance?: true
  }

  export type CryptoWalletCountAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    balance?: true
    _all?: true
  }

  export type CryptoWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CryptoWallet to aggregate.
     */
    where?: CryptoWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoWallets to fetch.
     */
    orderBy?: CryptoWalletOrderByWithRelationInput | CryptoWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CryptoWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CryptoWallets
    **/
    _count?: true | CryptoWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CryptoWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CryptoWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CryptoWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CryptoWalletMaxAggregateInputType
  }

  export type GetCryptoWalletAggregateType<T extends CryptoWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateCryptoWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCryptoWallet[P]>
      : GetScalarType<T[P], AggregateCryptoWallet[P]>
  }




  export type CryptoWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CryptoWalletWhereInput
    orderBy?: CryptoWalletOrderByWithAggregationInput | CryptoWalletOrderByWithAggregationInput[]
    by: CryptoWalletScalarFieldEnum[] | CryptoWalletScalarFieldEnum
    having?: CryptoWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CryptoWalletCountAggregateInputType | true
    _avg?: CryptoWalletAvgAggregateInputType
    _sum?: CryptoWalletSumAggregateInputType
    _min?: CryptoWalletMinAggregateInputType
    _max?: CryptoWalletMaxAggregateInputType
  }

  export type CryptoWalletGroupByOutputType = {
    id: number
    userId: number
    cryptoId: number
    balance: number
    _count: CryptoWalletCountAggregateOutputType | null
    _avg: CryptoWalletAvgAggregateOutputType | null
    _sum: CryptoWalletSumAggregateOutputType | null
    _min: CryptoWalletMinAggregateOutputType | null
    _max: CryptoWalletMaxAggregateOutputType | null
  }

  type GetCryptoWalletGroupByPayload<T extends CryptoWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CryptoWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CryptoWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CryptoWalletGroupByOutputType[P]>
            : GetScalarType<T[P], CryptoWalletGroupByOutputType[P]>
        }
      >
    >


  export type CryptoWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cryptoId?: boolean
    balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    transfersFrom?: boolean | CryptoWallet$transfersFromArgs<ExtArgs>
    transfersTo?: boolean | CryptoWallet$transfersToArgs<ExtArgs>
    _count?: boolean | CryptoWalletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cryptoWallet"]>

  export type CryptoWalletSelectScalar = {
    id?: boolean
    userId?: boolean
    cryptoId?: boolean
    balance?: boolean
  }


  export type CryptoWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    transfersFrom?: boolean | CryptoWallet$transfersFromArgs<ExtArgs>
    transfersTo?: boolean | CryptoWallet$transfersToArgs<ExtArgs>
    _count?: boolean | CryptoWalletCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CryptoWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CryptoWallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cryptocurrency: Prisma.$CryptocurrencyPayload<ExtArgs>
      transfersFrom: Prisma.$TransferPayload<ExtArgs>[]
      transfersTo: Prisma.$TransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      cryptoId: number
      balance: number
    }, ExtArgs["result"]["cryptoWallet"]>
    composites: {}
  }


  type CryptoWalletGetPayload<S extends boolean | null | undefined | CryptoWalletDefaultArgs> = $Result.GetResult<Prisma.$CryptoWalletPayload, S>

  type CryptoWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CryptoWalletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CryptoWalletCountAggregateInputType | true
    }

  export interface CryptoWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CryptoWallet'], meta: { name: 'CryptoWallet' } }
    /**
     * Find zero or one CryptoWallet that matches the filter.
     * @param {CryptoWalletFindUniqueArgs} args - Arguments to find a CryptoWallet
     * @example
     * // Get one CryptoWallet
     * const cryptoWallet = await prisma.cryptoWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CryptoWalletFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CryptoWalletFindUniqueArgs<ExtArgs>>
    ): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CryptoWallet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CryptoWalletFindUniqueOrThrowArgs} args - Arguments to find a CryptoWallet
     * @example
     * // Get one CryptoWallet
     * const cryptoWallet = await prisma.cryptoWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CryptoWalletFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptoWalletFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CryptoWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletFindFirstArgs} args - Arguments to find a CryptoWallet
     * @example
     * // Get one CryptoWallet
     * const cryptoWallet = await prisma.cryptoWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CryptoWalletFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptoWalletFindFirstArgs<ExtArgs>>
    ): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CryptoWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletFindFirstOrThrowArgs} args - Arguments to find a CryptoWallet
     * @example
     * // Get one CryptoWallet
     * const cryptoWallet = await prisma.cryptoWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CryptoWalletFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptoWalletFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CryptoWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallet.findMany()
     * 
     * // Get first 10 CryptoWallets
     * const cryptoWallets = await prisma.cryptoWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cryptoWalletWithIdOnly = await prisma.cryptoWallet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CryptoWalletFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptoWalletFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CryptoWallet.
     * @param {CryptoWalletCreateArgs} args - Arguments to create a CryptoWallet.
     * @example
     * // Create one CryptoWallet
     * const CryptoWallet = await prisma.cryptoWallet.create({
     *   data: {
     *     // ... data to create a CryptoWallet
     *   }
     * })
     * 
    **/
    create<T extends CryptoWalletCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CryptoWalletCreateArgs<ExtArgs>>
    ): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CryptoWallets.
     * @param {CryptoWalletCreateManyArgs} args - Arguments to create many CryptoWallets.
     * @example
     * // Create many CryptoWallets
     * const cryptoWallet = await prisma.cryptoWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CryptoWalletCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptoWalletCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CryptoWallet.
     * @param {CryptoWalletDeleteArgs} args - Arguments to delete one CryptoWallet.
     * @example
     * // Delete one CryptoWallet
     * const CryptoWallet = await prisma.cryptoWallet.delete({
     *   where: {
     *     // ... filter to delete one CryptoWallet
     *   }
     * })
     * 
    **/
    delete<T extends CryptoWalletDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CryptoWalletDeleteArgs<ExtArgs>>
    ): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CryptoWallet.
     * @param {CryptoWalletUpdateArgs} args - Arguments to update one CryptoWallet.
     * @example
     * // Update one CryptoWallet
     * const cryptoWallet = await prisma.cryptoWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CryptoWalletUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CryptoWalletUpdateArgs<ExtArgs>>
    ): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CryptoWallets.
     * @param {CryptoWalletDeleteManyArgs} args - Arguments to filter CryptoWallets to delete.
     * @example
     * // Delete a few CryptoWallets
     * const { count } = await prisma.cryptoWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CryptoWalletDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CryptoWalletDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CryptoWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CryptoWallets
     * const cryptoWallet = await prisma.cryptoWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CryptoWalletUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CryptoWalletUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CryptoWallet.
     * @param {CryptoWalletUpsertArgs} args - Arguments to update or create a CryptoWallet.
     * @example
     * // Update or create a CryptoWallet
     * const cryptoWallet = await prisma.cryptoWallet.upsert({
     *   create: {
     *     // ... data to create a CryptoWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CryptoWallet we want to update
     *   }
     * })
    **/
    upsert<T extends CryptoWalletUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CryptoWalletUpsertArgs<ExtArgs>>
    ): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CryptoWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletCountArgs} args - Arguments to filter CryptoWallets to count.
     * @example
     * // Count the number of CryptoWallets
     * const count = await prisma.cryptoWallet.count({
     *   where: {
     *     // ... the filter for the CryptoWallets we want to count
     *   }
     * })
    **/
    count<T extends CryptoWalletCountArgs>(
      args?: Subset<T, CryptoWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CryptoWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CryptoWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CryptoWalletAggregateArgs>(args: Subset<T, CryptoWalletAggregateArgs>): Prisma.PrismaPromise<GetCryptoWalletAggregateType<T>>

    /**
     * Group by CryptoWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CryptoWalletGroupByArgs} args - Group by arguments.
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
      T extends CryptoWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CryptoWalletGroupByArgs['orderBy'] }
        : { orderBy?: CryptoWalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CryptoWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCryptoWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CryptoWallet model
   */
  readonly fields: CryptoWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CryptoWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CryptoWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cryptocurrency<T extends CryptocurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CryptocurrencyDefaultArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    transfersFrom<T extends CryptoWallet$transfersFromArgs<ExtArgs> = {}>(args?: Subset<T, CryptoWallet$transfersFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'findMany'> | Null>;

    transfersTo<T extends CryptoWallet$transfersToArgs<ExtArgs> = {}>(args?: Subset<T, CryptoWallet$transfersToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CryptoWallet model
   */ 
  interface CryptoWalletFieldRefs {
    readonly id: FieldRef<"CryptoWallet", 'Int'>
    readonly userId: FieldRef<"CryptoWallet", 'Int'>
    readonly cryptoId: FieldRef<"CryptoWallet", 'Int'>
    readonly balance: FieldRef<"CryptoWallet", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CryptoWallet findUnique
   */
  export type CryptoWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallet to fetch.
     */
    where: CryptoWalletWhereUniqueInput
  }

  /**
   * CryptoWallet findUniqueOrThrow
   */
  export type CryptoWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallet to fetch.
     */
    where: CryptoWalletWhereUniqueInput
  }

  /**
   * CryptoWallet findFirst
   */
  export type CryptoWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallet to fetch.
     */
    where?: CryptoWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoWallets to fetch.
     */
    orderBy?: CryptoWalletOrderByWithRelationInput | CryptoWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CryptoWallets.
     */
    cursor?: CryptoWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CryptoWallets.
     */
    distinct?: CryptoWalletScalarFieldEnum | CryptoWalletScalarFieldEnum[]
  }

  /**
   * CryptoWallet findFirstOrThrow
   */
  export type CryptoWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallet to fetch.
     */
    where?: CryptoWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoWallets to fetch.
     */
    orderBy?: CryptoWalletOrderByWithRelationInput | CryptoWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CryptoWallets.
     */
    cursor?: CryptoWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CryptoWallets.
     */
    distinct?: CryptoWalletScalarFieldEnum | CryptoWalletScalarFieldEnum[]
  }

  /**
   * CryptoWallet findMany
   */
  export type CryptoWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    /**
     * Filter, which CryptoWallets to fetch.
     */
    where?: CryptoWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CryptoWallets to fetch.
     */
    orderBy?: CryptoWalletOrderByWithRelationInput | CryptoWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CryptoWallets.
     */
    cursor?: CryptoWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CryptoWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CryptoWallets.
     */
    skip?: number
    distinct?: CryptoWalletScalarFieldEnum | CryptoWalletScalarFieldEnum[]
  }

  /**
   * CryptoWallet create
   */
  export type CryptoWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a CryptoWallet.
     */
    data: XOR<CryptoWalletCreateInput, CryptoWalletUncheckedCreateInput>
  }

  /**
   * CryptoWallet createMany
   */
  export type CryptoWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CryptoWallets.
     */
    data: CryptoWalletCreateManyInput | CryptoWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CryptoWallet update
   */
  export type CryptoWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a CryptoWallet.
     */
    data: XOR<CryptoWalletUpdateInput, CryptoWalletUncheckedUpdateInput>
    /**
     * Choose, which CryptoWallet to update.
     */
    where: CryptoWalletWhereUniqueInput
  }

  /**
   * CryptoWallet updateMany
   */
  export type CryptoWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CryptoWallets.
     */
    data: XOR<CryptoWalletUpdateManyMutationInput, CryptoWalletUncheckedUpdateManyInput>
    /**
     * Filter which CryptoWallets to update
     */
    where?: CryptoWalletWhereInput
  }

  /**
   * CryptoWallet upsert
   */
  export type CryptoWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the CryptoWallet to update in case it exists.
     */
    where: CryptoWalletWhereUniqueInput
    /**
     * In case the CryptoWallet found by the `where` argument doesn't exist, create a new CryptoWallet with this data.
     */
    create: XOR<CryptoWalletCreateInput, CryptoWalletUncheckedCreateInput>
    /**
     * In case the CryptoWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CryptoWalletUpdateInput, CryptoWalletUncheckedUpdateInput>
  }

  /**
   * CryptoWallet delete
   */
  export type CryptoWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
    /**
     * Filter which CryptoWallet to delete.
     */
    where: CryptoWalletWhereUniqueInput
  }

  /**
   * CryptoWallet deleteMany
   */
  export type CryptoWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CryptoWallets to delete
     */
    where?: CryptoWalletWhereInput
  }

  /**
   * CryptoWallet.transfersFrom
   */
  export type CryptoWallet$transfersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    cursor?: TransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * CryptoWallet.transfersTo
   */
  export type CryptoWallet$transfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    cursor?: TransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * CryptoWallet without action
   */
  export type CryptoWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CryptoWallet
     */
    select?: CryptoWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CryptoWalletInclude<ExtArgs> | null
  }


  /**
   * Model FiatWallet
   */

  export type AggregateFiatWallet = {
    _count: FiatWalletCountAggregateOutputType | null
    _avg: FiatWalletAvgAggregateOutputType | null
    _sum: FiatWalletSumAggregateOutputType | null
    _min: FiatWalletMinAggregateOutputType | null
    _max: FiatWalletMaxAggregateOutputType | null
  }

  export type FiatWalletAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    fiatId: number | null
    balance: number | null
  }

  export type FiatWalletSumAggregateOutputType = {
    id: number | null
    userId: number | null
    fiatId: number | null
    balance: number | null
  }

  export type FiatWalletMinAggregateOutputType = {
    id: number | null
    userId: number | null
    fiatId: number | null
    balance: number | null
  }

  export type FiatWalletMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    fiatId: number | null
    balance: number | null
  }

  export type FiatWalletCountAggregateOutputType = {
    id: number
    userId: number
    fiatId: number
    balance: number
    _all: number
  }


  export type FiatWalletAvgAggregateInputType = {
    id?: true
    userId?: true
    fiatId?: true
    balance?: true
  }

  export type FiatWalletSumAggregateInputType = {
    id?: true
    userId?: true
    fiatId?: true
    balance?: true
  }

  export type FiatWalletMinAggregateInputType = {
    id?: true
    userId?: true
    fiatId?: true
    balance?: true
  }

  export type FiatWalletMaxAggregateInputType = {
    id?: true
    userId?: true
    fiatId?: true
    balance?: true
  }

  export type FiatWalletCountAggregateInputType = {
    id?: true
    userId?: true
    fiatId?: true
    balance?: true
    _all?: true
  }

  export type FiatWalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiatWallet to aggregate.
     */
    where?: FiatWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatWallets to fetch.
     */
    orderBy?: FiatWalletOrderByWithRelationInput | FiatWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FiatWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FiatWallets
    **/
    _count?: true | FiatWalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FiatWalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FiatWalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FiatWalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FiatWalletMaxAggregateInputType
  }

  export type GetFiatWalletAggregateType<T extends FiatWalletAggregateArgs> = {
        [P in keyof T & keyof AggregateFiatWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiatWallet[P]>
      : GetScalarType<T[P], AggregateFiatWallet[P]>
  }




  export type FiatWalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FiatWalletWhereInput
    orderBy?: FiatWalletOrderByWithAggregationInput | FiatWalletOrderByWithAggregationInput[]
    by: FiatWalletScalarFieldEnum[] | FiatWalletScalarFieldEnum
    having?: FiatWalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FiatWalletCountAggregateInputType | true
    _avg?: FiatWalletAvgAggregateInputType
    _sum?: FiatWalletSumAggregateInputType
    _min?: FiatWalletMinAggregateInputType
    _max?: FiatWalletMaxAggregateInputType
  }

  export type FiatWalletGroupByOutputType = {
    id: number
    userId: number
    fiatId: number
    balance: number
    _count: FiatWalletCountAggregateOutputType | null
    _avg: FiatWalletAvgAggregateOutputType | null
    _sum: FiatWalletSumAggregateOutputType | null
    _min: FiatWalletMinAggregateOutputType | null
    _max: FiatWalletMaxAggregateOutputType | null
  }

  type GetFiatWalletGroupByPayload<T extends FiatWalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FiatWalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FiatWalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FiatWalletGroupByOutputType[P]>
            : GetScalarType<T[P], FiatWalletGroupByOutputType[P]>
        }
      >
    >


  export type FiatWalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fiatId?: boolean
    balance?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    fiatCurrency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fiatWallet"]>

  export type FiatWalletSelectScalar = {
    id?: boolean
    userId?: boolean
    fiatId?: boolean
    balance?: boolean
  }


  export type FiatWalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    fiatCurrency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
  }


  export type $FiatWalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FiatWallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      fiatCurrency: Prisma.$FiatCurrencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      fiatId: number
      balance: number
    }, ExtArgs["result"]["fiatWallet"]>
    composites: {}
  }


  type FiatWalletGetPayload<S extends boolean | null | undefined | FiatWalletDefaultArgs> = $Result.GetResult<Prisma.$FiatWalletPayload, S>

  type FiatWalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FiatWalletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FiatWalletCountAggregateInputType | true
    }

  export interface FiatWalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FiatWallet'], meta: { name: 'FiatWallet' } }
    /**
     * Find zero or one FiatWallet that matches the filter.
     * @param {FiatWalletFindUniqueArgs} args - Arguments to find a FiatWallet
     * @example
     * // Get one FiatWallet
     * const fiatWallet = await prisma.fiatWallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FiatWalletFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FiatWalletFindUniqueArgs<ExtArgs>>
    ): Prisma__FiatWalletClient<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FiatWallet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FiatWalletFindUniqueOrThrowArgs} args - Arguments to find a FiatWallet
     * @example
     * // Get one FiatWallet
     * const fiatWallet = await prisma.fiatWallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FiatWalletFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatWalletFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FiatWalletClient<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FiatWallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatWalletFindFirstArgs} args - Arguments to find a FiatWallet
     * @example
     * // Get one FiatWallet
     * const fiatWallet = await prisma.fiatWallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FiatWalletFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatWalletFindFirstArgs<ExtArgs>>
    ): Prisma__FiatWalletClient<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FiatWallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatWalletFindFirstOrThrowArgs} args - Arguments to find a FiatWallet
     * @example
     * // Get one FiatWallet
     * const fiatWallet = await prisma.fiatWallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FiatWalletFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatWalletFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FiatWalletClient<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FiatWallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatWalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FiatWallets
     * const fiatWallets = await prisma.fiatWallet.findMany()
     * 
     * // Get first 10 FiatWallets
     * const fiatWallets = await prisma.fiatWallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fiatWalletWithIdOnly = await prisma.fiatWallet.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FiatWalletFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatWalletFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FiatWallet.
     * @param {FiatWalletCreateArgs} args - Arguments to create a FiatWallet.
     * @example
     * // Create one FiatWallet
     * const FiatWallet = await prisma.fiatWallet.create({
     *   data: {
     *     // ... data to create a FiatWallet
     *   }
     * })
     * 
    **/
    create<T extends FiatWalletCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FiatWalletCreateArgs<ExtArgs>>
    ): Prisma__FiatWalletClient<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FiatWallets.
     * @param {FiatWalletCreateManyArgs} args - Arguments to create many FiatWallets.
     * @example
     * // Create many FiatWallets
     * const fiatWallet = await prisma.fiatWallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends FiatWalletCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatWalletCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FiatWallet.
     * @param {FiatWalletDeleteArgs} args - Arguments to delete one FiatWallet.
     * @example
     * // Delete one FiatWallet
     * const FiatWallet = await prisma.fiatWallet.delete({
     *   where: {
     *     // ... filter to delete one FiatWallet
     *   }
     * })
     * 
    **/
    delete<T extends FiatWalletDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FiatWalletDeleteArgs<ExtArgs>>
    ): Prisma__FiatWalletClient<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FiatWallet.
     * @param {FiatWalletUpdateArgs} args - Arguments to update one FiatWallet.
     * @example
     * // Update one FiatWallet
     * const fiatWallet = await prisma.fiatWallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FiatWalletUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FiatWalletUpdateArgs<ExtArgs>>
    ): Prisma__FiatWalletClient<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FiatWallets.
     * @param {FiatWalletDeleteManyArgs} args - Arguments to filter FiatWallets to delete.
     * @example
     * // Delete a few FiatWallets
     * const { count } = await prisma.fiatWallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FiatWalletDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FiatWalletDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FiatWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatWalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FiatWallets
     * const fiatWallet = await prisma.fiatWallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FiatWalletUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FiatWalletUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FiatWallet.
     * @param {FiatWalletUpsertArgs} args - Arguments to update or create a FiatWallet.
     * @example
     * // Update or create a FiatWallet
     * const fiatWallet = await prisma.fiatWallet.upsert({
     *   create: {
     *     // ... data to create a FiatWallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FiatWallet we want to update
     *   }
     * })
    **/
    upsert<T extends FiatWalletUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FiatWalletUpsertArgs<ExtArgs>>
    ): Prisma__FiatWalletClient<$Result.GetResult<Prisma.$FiatWalletPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FiatWallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatWalletCountArgs} args - Arguments to filter FiatWallets to count.
     * @example
     * // Count the number of FiatWallets
     * const count = await prisma.fiatWallet.count({
     *   where: {
     *     // ... the filter for the FiatWallets we want to count
     *   }
     * })
    **/
    count<T extends FiatWalletCountArgs>(
      args?: Subset<T, FiatWalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FiatWalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FiatWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatWalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FiatWalletAggregateArgs>(args: Subset<T, FiatWalletAggregateArgs>): Prisma.PrismaPromise<GetFiatWalletAggregateType<T>>

    /**
     * Group by FiatWallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FiatWalletGroupByArgs} args - Group by arguments.
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
      T extends FiatWalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FiatWalletGroupByArgs['orderBy'] }
        : { orderBy?: FiatWalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FiatWalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFiatWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FiatWallet model
   */
  readonly fields: FiatWalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FiatWallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FiatWalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    fiatCurrency<T extends FiatCurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FiatCurrencyDefaultArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FiatWallet model
   */ 
  interface FiatWalletFieldRefs {
    readonly id: FieldRef<"FiatWallet", 'Int'>
    readonly userId: FieldRef<"FiatWallet", 'Int'>
    readonly fiatId: FieldRef<"FiatWallet", 'Int'>
    readonly balance: FieldRef<"FiatWallet", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * FiatWallet findUnique
   */
  export type FiatWalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    /**
     * Filter, which FiatWallet to fetch.
     */
    where: FiatWalletWhereUniqueInput
  }

  /**
   * FiatWallet findUniqueOrThrow
   */
  export type FiatWalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    /**
     * Filter, which FiatWallet to fetch.
     */
    where: FiatWalletWhereUniqueInput
  }

  /**
   * FiatWallet findFirst
   */
  export type FiatWalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    /**
     * Filter, which FiatWallet to fetch.
     */
    where?: FiatWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatWallets to fetch.
     */
    orderBy?: FiatWalletOrderByWithRelationInput | FiatWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiatWallets.
     */
    cursor?: FiatWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiatWallets.
     */
    distinct?: FiatWalletScalarFieldEnum | FiatWalletScalarFieldEnum[]
  }

  /**
   * FiatWallet findFirstOrThrow
   */
  export type FiatWalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    /**
     * Filter, which FiatWallet to fetch.
     */
    where?: FiatWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatWallets to fetch.
     */
    orderBy?: FiatWalletOrderByWithRelationInput | FiatWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FiatWallets.
     */
    cursor?: FiatWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatWallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FiatWallets.
     */
    distinct?: FiatWalletScalarFieldEnum | FiatWalletScalarFieldEnum[]
  }

  /**
   * FiatWallet findMany
   */
  export type FiatWalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    /**
     * Filter, which FiatWallets to fetch.
     */
    where?: FiatWalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FiatWallets to fetch.
     */
    orderBy?: FiatWalletOrderByWithRelationInput | FiatWalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FiatWallets.
     */
    cursor?: FiatWalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FiatWallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FiatWallets.
     */
    skip?: number
    distinct?: FiatWalletScalarFieldEnum | FiatWalletScalarFieldEnum[]
  }

  /**
   * FiatWallet create
   */
  export type FiatWalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    /**
     * The data needed to create a FiatWallet.
     */
    data: XOR<FiatWalletCreateInput, FiatWalletUncheckedCreateInput>
  }

  /**
   * FiatWallet createMany
   */
  export type FiatWalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FiatWallets.
     */
    data: FiatWalletCreateManyInput | FiatWalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FiatWallet update
   */
  export type FiatWalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    /**
     * The data needed to update a FiatWallet.
     */
    data: XOR<FiatWalletUpdateInput, FiatWalletUncheckedUpdateInput>
    /**
     * Choose, which FiatWallet to update.
     */
    where: FiatWalletWhereUniqueInput
  }

  /**
   * FiatWallet updateMany
   */
  export type FiatWalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FiatWallets.
     */
    data: XOR<FiatWalletUpdateManyMutationInput, FiatWalletUncheckedUpdateManyInput>
    /**
     * Filter which FiatWallets to update
     */
    where?: FiatWalletWhereInput
  }

  /**
   * FiatWallet upsert
   */
  export type FiatWalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    /**
     * The filter to search for the FiatWallet to update in case it exists.
     */
    where: FiatWalletWhereUniqueInput
    /**
     * In case the FiatWallet found by the `where` argument doesn't exist, create a new FiatWallet with this data.
     */
    create: XOR<FiatWalletCreateInput, FiatWalletUncheckedCreateInput>
    /**
     * In case the FiatWallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FiatWalletUpdateInput, FiatWalletUncheckedUpdateInput>
  }

  /**
   * FiatWallet delete
   */
  export type FiatWalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
    /**
     * Filter which FiatWallet to delete.
     */
    where: FiatWalletWhereUniqueInput
  }

  /**
   * FiatWallet deleteMany
   */
  export type FiatWalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FiatWallets to delete
     */
    where?: FiatWalletWhereInput
  }

  /**
   * FiatWallet without action
   */
  export type FiatWalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FiatWallet
     */
    select?: FiatWalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FiatWalletInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    cryptoId: number | null
    fiatId: number | null
    amount: number | null
    price: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    cryptoId: number | null
    fiatId: number | null
    amount: number | null
    price: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    cryptoId: number | null
    fiatId: number | null
    transactionType: $Enums.TransactionType | null
    amount: number | null
    price: number | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    cryptoId: number | null
    fiatId: number | null
    transactionType: $Enums.TransactionType | null
    amount: number | null
    price: number | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    cryptoId: number
    fiatId: number
    transactionType: number
    amount: number
    price: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    fiatId?: true
    amount?: true
    price?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    fiatId?: true
    amount?: true
    price?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    fiatId?: true
    transactionType?: true
    amount?: true
    price?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    fiatId?: true
    transactionType?: true
    amount?: true
    price?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    cryptoId?: true
    fiatId?: true
    transactionType?: true
    amount?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    userId: number
    cryptoId: number
    fiatId: number
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cryptoId?: boolean
    fiatId?: boolean
    transactionType?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    fiatCurrency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    cryptoId?: boolean
    fiatId?: boolean
    transactionType?: boolean
    amount?: boolean
    price?: boolean
    createdAt?: boolean
  }


  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cryptocurrency?: boolean | CryptocurrencyDefaultArgs<ExtArgs>
    fiatCurrency?: boolean | FiatCurrencyDefaultArgs<ExtArgs>
  }


  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cryptocurrency: Prisma.$CryptocurrencyPayload<ExtArgs>
      fiatCurrency: Prisma.$FiatCurrencyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      cryptoId: number
      fiatId: number
      transactionType: $Enums.TransactionType
      amount: number
      price: number
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }


  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransactionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransactionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransactionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
    **/
    create<T extends TransactionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TransactionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
    **/
    delete<T extends TransactionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransactionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransactionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransactionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
    **/
    upsert<T extends TransactionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>
    ): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    cryptocurrency<T extends CryptocurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CryptocurrencyDefaultArgs<ExtArgs>>): Prisma__CryptocurrencyClient<$Result.GetResult<Prisma.$CryptocurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    fiatCurrency<T extends FiatCurrencyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FiatCurrencyDefaultArgs<ExtArgs>>): Prisma__FiatCurrencyClient<$Result.GetResult<Prisma.$FiatCurrencyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly cryptoId: FieldRef<"Transaction", 'Int'>
    readonly fiatId: FieldRef<"Transaction", 'Int'>
    readonly transactionType: FieldRef<"Transaction", 'TransactionType'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly price: FieldRef<"Transaction", 'Float'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Transfer
   */

  export type AggregateTransfer = {
    _count: TransferCountAggregateOutputType | null
    _avg: TransferAvgAggregateOutputType | null
    _sum: TransferSumAggregateOutputType | null
    _min: TransferMinAggregateOutputType | null
    _max: TransferMaxAggregateOutputType | null
  }

  export type TransferAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    senderWalletId: number | null
    receiverWalletId: number | null
    amount: number | null
  }

  export type TransferSumAggregateOutputType = {
    id: number | null
    userId: number | null
    senderWalletId: number | null
    receiverWalletId: number | null
    amount: number | null
  }

  export type TransferMinAggregateOutputType = {
    id: number | null
    userId: number | null
    senderWalletId: number | null
    receiverWalletId: number | null
    amount: number | null
    transferType: $Enums.TransferType | null
    createdAt: Date | null
  }

  export type TransferMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    senderWalletId: number | null
    receiverWalletId: number | null
    amount: number | null
    transferType: $Enums.TransferType | null
    createdAt: Date | null
  }

  export type TransferCountAggregateOutputType = {
    id: number
    userId: number
    senderWalletId: number
    receiverWalletId: number
    amount: number
    transferType: number
    createdAt: number
    _all: number
  }


  export type TransferAvgAggregateInputType = {
    id?: true
    userId?: true
    senderWalletId?: true
    receiverWalletId?: true
    amount?: true
  }

  export type TransferSumAggregateInputType = {
    id?: true
    userId?: true
    senderWalletId?: true
    receiverWalletId?: true
    amount?: true
  }

  export type TransferMinAggregateInputType = {
    id?: true
    userId?: true
    senderWalletId?: true
    receiverWalletId?: true
    amount?: true
    transferType?: true
    createdAt?: true
  }

  export type TransferMaxAggregateInputType = {
    id?: true
    userId?: true
    senderWalletId?: true
    receiverWalletId?: true
    amount?: true
    transferType?: true
    createdAt?: true
  }

  export type TransferCountAggregateInputType = {
    id?: true
    userId?: true
    senderWalletId?: true
    receiverWalletId?: true
    amount?: true
    transferType?: true
    createdAt?: true
    _all?: true
  }

  export type TransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transfer to aggregate.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transfers
    **/
    _count?: true | TransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransferMaxAggregateInputType
  }

  export type GetTransferAggregateType<T extends TransferAggregateArgs> = {
        [P in keyof T & keyof AggregateTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransfer[P]>
      : GetScalarType<T[P], AggregateTransfer[P]>
  }




  export type TransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransferWhereInput
    orderBy?: TransferOrderByWithAggregationInput | TransferOrderByWithAggregationInput[]
    by: TransferScalarFieldEnum[] | TransferScalarFieldEnum
    having?: TransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransferCountAggregateInputType | true
    _avg?: TransferAvgAggregateInputType
    _sum?: TransferSumAggregateInputType
    _min?: TransferMinAggregateInputType
    _max?: TransferMaxAggregateInputType
  }

  export type TransferGroupByOutputType = {
    id: number
    userId: number
    senderWalletId: number
    receiverWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt: Date
    _count: TransferCountAggregateOutputType | null
    _avg: TransferAvgAggregateOutputType | null
    _sum: TransferSumAggregateOutputType | null
    _min: TransferMinAggregateOutputType | null
    _max: TransferMaxAggregateOutputType | null
  }

  type GetTransferGroupByPayload<T extends TransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransferGroupByOutputType[P]>
            : GetScalarType<T[P], TransferGroupByOutputType[P]>
        }
      >
    >


  export type TransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    senderWalletId?: boolean
    receiverWalletId?: boolean
    amount?: boolean
    transferType?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    senderWallet?: boolean | CryptoWalletDefaultArgs<ExtArgs>
    receiverWallet?: boolean | CryptoWalletDefaultArgs<ExtArgs>
    externalTransfer?: boolean | Transfer$externalTransferArgs<ExtArgs>
  }, ExtArgs["result"]["transfer"]>

  export type TransferSelectScalar = {
    id?: boolean
    userId?: boolean
    senderWalletId?: boolean
    receiverWalletId?: boolean
    amount?: boolean
    transferType?: boolean
    createdAt?: boolean
  }


  export type TransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    senderWallet?: boolean | CryptoWalletDefaultArgs<ExtArgs>
    receiverWallet?: boolean | CryptoWalletDefaultArgs<ExtArgs>
    externalTransfer?: boolean | Transfer$externalTransferArgs<ExtArgs>
  }


  export type $TransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transfer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      senderWallet: Prisma.$CryptoWalletPayload<ExtArgs>
      receiverWallet: Prisma.$CryptoWalletPayload<ExtArgs>
      externalTransfer: Prisma.$ExternalTransferPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      senderWalletId: number
      receiverWalletId: number
      amount: number
      transferType: $Enums.TransferType
      createdAt: Date
    }, ExtArgs["result"]["transfer"]>
    composites: {}
  }


  type TransferGetPayload<S extends boolean | null | undefined | TransferDefaultArgs> = $Result.GetResult<Prisma.$TransferPayload, S>

  type TransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransferCountAggregateInputType | true
    }

  export interface TransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transfer'], meta: { name: 'Transfer' } }
    /**
     * Find zero or one Transfer that matches the filter.
     * @param {TransferFindUniqueArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TransferFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TransferFindUniqueArgs<ExtArgs>>
    ): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Transfer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransferFindUniqueOrThrowArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TransferFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Transfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindFirstArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TransferFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferFindFirstArgs<ExtArgs>>
    ): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Transfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindFirstOrThrowArgs} args - Arguments to find a Transfer
     * @example
     * // Get one Transfer
     * const transfer = await prisma.transfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TransferFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Transfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transfers
     * const transfers = await prisma.transfer.findMany()
     * 
     * // Get first 10 Transfers
     * const transfers = await prisma.transfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transferWithIdOnly = await prisma.transfer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TransferFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Transfer.
     * @param {TransferCreateArgs} args - Arguments to create a Transfer.
     * @example
     * // Create one Transfer
     * const Transfer = await prisma.transfer.create({
     *   data: {
     *     // ... data to create a Transfer
     *   }
     * })
     * 
    **/
    create<T extends TransferCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TransferCreateArgs<ExtArgs>>
    ): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Transfers.
     * @param {TransferCreateManyArgs} args - Arguments to create many Transfers.
     * @example
     * // Create many Transfers
     * const transfer = await prisma.transfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends TransferCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transfer.
     * @param {TransferDeleteArgs} args - Arguments to delete one Transfer.
     * @example
     * // Delete one Transfer
     * const Transfer = await prisma.transfer.delete({
     *   where: {
     *     // ... filter to delete one Transfer
     *   }
     * })
     * 
    **/
    delete<T extends TransferDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TransferDeleteArgs<ExtArgs>>
    ): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Transfer.
     * @param {TransferUpdateArgs} args - Arguments to update one Transfer.
     * @example
     * // Update one Transfer
     * const transfer = await prisma.transfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TransferUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TransferUpdateArgs<ExtArgs>>
    ): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Transfers.
     * @param {TransferDeleteManyArgs} args - Arguments to filter Transfers to delete.
     * @example
     * // Delete a few Transfers
     * const { count } = await prisma.transfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TransferDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TransferDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transfers
     * const transfer = await prisma.transfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TransferUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TransferUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transfer.
     * @param {TransferUpsertArgs} args - Arguments to update or create a Transfer.
     * @example
     * // Update or create a Transfer
     * const transfer = await prisma.transfer.upsert({
     *   create: {
     *     // ... data to create a Transfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transfer we want to update
     *   }
     * })
    **/
    upsert<T extends TransferUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TransferUpsertArgs<ExtArgs>>
    ): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferCountArgs} args - Arguments to filter Transfers to count.
     * @example
     * // Count the number of Transfers
     * const count = await prisma.transfer.count({
     *   where: {
     *     // ... the filter for the Transfers we want to count
     *   }
     * })
    **/
    count<T extends TransferCountArgs>(
      args?: Subset<T, TransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransferAggregateArgs>(args: Subset<T, TransferAggregateArgs>): Prisma.PrismaPromise<GetTransferAggregateType<T>>

    /**
     * Group by Transfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransferGroupByArgs} args - Group by arguments.
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
      T extends TransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransferGroupByArgs['orderBy'] }
        : { orderBy?: TransferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transfer model
   */
  readonly fields: TransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    senderWallet<T extends CryptoWalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CryptoWalletDefaultArgs<ExtArgs>>): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    receiverWallet<T extends CryptoWalletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CryptoWalletDefaultArgs<ExtArgs>>): Prisma__CryptoWalletClient<$Result.GetResult<Prisma.$CryptoWalletPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    externalTransfer<T extends Transfer$externalTransferArgs<ExtArgs> = {}>(args?: Subset<T, Transfer$externalTransferArgs<ExtArgs>>): Prisma__ExternalTransferClient<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Transfer model
   */ 
  interface TransferFieldRefs {
    readonly id: FieldRef<"Transfer", 'Int'>
    readonly userId: FieldRef<"Transfer", 'Int'>
    readonly senderWalletId: FieldRef<"Transfer", 'Int'>
    readonly receiverWalletId: FieldRef<"Transfer", 'Int'>
    readonly amount: FieldRef<"Transfer", 'Float'>
    readonly transferType: FieldRef<"Transfer", 'TransferType'>
    readonly createdAt: FieldRef<"Transfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transfer findUnique
   */
  export type TransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer findUniqueOrThrow
   */
  export type TransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer findFirst
   */
  export type TransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transfers.
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transfers.
     */
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Transfer findFirstOrThrow
   */
  export type TransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfer to fetch.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transfers.
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transfers.
     */
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Transfer findMany
   */
  export type TransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter, which Transfers to fetch.
     */
    where?: TransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transfers to fetch.
     */
    orderBy?: TransferOrderByWithRelationInput | TransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transfers.
     */
    cursor?: TransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transfers.
     */
    skip?: number
    distinct?: TransferScalarFieldEnum | TransferScalarFieldEnum[]
  }

  /**
   * Transfer create
   */
  export type TransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * The data needed to create a Transfer.
     */
    data: XOR<TransferCreateInput, TransferUncheckedCreateInput>
  }

  /**
   * Transfer createMany
   */
  export type TransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transfers.
     */
    data: TransferCreateManyInput | TransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transfer update
   */
  export type TransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * The data needed to update a Transfer.
     */
    data: XOR<TransferUpdateInput, TransferUncheckedUpdateInput>
    /**
     * Choose, which Transfer to update.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer updateMany
   */
  export type TransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transfers.
     */
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyInput>
    /**
     * Filter which Transfers to update
     */
    where?: TransferWhereInput
  }

  /**
   * Transfer upsert
   */
  export type TransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * The filter to search for the Transfer to update in case it exists.
     */
    where: TransferWhereUniqueInput
    /**
     * In case the Transfer found by the `where` argument doesn't exist, create a new Transfer with this data.
     */
    create: XOR<TransferCreateInput, TransferUncheckedCreateInput>
    /**
     * In case the Transfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransferUpdateInput, TransferUncheckedUpdateInput>
  }

  /**
   * Transfer delete
   */
  export type TransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
    /**
     * Filter which Transfer to delete.
     */
    where: TransferWhereUniqueInput
  }

  /**
   * Transfer deleteMany
   */
  export type TransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transfers to delete
     */
    where?: TransferWhereInput
  }

  /**
   * Transfer.externalTransfer
   */
  export type Transfer$externalTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    where?: ExternalTransferWhereInput
  }

  /**
   * Transfer without action
   */
  export type TransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transfer
     */
    select?: TransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransferInclude<ExtArgs> | null
  }


  /**
   * Model ExternalTransfer
   */

  export type AggregateExternalTransfer = {
    _count: ExternalTransferCountAggregateOutputType | null
    _avg: ExternalTransferAvgAggregateOutputType | null
    _sum: ExternalTransferSumAggregateOutputType | null
    _min: ExternalTransferMinAggregateOutputType | null
    _max: ExternalTransferMaxAggregateOutputType | null
  }

  export type ExternalTransferAvgAggregateOutputType = {
    id: number | null
    transferId: number | null
  }

  export type ExternalTransferSumAggregateOutputType = {
    id: number | null
    transferId: number | null
  }

  export type ExternalTransferMinAggregateOutputType = {
    id: number | null
    transferId: number | null
    externalAddress: string | null
    createdAt: Date | null
  }

  export type ExternalTransferMaxAggregateOutputType = {
    id: number | null
    transferId: number | null
    externalAddress: string | null
    createdAt: Date | null
  }

  export type ExternalTransferCountAggregateOutputType = {
    id: number
    transferId: number
    externalAddress: number
    createdAt: number
    _all: number
  }


  export type ExternalTransferAvgAggregateInputType = {
    id?: true
    transferId?: true
  }

  export type ExternalTransferSumAggregateInputType = {
    id?: true
    transferId?: true
  }

  export type ExternalTransferMinAggregateInputType = {
    id?: true
    transferId?: true
    externalAddress?: true
    createdAt?: true
  }

  export type ExternalTransferMaxAggregateInputType = {
    id?: true
    transferId?: true
    externalAddress?: true
    createdAt?: true
  }

  export type ExternalTransferCountAggregateInputType = {
    id?: true
    transferId?: true
    externalAddress?: true
    createdAt?: true
    _all?: true
  }

  export type ExternalTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalTransfer to aggregate.
     */
    where?: ExternalTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTransfers to fetch.
     */
    orderBy?: ExternalTransferOrderByWithRelationInput | ExternalTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalTransfers
    **/
    _count?: true | ExternalTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExternalTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExternalTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalTransferMaxAggregateInputType
  }

  export type GetExternalTransferAggregateType<T extends ExternalTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalTransfer[P]>
      : GetScalarType<T[P], AggregateExternalTransfer[P]>
  }




  export type ExternalTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalTransferWhereInput
    orderBy?: ExternalTransferOrderByWithAggregationInput | ExternalTransferOrderByWithAggregationInput[]
    by: ExternalTransferScalarFieldEnum[] | ExternalTransferScalarFieldEnum
    having?: ExternalTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalTransferCountAggregateInputType | true
    _avg?: ExternalTransferAvgAggregateInputType
    _sum?: ExternalTransferSumAggregateInputType
    _min?: ExternalTransferMinAggregateInputType
    _max?: ExternalTransferMaxAggregateInputType
  }

  export type ExternalTransferGroupByOutputType = {
    id: number
    transferId: number
    externalAddress: string
    createdAt: Date
    _count: ExternalTransferCountAggregateOutputType | null
    _avg: ExternalTransferAvgAggregateOutputType | null
    _sum: ExternalTransferSumAggregateOutputType | null
    _min: ExternalTransferMinAggregateOutputType | null
    _max: ExternalTransferMaxAggregateOutputType | null
  }

  type GetExternalTransferGroupByPayload<T extends ExternalTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalTransferGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalTransferGroupByOutputType[P]>
        }
      >
    >


  export type ExternalTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transferId?: boolean
    externalAddress?: boolean
    createdAt?: boolean
    transfer?: boolean | TransferDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalTransfer"]>

  export type ExternalTransferSelectScalar = {
    id?: boolean
    transferId?: boolean
    externalAddress?: boolean
    createdAt?: boolean
  }


  export type ExternalTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transfer?: boolean | TransferDefaultArgs<ExtArgs>
  }


  export type $ExternalTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalTransfer"
    objects: {
      transfer: Prisma.$TransferPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transferId: number
      externalAddress: string
      createdAt: Date
    }, ExtArgs["result"]["externalTransfer"]>
    composites: {}
  }


  type ExternalTransferGetPayload<S extends boolean | null | undefined | ExternalTransferDefaultArgs> = $Result.GetResult<Prisma.$ExternalTransferPayload, S>

  type ExternalTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExternalTransferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExternalTransferCountAggregateInputType | true
    }

  export interface ExternalTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalTransfer'], meta: { name: 'ExternalTransfer' } }
    /**
     * Find zero or one ExternalTransfer that matches the filter.
     * @param {ExternalTransferFindUniqueArgs} args - Arguments to find a ExternalTransfer
     * @example
     * // Get one ExternalTransfer
     * const externalTransfer = await prisma.externalTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExternalTransferFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTransferFindUniqueArgs<ExtArgs>>
    ): Prisma__ExternalTransferClient<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ExternalTransfer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExternalTransferFindUniqueOrThrowArgs} args - Arguments to find a ExternalTransfer
     * @example
     * // Get one ExternalTransfer
     * const externalTransfer = await prisma.externalTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExternalTransferFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTransferFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalTransferClient<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ExternalTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTransferFindFirstArgs} args - Arguments to find a ExternalTransfer
     * @example
     * // Get one ExternalTransfer
     * const externalTransfer = await prisma.externalTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExternalTransferFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTransferFindFirstArgs<ExtArgs>>
    ): Prisma__ExternalTransferClient<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ExternalTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTransferFindFirstOrThrowArgs} args - Arguments to find a ExternalTransfer
     * @example
     * // Get one ExternalTransfer
     * const externalTransfer = await prisma.externalTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExternalTransferFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTransferFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExternalTransferClient<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ExternalTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalTransfers
     * const externalTransfers = await prisma.externalTransfer.findMany()
     * 
     * // Get first 10 ExternalTransfers
     * const externalTransfers = await prisma.externalTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalTransferWithIdOnly = await prisma.externalTransfer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExternalTransferFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTransferFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ExternalTransfer.
     * @param {ExternalTransferCreateArgs} args - Arguments to create a ExternalTransfer.
     * @example
     * // Create one ExternalTransfer
     * const ExternalTransfer = await prisma.externalTransfer.create({
     *   data: {
     *     // ... data to create a ExternalTransfer
     *   }
     * })
     * 
    **/
    create<T extends ExternalTransferCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTransferCreateArgs<ExtArgs>>
    ): Prisma__ExternalTransferClient<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ExternalTransfers.
     * @param {ExternalTransferCreateManyArgs} args - Arguments to create many ExternalTransfers.
     * @example
     * // Create many ExternalTransfers
     * const externalTransfer = await prisma.externalTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ExternalTransferCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTransferCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExternalTransfer.
     * @param {ExternalTransferDeleteArgs} args - Arguments to delete one ExternalTransfer.
     * @example
     * // Delete one ExternalTransfer
     * const ExternalTransfer = await prisma.externalTransfer.delete({
     *   where: {
     *     // ... filter to delete one ExternalTransfer
     *   }
     * })
     * 
    **/
    delete<T extends ExternalTransferDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTransferDeleteArgs<ExtArgs>>
    ): Prisma__ExternalTransferClient<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ExternalTransfer.
     * @param {ExternalTransferUpdateArgs} args - Arguments to update one ExternalTransfer.
     * @example
     * // Update one ExternalTransfer
     * const externalTransfer = await prisma.externalTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExternalTransferUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTransferUpdateArgs<ExtArgs>>
    ): Prisma__ExternalTransferClient<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ExternalTransfers.
     * @param {ExternalTransferDeleteManyArgs} args - Arguments to filter ExternalTransfers to delete.
     * @example
     * // Delete a few ExternalTransfers
     * const { count } = await prisma.externalTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExternalTransferDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExternalTransferDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalTransfers
     * const externalTransfer = await prisma.externalTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExternalTransferUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTransferUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExternalTransfer.
     * @param {ExternalTransferUpsertArgs} args - Arguments to update or create a ExternalTransfer.
     * @example
     * // Update or create a ExternalTransfer
     * const externalTransfer = await prisma.externalTransfer.upsert({
     *   create: {
     *     // ... data to create a ExternalTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalTransfer we want to update
     *   }
     * })
    **/
    upsert<T extends ExternalTransferUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExternalTransferUpsertArgs<ExtArgs>>
    ): Prisma__ExternalTransferClient<$Result.GetResult<Prisma.$ExternalTransferPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ExternalTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTransferCountArgs} args - Arguments to filter ExternalTransfers to count.
     * @example
     * // Count the number of ExternalTransfers
     * const count = await prisma.externalTransfer.count({
     *   where: {
     *     // ... the filter for the ExternalTransfers we want to count
     *   }
     * })
    **/
    count<T extends ExternalTransferCountArgs>(
      args?: Subset<T, ExternalTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExternalTransferAggregateArgs>(args: Subset<T, ExternalTransferAggregateArgs>): Prisma.PrismaPromise<GetExternalTransferAggregateType<T>>

    /**
     * Group by ExternalTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalTransferGroupByArgs} args - Group by arguments.
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
      T extends ExternalTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalTransferGroupByArgs['orderBy'] }
        : { orderBy?: ExternalTransferGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExternalTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalTransfer model
   */
  readonly fields: ExternalTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    transfer<T extends TransferDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransferDefaultArgs<ExtArgs>>): Prisma__TransferClient<$Result.GetResult<Prisma.$TransferPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ExternalTransfer model
   */ 
  interface ExternalTransferFieldRefs {
    readonly id: FieldRef<"ExternalTransfer", 'Int'>
    readonly transferId: FieldRef<"ExternalTransfer", 'Int'>
    readonly externalAddress: FieldRef<"ExternalTransfer", 'String'>
    readonly createdAt: FieldRef<"ExternalTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExternalTransfer findUnique
   */
  export type ExternalTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    /**
     * Filter, which ExternalTransfer to fetch.
     */
    where: ExternalTransferWhereUniqueInput
  }

  /**
   * ExternalTransfer findUniqueOrThrow
   */
  export type ExternalTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    /**
     * Filter, which ExternalTransfer to fetch.
     */
    where: ExternalTransferWhereUniqueInput
  }

  /**
   * ExternalTransfer findFirst
   */
  export type ExternalTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    /**
     * Filter, which ExternalTransfer to fetch.
     */
    where?: ExternalTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTransfers to fetch.
     */
    orderBy?: ExternalTransferOrderByWithRelationInput | ExternalTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalTransfers.
     */
    cursor?: ExternalTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalTransfers.
     */
    distinct?: ExternalTransferScalarFieldEnum | ExternalTransferScalarFieldEnum[]
  }

  /**
   * ExternalTransfer findFirstOrThrow
   */
  export type ExternalTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    /**
     * Filter, which ExternalTransfer to fetch.
     */
    where?: ExternalTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTransfers to fetch.
     */
    orderBy?: ExternalTransferOrderByWithRelationInput | ExternalTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalTransfers.
     */
    cursor?: ExternalTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalTransfers.
     */
    distinct?: ExternalTransferScalarFieldEnum | ExternalTransferScalarFieldEnum[]
  }

  /**
   * ExternalTransfer findMany
   */
  export type ExternalTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    /**
     * Filter, which ExternalTransfers to fetch.
     */
    where?: ExternalTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalTransfers to fetch.
     */
    orderBy?: ExternalTransferOrderByWithRelationInput | ExternalTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalTransfers.
     */
    cursor?: ExternalTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalTransfers.
     */
    skip?: number
    distinct?: ExternalTransferScalarFieldEnum | ExternalTransferScalarFieldEnum[]
  }

  /**
   * ExternalTransfer create
   */
  export type ExternalTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a ExternalTransfer.
     */
    data: XOR<ExternalTransferCreateInput, ExternalTransferUncheckedCreateInput>
  }

  /**
   * ExternalTransfer createMany
   */
  export type ExternalTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalTransfers.
     */
    data: ExternalTransferCreateManyInput | ExternalTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExternalTransfer update
   */
  export type ExternalTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a ExternalTransfer.
     */
    data: XOR<ExternalTransferUpdateInput, ExternalTransferUncheckedUpdateInput>
    /**
     * Choose, which ExternalTransfer to update.
     */
    where: ExternalTransferWhereUniqueInput
  }

  /**
   * ExternalTransfer updateMany
   */
  export type ExternalTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalTransfers.
     */
    data: XOR<ExternalTransferUpdateManyMutationInput, ExternalTransferUncheckedUpdateManyInput>
    /**
     * Filter which ExternalTransfers to update
     */
    where?: ExternalTransferWhereInput
  }

  /**
   * ExternalTransfer upsert
   */
  export type ExternalTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the ExternalTransfer to update in case it exists.
     */
    where: ExternalTransferWhereUniqueInput
    /**
     * In case the ExternalTransfer found by the `where` argument doesn't exist, create a new ExternalTransfer with this data.
     */
    create: XOR<ExternalTransferCreateInput, ExternalTransferUncheckedCreateInput>
    /**
     * In case the ExternalTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalTransferUpdateInput, ExternalTransferUncheckedUpdateInput>
  }

  /**
   * ExternalTransfer delete
   */
  export type ExternalTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
    /**
     * Filter which ExternalTransfer to delete.
     */
    where: ExternalTransferWhereUniqueInput
  }

  /**
   * ExternalTransfer deleteMany
   */
  export type ExternalTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalTransfers to delete
     */
    where?: ExternalTransferWhereInput
  }

  /**
   * ExternalTransfer without action
   */
  export type ExternalTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalTransfer
     */
    select?: ExternalTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalTransferInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    fullName: 'fullName',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CryptocurrencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    symbol: 'symbol'
  };

  export type CryptocurrencyScalarFieldEnum = (typeof CryptocurrencyScalarFieldEnum)[keyof typeof CryptocurrencyScalarFieldEnum]


  export const FiatCurrencyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    symbol: 'symbol'
  };

  export type FiatCurrencyScalarFieldEnum = (typeof FiatCurrencyScalarFieldEnum)[keyof typeof FiatCurrencyScalarFieldEnum]


  export const CryptoWalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cryptoId: 'cryptoId',
    balance: 'balance'
  };

  export type CryptoWalletScalarFieldEnum = (typeof CryptoWalletScalarFieldEnum)[keyof typeof CryptoWalletScalarFieldEnum]


  export const FiatWalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fiatId: 'fiatId',
    balance: 'balance'
  };

  export type FiatWalletScalarFieldEnum = (typeof FiatWalletScalarFieldEnum)[keyof typeof FiatWalletScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cryptoId: 'cryptoId',
    fiatId: 'fiatId',
    transactionType: 'transactionType',
    amount: 'amount',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const TransferScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    senderWalletId: 'senderWalletId',
    receiverWalletId: 'receiverWalletId',
    amount: 'amount',
    transferType: 'transferType',
    createdAt: 'createdAt'
  };

  export type TransferScalarFieldEnum = (typeof TransferScalarFieldEnum)[keyof typeof TransferScalarFieldEnum]


  export const ExternalTransferScalarFieldEnum: {
    id: 'id',
    transferId: 'transferId',
    externalAddress: 'externalAddress',
    createdAt: 'createdAt'
  };

  export type ExternalTransferScalarFieldEnum = (typeof ExternalTransferScalarFieldEnum)[keyof typeof ExternalTransferScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransferType'
   */
  export type EnumTransferTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransferType'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    cryptoWallets?: CryptoWalletListRelationFilter
    fiatWallets?: FiatWalletListRelationFilter
    transactions?: TransactionListRelationFilter
    transfers?: TransferListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    createdAt?: SortOrder
    cryptoWallets?: CryptoWalletOrderByRelationAggregateInput
    fiatWallets?: FiatWalletOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    transfers?: TransferOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    cryptoWallets?: CryptoWalletListRelationFilter
    fiatWallets?: FiatWalletListRelationFilter
    transactions?: TransactionListRelationFilter
    transfers?: TransferListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CryptocurrencyWhereInput = {
    AND?: CryptocurrencyWhereInput | CryptocurrencyWhereInput[]
    OR?: CryptocurrencyWhereInput[]
    NOT?: CryptocurrencyWhereInput | CryptocurrencyWhereInput[]
    id?: IntFilter<"Cryptocurrency"> | number
    name?: StringFilter<"Cryptocurrency"> | string
    symbol?: StringFilter<"Cryptocurrency"> | string
    cryptoWallets?: CryptoWalletListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type CryptocurrencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    cryptoWallets?: CryptoWalletOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type CryptocurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    symbol?: string
    AND?: CryptocurrencyWhereInput | CryptocurrencyWhereInput[]
    OR?: CryptocurrencyWhereInput[]
    NOT?: CryptocurrencyWhereInput | CryptocurrencyWhereInput[]
    name?: StringFilter<"Cryptocurrency"> | string
    cryptoWallets?: CryptoWalletListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "symbol">

  export type CryptocurrencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    _count?: CryptocurrencyCountOrderByAggregateInput
    _avg?: CryptocurrencyAvgOrderByAggregateInput
    _max?: CryptocurrencyMaxOrderByAggregateInput
    _min?: CryptocurrencyMinOrderByAggregateInput
    _sum?: CryptocurrencySumOrderByAggregateInput
  }

  export type CryptocurrencyScalarWhereWithAggregatesInput = {
    AND?: CryptocurrencyScalarWhereWithAggregatesInput | CryptocurrencyScalarWhereWithAggregatesInput[]
    OR?: CryptocurrencyScalarWhereWithAggregatesInput[]
    NOT?: CryptocurrencyScalarWhereWithAggregatesInput | CryptocurrencyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cryptocurrency"> | number
    name?: StringWithAggregatesFilter<"Cryptocurrency"> | string
    symbol?: StringWithAggregatesFilter<"Cryptocurrency"> | string
  }

  export type FiatCurrencyWhereInput = {
    AND?: FiatCurrencyWhereInput | FiatCurrencyWhereInput[]
    OR?: FiatCurrencyWhereInput[]
    NOT?: FiatCurrencyWhereInput | FiatCurrencyWhereInput[]
    id?: IntFilter<"FiatCurrency"> | number
    name?: StringFilter<"FiatCurrency"> | string
    symbol?: StringFilter<"FiatCurrency"> | string
    fiatWallets?: FiatWalletListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type FiatCurrencyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    fiatWallets?: FiatWalletOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type FiatCurrencyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    symbol?: string
    AND?: FiatCurrencyWhereInput | FiatCurrencyWhereInput[]
    OR?: FiatCurrencyWhereInput[]
    NOT?: FiatCurrencyWhereInput | FiatCurrencyWhereInput[]
    name?: StringFilter<"FiatCurrency"> | string
    fiatWallets?: FiatWalletListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "symbol">

  export type FiatCurrencyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
    _count?: FiatCurrencyCountOrderByAggregateInput
    _avg?: FiatCurrencyAvgOrderByAggregateInput
    _max?: FiatCurrencyMaxOrderByAggregateInput
    _min?: FiatCurrencyMinOrderByAggregateInput
    _sum?: FiatCurrencySumOrderByAggregateInput
  }

  export type FiatCurrencyScalarWhereWithAggregatesInput = {
    AND?: FiatCurrencyScalarWhereWithAggregatesInput | FiatCurrencyScalarWhereWithAggregatesInput[]
    OR?: FiatCurrencyScalarWhereWithAggregatesInput[]
    NOT?: FiatCurrencyScalarWhereWithAggregatesInput | FiatCurrencyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FiatCurrency"> | number
    name?: StringWithAggregatesFilter<"FiatCurrency"> | string
    symbol?: StringWithAggregatesFilter<"FiatCurrency"> | string
  }

  export type CryptoWalletWhereInput = {
    AND?: CryptoWalletWhereInput | CryptoWalletWhereInput[]
    OR?: CryptoWalletWhereInput[]
    NOT?: CryptoWalletWhereInput | CryptoWalletWhereInput[]
    id?: IntFilter<"CryptoWallet"> | number
    userId?: IntFilter<"CryptoWallet"> | number
    cryptoId?: IntFilter<"CryptoWallet"> | number
    balance?: FloatFilter<"CryptoWallet"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    cryptocurrency?: XOR<CryptocurrencyRelationFilter, CryptocurrencyWhereInput>
    transfersFrom?: TransferListRelationFilter
    transfersTo?: TransferListRelationFilter
  }

  export type CryptoWalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    balance?: SortOrder
    user?: UserOrderByWithRelationInput
    cryptocurrency?: CryptocurrencyOrderByWithRelationInput
    transfersFrom?: TransferOrderByRelationAggregateInput
    transfersTo?: TransferOrderByRelationAggregateInput
  }

  export type CryptoWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CryptoWalletWhereInput | CryptoWalletWhereInput[]
    OR?: CryptoWalletWhereInput[]
    NOT?: CryptoWalletWhereInput | CryptoWalletWhereInput[]
    userId?: IntFilter<"CryptoWallet"> | number
    cryptoId?: IntFilter<"CryptoWallet"> | number
    balance?: FloatFilter<"CryptoWallet"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    cryptocurrency?: XOR<CryptocurrencyRelationFilter, CryptocurrencyWhereInput>
    transfersFrom?: TransferListRelationFilter
    transfersTo?: TransferListRelationFilter
  }, "id">

  export type CryptoWalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    balance?: SortOrder
    _count?: CryptoWalletCountOrderByAggregateInput
    _avg?: CryptoWalletAvgOrderByAggregateInput
    _max?: CryptoWalletMaxOrderByAggregateInput
    _min?: CryptoWalletMinOrderByAggregateInput
    _sum?: CryptoWalletSumOrderByAggregateInput
  }

  export type CryptoWalletScalarWhereWithAggregatesInput = {
    AND?: CryptoWalletScalarWhereWithAggregatesInput | CryptoWalletScalarWhereWithAggregatesInput[]
    OR?: CryptoWalletScalarWhereWithAggregatesInput[]
    NOT?: CryptoWalletScalarWhereWithAggregatesInput | CryptoWalletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CryptoWallet"> | number
    userId?: IntWithAggregatesFilter<"CryptoWallet"> | number
    cryptoId?: IntWithAggregatesFilter<"CryptoWallet"> | number
    balance?: FloatWithAggregatesFilter<"CryptoWallet"> | number
  }

  export type FiatWalletWhereInput = {
    AND?: FiatWalletWhereInput | FiatWalletWhereInput[]
    OR?: FiatWalletWhereInput[]
    NOT?: FiatWalletWhereInput | FiatWalletWhereInput[]
    id?: IntFilter<"FiatWallet"> | number
    userId?: IntFilter<"FiatWallet"> | number
    fiatId?: IntFilter<"FiatWallet"> | number
    balance?: FloatFilter<"FiatWallet"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    fiatCurrency?: XOR<FiatCurrencyRelationFilter, FiatCurrencyWhereInput>
  }

  export type FiatWalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fiatId?: SortOrder
    balance?: SortOrder
    user?: UserOrderByWithRelationInput
    fiatCurrency?: FiatCurrencyOrderByWithRelationInput
  }

  export type FiatWalletWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FiatWalletWhereInput | FiatWalletWhereInput[]
    OR?: FiatWalletWhereInput[]
    NOT?: FiatWalletWhereInput | FiatWalletWhereInput[]
    userId?: IntFilter<"FiatWallet"> | number
    fiatId?: IntFilter<"FiatWallet"> | number
    balance?: FloatFilter<"FiatWallet"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    fiatCurrency?: XOR<FiatCurrencyRelationFilter, FiatCurrencyWhereInput>
  }, "id">

  export type FiatWalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fiatId?: SortOrder
    balance?: SortOrder
    _count?: FiatWalletCountOrderByAggregateInput
    _avg?: FiatWalletAvgOrderByAggregateInput
    _max?: FiatWalletMaxOrderByAggregateInput
    _min?: FiatWalletMinOrderByAggregateInput
    _sum?: FiatWalletSumOrderByAggregateInput
  }

  export type FiatWalletScalarWhereWithAggregatesInput = {
    AND?: FiatWalletScalarWhereWithAggregatesInput | FiatWalletScalarWhereWithAggregatesInput[]
    OR?: FiatWalletScalarWhereWithAggregatesInput[]
    NOT?: FiatWalletScalarWhereWithAggregatesInput | FiatWalletScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FiatWallet"> | number
    userId?: IntWithAggregatesFilter<"FiatWallet"> | number
    fiatId?: IntWithAggregatesFilter<"FiatWallet"> | number
    balance?: FloatWithAggregatesFilter<"FiatWallet"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    cryptoId?: IntFilter<"Transaction"> | number
    fiatId?: IntFilter<"Transaction"> | number
    transactionType?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    price?: FloatFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    cryptocurrency?: XOR<CryptocurrencyRelationFilter, CryptocurrencyWhereInput>
    fiatCurrency?: XOR<FiatCurrencyRelationFilter, FiatCurrencyWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    fiatId?: SortOrder
    transactionType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cryptocurrency?: CryptocurrencyOrderByWithRelationInput
    fiatCurrency?: FiatCurrencyOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: IntFilter<"Transaction"> | number
    cryptoId?: IntFilter<"Transaction"> | number
    fiatId?: IntFilter<"Transaction"> | number
    transactionType?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    price?: FloatFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    cryptocurrency?: XOR<CryptocurrencyRelationFilter, CryptocurrencyWhereInput>
    fiatCurrency?: XOR<FiatCurrencyRelationFilter, FiatCurrencyWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    fiatId?: SortOrder
    transactionType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    cryptoId?: IntWithAggregatesFilter<"Transaction"> | number
    fiatId?: IntWithAggregatesFilter<"Transaction"> | number
    transactionType?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    price?: FloatWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type TransferWhereInput = {
    AND?: TransferWhereInput | TransferWhereInput[]
    OR?: TransferWhereInput[]
    NOT?: TransferWhereInput | TransferWhereInput[]
    id?: IntFilter<"Transfer"> | number
    userId?: IntFilter<"Transfer"> | number
    senderWalletId?: IntFilter<"Transfer"> | number
    receiverWalletId?: IntFilter<"Transfer"> | number
    amount?: FloatFilter<"Transfer"> | number
    transferType?: EnumTransferTypeFilter<"Transfer"> | $Enums.TransferType
    createdAt?: DateTimeFilter<"Transfer"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    senderWallet?: XOR<CryptoWalletRelationFilter, CryptoWalletWhereInput>
    receiverWallet?: XOR<CryptoWalletRelationFilter, CryptoWalletWhereInput>
    externalTransfer?: XOR<ExternalTransferNullableRelationFilter, ExternalTransferWhereInput> | null
  }

  export type TransferOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    amount?: SortOrder
    transferType?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    senderWallet?: CryptoWalletOrderByWithRelationInput
    receiverWallet?: CryptoWalletOrderByWithRelationInput
    externalTransfer?: ExternalTransferOrderByWithRelationInput
  }

  export type TransferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransferWhereInput | TransferWhereInput[]
    OR?: TransferWhereInput[]
    NOT?: TransferWhereInput | TransferWhereInput[]
    userId?: IntFilter<"Transfer"> | number
    senderWalletId?: IntFilter<"Transfer"> | number
    receiverWalletId?: IntFilter<"Transfer"> | number
    amount?: FloatFilter<"Transfer"> | number
    transferType?: EnumTransferTypeFilter<"Transfer"> | $Enums.TransferType
    createdAt?: DateTimeFilter<"Transfer"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    senderWallet?: XOR<CryptoWalletRelationFilter, CryptoWalletWhereInput>
    receiverWallet?: XOR<CryptoWalletRelationFilter, CryptoWalletWhereInput>
    externalTransfer?: XOR<ExternalTransferNullableRelationFilter, ExternalTransferWhereInput> | null
  }, "id">

  export type TransferOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    amount?: SortOrder
    transferType?: SortOrder
    createdAt?: SortOrder
    _count?: TransferCountOrderByAggregateInput
    _avg?: TransferAvgOrderByAggregateInput
    _max?: TransferMaxOrderByAggregateInput
    _min?: TransferMinOrderByAggregateInput
    _sum?: TransferSumOrderByAggregateInput
  }

  export type TransferScalarWhereWithAggregatesInput = {
    AND?: TransferScalarWhereWithAggregatesInput | TransferScalarWhereWithAggregatesInput[]
    OR?: TransferScalarWhereWithAggregatesInput[]
    NOT?: TransferScalarWhereWithAggregatesInput | TransferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transfer"> | number
    userId?: IntWithAggregatesFilter<"Transfer"> | number
    senderWalletId?: IntWithAggregatesFilter<"Transfer"> | number
    receiverWalletId?: IntWithAggregatesFilter<"Transfer"> | number
    amount?: FloatWithAggregatesFilter<"Transfer"> | number
    transferType?: EnumTransferTypeWithAggregatesFilter<"Transfer"> | $Enums.TransferType
    createdAt?: DateTimeWithAggregatesFilter<"Transfer"> | Date | string
  }

  export type ExternalTransferWhereInput = {
    AND?: ExternalTransferWhereInput | ExternalTransferWhereInput[]
    OR?: ExternalTransferWhereInput[]
    NOT?: ExternalTransferWhereInput | ExternalTransferWhereInput[]
    id?: IntFilter<"ExternalTransfer"> | number
    transferId?: IntFilter<"ExternalTransfer"> | number
    externalAddress?: StringFilter<"ExternalTransfer"> | string
    createdAt?: DateTimeFilter<"ExternalTransfer"> | Date | string
    transfer?: XOR<TransferRelationFilter, TransferWhereInput>
  }

  export type ExternalTransferOrderByWithRelationInput = {
    id?: SortOrder
    transferId?: SortOrder
    externalAddress?: SortOrder
    createdAt?: SortOrder
    transfer?: TransferOrderByWithRelationInput
  }

  export type ExternalTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transferId?: number
    AND?: ExternalTransferWhereInput | ExternalTransferWhereInput[]
    OR?: ExternalTransferWhereInput[]
    NOT?: ExternalTransferWhereInput | ExternalTransferWhereInput[]
    externalAddress?: StringFilter<"ExternalTransfer"> | string
    createdAt?: DateTimeFilter<"ExternalTransfer"> | Date | string
    transfer?: XOR<TransferRelationFilter, TransferWhereInput>
  }, "id" | "transferId">

  export type ExternalTransferOrderByWithAggregationInput = {
    id?: SortOrder
    transferId?: SortOrder
    externalAddress?: SortOrder
    createdAt?: SortOrder
    _count?: ExternalTransferCountOrderByAggregateInput
    _avg?: ExternalTransferAvgOrderByAggregateInput
    _max?: ExternalTransferMaxOrderByAggregateInput
    _min?: ExternalTransferMinOrderByAggregateInput
    _sum?: ExternalTransferSumOrderByAggregateInput
  }

  export type ExternalTransferScalarWhereWithAggregatesInput = {
    AND?: ExternalTransferScalarWhereWithAggregatesInput | ExternalTransferScalarWhereWithAggregatesInput[]
    OR?: ExternalTransferScalarWhereWithAggregatesInput[]
    NOT?: ExternalTransferScalarWhereWithAggregatesInput | ExternalTransferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExternalTransfer"> | number
    transferId?: IntWithAggregatesFilter<"ExternalTransfer"> | number
    externalAddress?: StringWithAggregatesFilter<"ExternalTransfer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ExternalTransfer"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    cryptoWallets?: CryptoWalletCreateNestedManyWithoutUserInput
    fiatWallets?: FiatWalletCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    transfers?: TransferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    cryptoWallets?: CryptoWalletUncheckedCreateNestedManyWithoutUserInput
    fiatWallets?: FiatWalletUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    transfers?: TransferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptoWallets?: CryptoWalletUpdateManyWithoutUserNestedInput
    fiatWallets?: FiatWalletUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    transfers?: TransferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptoWallets?: CryptoWalletUncheckedUpdateManyWithoutUserNestedInput
    fiatWallets?: FiatWalletUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    transfers?: TransferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptocurrencyCreateInput = {
    name: string
    symbol: string
    cryptoWallets?: CryptoWalletCreateNestedManyWithoutCryptocurrencyInput
    transactions?: TransactionCreateNestedManyWithoutCryptocurrencyInput
  }

  export type CryptocurrencyUncheckedCreateInput = {
    id?: number
    name: string
    symbol: string
    cryptoWallets?: CryptoWalletUncheckedCreateNestedManyWithoutCryptocurrencyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutCryptocurrencyInput
  }

  export type CryptocurrencyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    cryptoWallets?: CryptoWalletUpdateManyWithoutCryptocurrencyNestedInput
    transactions?: TransactionUpdateManyWithoutCryptocurrencyNestedInput
  }

  export type CryptocurrencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    cryptoWallets?: CryptoWalletUncheckedUpdateManyWithoutCryptocurrencyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutCryptocurrencyNestedInput
  }

  export type CryptocurrencyCreateManyInput = {
    id?: number
    name: string
    symbol: string
  }

  export type CryptocurrencyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type CryptocurrencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type FiatCurrencyCreateInput = {
    name: string
    symbol: string
    fiatWallets?: FiatWalletCreateNestedManyWithoutFiatCurrencyInput
    transactions?: TransactionCreateNestedManyWithoutFiatCurrencyInput
  }

  export type FiatCurrencyUncheckedCreateInput = {
    id?: number
    name: string
    symbol: string
    fiatWallets?: FiatWalletUncheckedCreateNestedManyWithoutFiatCurrencyInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutFiatCurrencyInput
  }

  export type FiatCurrencyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fiatWallets?: FiatWalletUpdateManyWithoutFiatCurrencyNestedInput
    transactions?: TransactionUpdateManyWithoutFiatCurrencyNestedInput
  }

  export type FiatCurrencyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fiatWallets?: FiatWalletUncheckedUpdateManyWithoutFiatCurrencyNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutFiatCurrencyNestedInput
  }

  export type FiatCurrencyCreateManyInput = {
    id?: number
    name: string
    symbol: string
  }

  export type FiatCurrencyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type FiatCurrencyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
  }

  export type CryptoWalletCreateInput = {
    balance?: number
    user: UserCreateNestedOneWithoutCryptoWalletsInput
    cryptocurrency: CryptocurrencyCreateNestedOneWithoutCryptoWalletsInput
    transfersFrom?: TransferCreateNestedManyWithoutSenderWalletInput
    transfersTo?: TransferCreateNestedManyWithoutReceiverWalletInput
  }

  export type CryptoWalletUncheckedCreateInput = {
    id?: number
    userId: number
    cryptoId: number
    balance?: number
    transfersFrom?: TransferUncheckedCreateNestedManyWithoutSenderWalletInput
    transfersTo?: TransferUncheckedCreateNestedManyWithoutReceiverWalletInput
  }

  export type CryptoWalletUpdateInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCryptoWalletsNestedInput
    cryptocurrency?: CryptocurrencyUpdateOneRequiredWithoutCryptoWalletsNestedInput
    transfersFrom?: TransferUpdateManyWithoutSenderWalletNestedInput
    transfersTo?: TransferUpdateManyWithoutReceiverWalletNestedInput
  }

  export type CryptoWalletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    transfersFrom?: TransferUncheckedUpdateManyWithoutSenderWalletNestedInput
    transfersTo?: TransferUncheckedUpdateManyWithoutReceiverWalletNestedInput
  }

  export type CryptoWalletCreateManyInput = {
    id?: number
    userId: number
    cryptoId: number
    balance?: number
  }

  export type CryptoWalletUpdateManyMutationInput = {
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type CryptoWalletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type FiatWalletCreateInput = {
    balance?: number
    user: UserCreateNestedOneWithoutFiatWalletsInput
    fiatCurrency: FiatCurrencyCreateNestedOneWithoutFiatWalletsInput
  }

  export type FiatWalletUncheckedCreateInput = {
    id?: number
    userId: number
    fiatId: number
    balance?: number
  }

  export type FiatWalletUpdateInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutFiatWalletsNestedInput
    fiatCurrency?: FiatCurrencyUpdateOneRequiredWithoutFiatWalletsNestedInput
  }

  export type FiatWalletUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type FiatWalletCreateManyInput = {
    id?: number
    userId: number
    fiatId: number
    balance?: number
  }

  export type FiatWalletUpdateManyMutationInput = {
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type FiatWalletUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    cryptocurrency: CryptocurrencyCreateNestedOneWithoutTransactionsInput
    fiatCurrency: FiatCurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    userId: number
    cryptoId: number
    fiatId: number
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    cryptocurrency?: CryptocurrencyUpdateOneRequiredWithoutTransactionsNestedInput
    fiatCurrency?: FiatCurrencyUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    userId: number
    cryptoId: number
    fiatId: number
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferCreateInput = {
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransfersInput
    senderWallet: CryptoWalletCreateNestedOneWithoutTransfersFromInput
    receiverWallet: CryptoWalletCreateNestedOneWithoutTransfersToInput
    externalTransfer?: ExternalTransferCreateNestedOneWithoutTransferInput
  }

  export type TransferUncheckedCreateInput = {
    id?: number
    userId: number
    senderWalletId: number
    receiverWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
    externalTransfer?: ExternalTransferUncheckedCreateNestedOneWithoutTransferInput
  }

  export type TransferUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransfersNestedInput
    senderWallet?: CryptoWalletUpdateOneRequiredWithoutTransfersFromNestedInput
    receiverWallet?: CryptoWalletUpdateOneRequiredWithoutTransfersToNestedInput
    externalTransfer?: ExternalTransferUpdateOneWithoutTransferNestedInput
  }

  export type TransferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    senderWalletId?: IntFieldUpdateOperationsInput | number
    receiverWalletId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalTransfer?: ExternalTransferUncheckedUpdateOneWithoutTransferNestedInput
  }

  export type TransferCreateManyInput = {
    id?: number
    userId: number
    senderWalletId: number
    receiverWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
  }

  export type TransferUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    senderWalletId?: IntFieldUpdateOperationsInput | number
    receiverWalletId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalTransferCreateInput = {
    externalAddress: string
    createdAt?: Date | string
    transfer: TransferCreateNestedOneWithoutExternalTransferInput
  }

  export type ExternalTransferUncheckedCreateInput = {
    id?: number
    transferId: number
    externalAddress: string
    createdAt?: Date | string
  }

  export type ExternalTransferUpdateInput = {
    externalAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfer?: TransferUpdateOneRequiredWithoutExternalTransferNestedInput
  }

  export type ExternalTransferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transferId?: IntFieldUpdateOperationsInput | number
    externalAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalTransferCreateManyInput = {
    id?: number
    transferId: number
    externalAddress: string
    createdAt?: Date | string
  }

  export type ExternalTransferUpdateManyMutationInput = {
    externalAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalTransferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transferId?: IntFieldUpdateOperationsInput | number
    externalAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CryptoWalletListRelationFilter = {
    every?: CryptoWalletWhereInput
    some?: CryptoWalletWhereInput
    none?: CryptoWalletWhereInput
  }

  export type FiatWalletListRelationFilter = {
    every?: FiatWalletWhereInput
    some?: FiatWalletWhereInput
    none?: FiatWalletWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type TransferListRelationFilter = {
    every?: TransferWhereInput
    some?: TransferWhereInput
    none?: TransferWhereInput
  }

  export type CryptoWalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FiatWalletOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type CryptocurrencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CryptocurrencyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CryptocurrencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CryptocurrencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type CryptocurrencySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FiatCurrencyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type FiatCurrencyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FiatCurrencyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type FiatCurrencyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    symbol?: SortOrder
  }

  export type FiatCurrencySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CryptocurrencyRelationFilter = {
    is?: CryptocurrencyWhereInput
    isNot?: CryptocurrencyWhereInput
  }

  export type CryptoWalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    balance?: SortOrder
  }

  export type CryptoWalletAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    balance?: SortOrder
  }

  export type CryptoWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    balance?: SortOrder
  }

  export type CryptoWalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    balance?: SortOrder
  }

  export type CryptoWalletSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    balance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FiatCurrencyRelationFilter = {
    is?: FiatCurrencyWhereInput
    isNot?: FiatCurrencyWhereInput
  }

  export type FiatWalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fiatId?: SortOrder
    balance?: SortOrder
  }

  export type FiatWalletAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fiatId?: SortOrder
    balance?: SortOrder
  }

  export type FiatWalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fiatId?: SortOrder
    balance?: SortOrder
  }

  export type FiatWalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fiatId?: SortOrder
    balance?: SortOrder
  }

  export type FiatWalletSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fiatId?: SortOrder
    balance?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    fiatId?: SortOrder
    transactionType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    fiatId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    fiatId?: SortOrder
    transactionType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    fiatId?: SortOrder
    transactionType?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cryptoId?: SortOrder
    fiatId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransferTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferType | EnumTransferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransferType[]
    notIn?: $Enums.TransferType[]
    not?: NestedEnumTransferTypeFilter<$PrismaModel> | $Enums.TransferType
  }

  export type CryptoWalletRelationFilter = {
    is?: CryptoWalletWhereInput
    isNot?: CryptoWalletWhereInput
  }

  export type ExternalTransferNullableRelationFilter = {
    is?: ExternalTransferWhereInput | null
    isNot?: ExternalTransferWhereInput | null
  }

  export type TransferCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    amount?: SortOrder
    transferType?: SortOrder
    createdAt?: SortOrder
  }

  export type TransferAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    amount?: SortOrder
  }

  export type TransferMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    amount?: SortOrder
    transferType?: SortOrder
    createdAt?: SortOrder
  }

  export type TransferMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    amount?: SortOrder
    transferType?: SortOrder
    createdAt?: SortOrder
  }

  export type TransferSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    senderWalletId?: SortOrder
    receiverWalletId?: SortOrder
    amount?: SortOrder
  }

  export type EnumTransferTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferType | EnumTransferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransferType[]
    notIn?: $Enums.TransferType[]
    not?: NestedEnumTransferTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransferType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransferTypeFilter<$PrismaModel>
    _max?: NestedEnumTransferTypeFilter<$PrismaModel>
  }

  export type TransferRelationFilter = {
    is?: TransferWhereInput
    isNot?: TransferWhereInput
  }

  export type ExternalTransferCountOrderByAggregateInput = {
    id?: SortOrder
    transferId?: SortOrder
    externalAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ExternalTransferAvgOrderByAggregateInput = {
    id?: SortOrder
    transferId?: SortOrder
  }

  export type ExternalTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    transferId?: SortOrder
    externalAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ExternalTransferMinOrderByAggregateInput = {
    id?: SortOrder
    transferId?: SortOrder
    externalAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type ExternalTransferSumOrderByAggregateInput = {
    id?: SortOrder
    transferId?: SortOrder
  }

  export type CryptoWalletCreateNestedManyWithoutUserInput = {
    create?: XOR<CryptoWalletCreateWithoutUserInput, CryptoWalletUncheckedCreateWithoutUserInput> | CryptoWalletCreateWithoutUserInput[] | CryptoWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutUserInput | CryptoWalletCreateOrConnectWithoutUserInput[]
    createMany?: CryptoWalletCreateManyUserInputEnvelope
    connect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
  }

  export type FiatWalletCreateNestedManyWithoutUserInput = {
    create?: XOR<FiatWalletCreateWithoutUserInput, FiatWalletUncheckedCreateWithoutUserInput> | FiatWalletCreateWithoutUserInput[] | FiatWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FiatWalletCreateOrConnectWithoutUserInput | FiatWalletCreateOrConnectWithoutUserInput[]
    createMany?: FiatWalletCreateManyUserInputEnvelope
    connect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransferCreateNestedManyWithoutUserInput = {
    create?: XOR<TransferCreateWithoutUserInput, TransferUncheckedCreateWithoutUserInput> | TransferCreateWithoutUserInput[] | TransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutUserInput | TransferCreateOrConnectWithoutUserInput[]
    createMany?: TransferCreateManyUserInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type CryptoWalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CryptoWalletCreateWithoutUserInput, CryptoWalletUncheckedCreateWithoutUserInput> | CryptoWalletCreateWithoutUserInput[] | CryptoWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutUserInput | CryptoWalletCreateOrConnectWithoutUserInput[]
    createMany?: CryptoWalletCreateManyUserInputEnvelope
    connect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
  }

  export type FiatWalletUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FiatWalletCreateWithoutUserInput, FiatWalletUncheckedCreateWithoutUserInput> | FiatWalletCreateWithoutUserInput[] | FiatWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FiatWalletCreateOrConnectWithoutUserInput | FiatWalletCreateOrConnectWithoutUserInput[]
    createMany?: FiatWalletCreateManyUserInputEnvelope
    connect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransferCreateWithoutUserInput, TransferUncheckedCreateWithoutUserInput> | TransferCreateWithoutUserInput[] | TransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutUserInput | TransferCreateOrConnectWithoutUserInput[]
    createMany?: TransferCreateManyUserInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CryptoWalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<CryptoWalletCreateWithoutUserInput, CryptoWalletUncheckedCreateWithoutUserInput> | CryptoWalletCreateWithoutUserInput[] | CryptoWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutUserInput | CryptoWalletCreateOrConnectWithoutUserInput[]
    upsert?: CryptoWalletUpsertWithWhereUniqueWithoutUserInput | CryptoWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CryptoWalletCreateManyUserInputEnvelope
    set?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    disconnect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    delete?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    connect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    update?: CryptoWalletUpdateWithWhereUniqueWithoutUserInput | CryptoWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CryptoWalletUpdateManyWithWhereWithoutUserInput | CryptoWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CryptoWalletScalarWhereInput | CryptoWalletScalarWhereInput[]
  }

  export type FiatWalletUpdateManyWithoutUserNestedInput = {
    create?: XOR<FiatWalletCreateWithoutUserInput, FiatWalletUncheckedCreateWithoutUserInput> | FiatWalletCreateWithoutUserInput[] | FiatWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FiatWalletCreateOrConnectWithoutUserInput | FiatWalletCreateOrConnectWithoutUserInput[]
    upsert?: FiatWalletUpsertWithWhereUniqueWithoutUserInput | FiatWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FiatWalletCreateManyUserInputEnvelope
    set?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    disconnect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    delete?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    connect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    update?: FiatWalletUpdateWithWhereUniqueWithoutUserInput | FiatWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FiatWalletUpdateManyWithWhereWithoutUserInput | FiatWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FiatWalletScalarWhereInput | FiatWalletScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransferUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransferCreateWithoutUserInput, TransferUncheckedCreateWithoutUserInput> | TransferCreateWithoutUserInput[] | TransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutUserInput | TransferCreateOrConnectWithoutUserInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutUserInput | TransferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransferCreateManyUserInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutUserInput | TransferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutUserInput | TransferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CryptoWalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CryptoWalletCreateWithoutUserInput, CryptoWalletUncheckedCreateWithoutUserInput> | CryptoWalletCreateWithoutUserInput[] | CryptoWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutUserInput | CryptoWalletCreateOrConnectWithoutUserInput[]
    upsert?: CryptoWalletUpsertWithWhereUniqueWithoutUserInput | CryptoWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CryptoWalletCreateManyUserInputEnvelope
    set?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    disconnect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    delete?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    connect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    update?: CryptoWalletUpdateWithWhereUniqueWithoutUserInput | CryptoWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CryptoWalletUpdateManyWithWhereWithoutUserInput | CryptoWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CryptoWalletScalarWhereInput | CryptoWalletScalarWhereInput[]
  }

  export type FiatWalletUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FiatWalletCreateWithoutUserInput, FiatWalletUncheckedCreateWithoutUserInput> | FiatWalletCreateWithoutUserInput[] | FiatWalletUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FiatWalletCreateOrConnectWithoutUserInput | FiatWalletCreateOrConnectWithoutUserInput[]
    upsert?: FiatWalletUpsertWithWhereUniqueWithoutUserInput | FiatWalletUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FiatWalletCreateManyUserInputEnvelope
    set?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    disconnect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    delete?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    connect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    update?: FiatWalletUpdateWithWhereUniqueWithoutUserInput | FiatWalletUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FiatWalletUpdateManyWithWhereWithoutUserInput | FiatWalletUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FiatWalletScalarWhereInput | FiatWalletScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransferCreateWithoutUserInput, TransferUncheckedCreateWithoutUserInput> | TransferCreateWithoutUserInput[] | TransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutUserInput | TransferCreateOrConnectWithoutUserInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutUserInput | TransferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransferCreateManyUserInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutUserInput | TransferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutUserInput | TransferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type CryptoWalletCreateNestedManyWithoutCryptocurrencyInput = {
    create?: XOR<CryptoWalletCreateWithoutCryptocurrencyInput, CryptoWalletUncheckedCreateWithoutCryptocurrencyInput> | CryptoWalletCreateWithoutCryptocurrencyInput[] | CryptoWalletUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutCryptocurrencyInput | CryptoWalletCreateOrConnectWithoutCryptocurrencyInput[]
    createMany?: CryptoWalletCreateManyCryptocurrencyInputEnvelope
    connect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutCryptocurrencyInput = {
    create?: XOR<TransactionCreateWithoutCryptocurrencyInput, TransactionUncheckedCreateWithoutCryptocurrencyInput> | TransactionCreateWithoutCryptocurrencyInput[] | TransactionUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCryptocurrencyInput | TransactionCreateOrConnectWithoutCryptocurrencyInput[]
    createMany?: TransactionCreateManyCryptocurrencyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CryptoWalletUncheckedCreateNestedManyWithoutCryptocurrencyInput = {
    create?: XOR<CryptoWalletCreateWithoutCryptocurrencyInput, CryptoWalletUncheckedCreateWithoutCryptocurrencyInput> | CryptoWalletCreateWithoutCryptocurrencyInput[] | CryptoWalletUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutCryptocurrencyInput | CryptoWalletCreateOrConnectWithoutCryptocurrencyInput[]
    createMany?: CryptoWalletCreateManyCryptocurrencyInputEnvelope
    connect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutCryptocurrencyInput = {
    create?: XOR<TransactionCreateWithoutCryptocurrencyInput, TransactionUncheckedCreateWithoutCryptocurrencyInput> | TransactionCreateWithoutCryptocurrencyInput[] | TransactionUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCryptocurrencyInput | TransactionCreateOrConnectWithoutCryptocurrencyInput[]
    createMany?: TransactionCreateManyCryptocurrencyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CryptoWalletUpdateManyWithoutCryptocurrencyNestedInput = {
    create?: XOR<CryptoWalletCreateWithoutCryptocurrencyInput, CryptoWalletUncheckedCreateWithoutCryptocurrencyInput> | CryptoWalletCreateWithoutCryptocurrencyInput[] | CryptoWalletUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutCryptocurrencyInput | CryptoWalletCreateOrConnectWithoutCryptocurrencyInput[]
    upsert?: CryptoWalletUpsertWithWhereUniqueWithoutCryptocurrencyInput | CryptoWalletUpsertWithWhereUniqueWithoutCryptocurrencyInput[]
    createMany?: CryptoWalletCreateManyCryptocurrencyInputEnvelope
    set?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    disconnect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    delete?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    connect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    update?: CryptoWalletUpdateWithWhereUniqueWithoutCryptocurrencyInput | CryptoWalletUpdateWithWhereUniqueWithoutCryptocurrencyInput[]
    updateMany?: CryptoWalletUpdateManyWithWhereWithoutCryptocurrencyInput | CryptoWalletUpdateManyWithWhereWithoutCryptocurrencyInput[]
    deleteMany?: CryptoWalletScalarWhereInput | CryptoWalletScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutCryptocurrencyNestedInput = {
    create?: XOR<TransactionCreateWithoutCryptocurrencyInput, TransactionUncheckedCreateWithoutCryptocurrencyInput> | TransactionCreateWithoutCryptocurrencyInput[] | TransactionUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCryptocurrencyInput | TransactionCreateOrConnectWithoutCryptocurrencyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCryptocurrencyInput | TransactionUpsertWithWhereUniqueWithoutCryptocurrencyInput[]
    createMany?: TransactionCreateManyCryptocurrencyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCryptocurrencyInput | TransactionUpdateWithWhereUniqueWithoutCryptocurrencyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCryptocurrencyInput | TransactionUpdateManyWithWhereWithoutCryptocurrencyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CryptoWalletUncheckedUpdateManyWithoutCryptocurrencyNestedInput = {
    create?: XOR<CryptoWalletCreateWithoutCryptocurrencyInput, CryptoWalletUncheckedCreateWithoutCryptocurrencyInput> | CryptoWalletCreateWithoutCryptocurrencyInput[] | CryptoWalletUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutCryptocurrencyInput | CryptoWalletCreateOrConnectWithoutCryptocurrencyInput[]
    upsert?: CryptoWalletUpsertWithWhereUniqueWithoutCryptocurrencyInput | CryptoWalletUpsertWithWhereUniqueWithoutCryptocurrencyInput[]
    createMany?: CryptoWalletCreateManyCryptocurrencyInputEnvelope
    set?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    disconnect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    delete?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    connect?: CryptoWalletWhereUniqueInput | CryptoWalletWhereUniqueInput[]
    update?: CryptoWalletUpdateWithWhereUniqueWithoutCryptocurrencyInput | CryptoWalletUpdateWithWhereUniqueWithoutCryptocurrencyInput[]
    updateMany?: CryptoWalletUpdateManyWithWhereWithoutCryptocurrencyInput | CryptoWalletUpdateManyWithWhereWithoutCryptocurrencyInput[]
    deleteMany?: CryptoWalletScalarWhereInput | CryptoWalletScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutCryptocurrencyNestedInput = {
    create?: XOR<TransactionCreateWithoutCryptocurrencyInput, TransactionUncheckedCreateWithoutCryptocurrencyInput> | TransactionCreateWithoutCryptocurrencyInput[] | TransactionUncheckedCreateWithoutCryptocurrencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCryptocurrencyInput | TransactionCreateOrConnectWithoutCryptocurrencyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCryptocurrencyInput | TransactionUpsertWithWhereUniqueWithoutCryptocurrencyInput[]
    createMany?: TransactionCreateManyCryptocurrencyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCryptocurrencyInput | TransactionUpdateWithWhereUniqueWithoutCryptocurrencyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCryptocurrencyInput | TransactionUpdateManyWithWhereWithoutCryptocurrencyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type FiatWalletCreateNestedManyWithoutFiatCurrencyInput = {
    create?: XOR<FiatWalletCreateWithoutFiatCurrencyInput, FiatWalletUncheckedCreateWithoutFiatCurrencyInput> | FiatWalletCreateWithoutFiatCurrencyInput[] | FiatWalletUncheckedCreateWithoutFiatCurrencyInput[]
    connectOrCreate?: FiatWalletCreateOrConnectWithoutFiatCurrencyInput | FiatWalletCreateOrConnectWithoutFiatCurrencyInput[]
    createMany?: FiatWalletCreateManyFiatCurrencyInputEnvelope
    connect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutFiatCurrencyInput = {
    create?: XOR<TransactionCreateWithoutFiatCurrencyInput, TransactionUncheckedCreateWithoutFiatCurrencyInput> | TransactionCreateWithoutFiatCurrencyInput[] | TransactionUncheckedCreateWithoutFiatCurrencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFiatCurrencyInput | TransactionCreateOrConnectWithoutFiatCurrencyInput[]
    createMany?: TransactionCreateManyFiatCurrencyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FiatWalletUncheckedCreateNestedManyWithoutFiatCurrencyInput = {
    create?: XOR<FiatWalletCreateWithoutFiatCurrencyInput, FiatWalletUncheckedCreateWithoutFiatCurrencyInput> | FiatWalletCreateWithoutFiatCurrencyInput[] | FiatWalletUncheckedCreateWithoutFiatCurrencyInput[]
    connectOrCreate?: FiatWalletCreateOrConnectWithoutFiatCurrencyInput | FiatWalletCreateOrConnectWithoutFiatCurrencyInput[]
    createMany?: FiatWalletCreateManyFiatCurrencyInputEnvelope
    connect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutFiatCurrencyInput = {
    create?: XOR<TransactionCreateWithoutFiatCurrencyInput, TransactionUncheckedCreateWithoutFiatCurrencyInput> | TransactionCreateWithoutFiatCurrencyInput[] | TransactionUncheckedCreateWithoutFiatCurrencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFiatCurrencyInput | TransactionCreateOrConnectWithoutFiatCurrencyInput[]
    createMany?: TransactionCreateManyFiatCurrencyInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type FiatWalletUpdateManyWithoutFiatCurrencyNestedInput = {
    create?: XOR<FiatWalletCreateWithoutFiatCurrencyInput, FiatWalletUncheckedCreateWithoutFiatCurrencyInput> | FiatWalletCreateWithoutFiatCurrencyInput[] | FiatWalletUncheckedCreateWithoutFiatCurrencyInput[]
    connectOrCreate?: FiatWalletCreateOrConnectWithoutFiatCurrencyInput | FiatWalletCreateOrConnectWithoutFiatCurrencyInput[]
    upsert?: FiatWalletUpsertWithWhereUniqueWithoutFiatCurrencyInput | FiatWalletUpsertWithWhereUniqueWithoutFiatCurrencyInput[]
    createMany?: FiatWalletCreateManyFiatCurrencyInputEnvelope
    set?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    disconnect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    delete?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    connect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    update?: FiatWalletUpdateWithWhereUniqueWithoutFiatCurrencyInput | FiatWalletUpdateWithWhereUniqueWithoutFiatCurrencyInput[]
    updateMany?: FiatWalletUpdateManyWithWhereWithoutFiatCurrencyInput | FiatWalletUpdateManyWithWhereWithoutFiatCurrencyInput[]
    deleteMany?: FiatWalletScalarWhereInput | FiatWalletScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutFiatCurrencyNestedInput = {
    create?: XOR<TransactionCreateWithoutFiatCurrencyInput, TransactionUncheckedCreateWithoutFiatCurrencyInput> | TransactionCreateWithoutFiatCurrencyInput[] | TransactionUncheckedCreateWithoutFiatCurrencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFiatCurrencyInput | TransactionCreateOrConnectWithoutFiatCurrencyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFiatCurrencyInput | TransactionUpsertWithWhereUniqueWithoutFiatCurrencyInput[]
    createMany?: TransactionCreateManyFiatCurrencyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFiatCurrencyInput | TransactionUpdateWithWhereUniqueWithoutFiatCurrencyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFiatCurrencyInput | TransactionUpdateManyWithWhereWithoutFiatCurrencyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type FiatWalletUncheckedUpdateManyWithoutFiatCurrencyNestedInput = {
    create?: XOR<FiatWalletCreateWithoutFiatCurrencyInput, FiatWalletUncheckedCreateWithoutFiatCurrencyInput> | FiatWalletCreateWithoutFiatCurrencyInput[] | FiatWalletUncheckedCreateWithoutFiatCurrencyInput[]
    connectOrCreate?: FiatWalletCreateOrConnectWithoutFiatCurrencyInput | FiatWalletCreateOrConnectWithoutFiatCurrencyInput[]
    upsert?: FiatWalletUpsertWithWhereUniqueWithoutFiatCurrencyInput | FiatWalletUpsertWithWhereUniqueWithoutFiatCurrencyInput[]
    createMany?: FiatWalletCreateManyFiatCurrencyInputEnvelope
    set?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    disconnect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    delete?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    connect?: FiatWalletWhereUniqueInput | FiatWalletWhereUniqueInput[]
    update?: FiatWalletUpdateWithWhereUniqueWithoutFiatCurrencyInput | FiatWalletUpdateWithWhereUniqueWithoutFiatCurrencyInput[]
    updateMany?: FiatWalletUpdateManyWithWhereWithoutFiatCurrencyInput | FiatWalletUpdateManyWithWhereWithoutFiatCurrencyInput[]
    deleteMany?: FiatWalletScalarWhereInput | FiatWalletScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutFiatCurrencyNestedInput = {
    create?: XOR<TransactionCreateWithoutFiatCurrencyInput, TransactionUncheckedCreateWithoutFiatCurrencyInput> | TransactionCreateWithoutFiatCurrencyInput[] | TransactionUncheckedCreateWithoutFiatCurrencyInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFiatCurrencyInput | TransactionCreateOrConnectWithoutFiatCurrencyInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFiatCurrencyInput | TransactionUpsertWithWhereUniqueWithoutFiatCurrencyInput[]
    createMany?: TransactionCreateManyFiatCurrencyInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFiatCurrencyInput | TransactionUpdateWithWhereUniqueWithoutFiatCurrencyInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFiatCurrencyInput | TransactionUpdateManyWithWhereWithoutFiatCurrencyInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCryptoWalletsInput = {
    create?: XOR<UserCreateWithoutCryptoWalletsInput, UserUncheckedCreateWithoutCryptoWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCryptoWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type CryptocurrencyCreateNestedOneWithoutCryptoWalletsInput = {
    create?: XOR<CryptocurrencyCreateWithoutCryptoWalletsInput, CryptocurrencyUncheckedCreateWithoutCryptoWalletsInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutCryptoWalletsInput
    connect?: CryptocurrencyWhereUniqueInput
  }

  export type TransferCreateNestedManyWithoutSenderWalletInput = {
    create?: XOR<TransferCreateWithoutSenderWalletInput, TransferUncheckedCreateWithoutSenderWalletInput> | TransferCreateWithoutSenderWalletInput[] | TransferUncheckedCreateWithoutSenderWalletInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutSenderWalletInput | TransferCreateOrConnectWithoutSenderWalletInput[]
    createMany?: TransferCreateManySenderWalletInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type TransferCreateNestedManyWithoutReceiverWalletInput = {
    create?: XOR<TransferCreateWithoutReceiverWalletInput, TransferUncheckedCreateWithoutReceiverWalletInput> | TransferCreateWithoutReceiverWalletInput[] | TransferUncheckedCreateWithoutReceiverWalletInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutReceiverWalletInput | TransferCreateOrConnectWithoutReceiverWalletInput[]
    createMany?: TransferCreateManyReceiverWalletInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type TransferUncheckedCreateNestedManyWithoutSenderWalletInput = {
    create?: XOR<TransferCreateWithoutSenderWalletInput, TransferUncheckedCreateWithoutSenderWalletInput> | TransferCreateWithoutSenderWalletInput[] | TransferUncheckedCreateWithoutSenderWalletInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutSenderWalletInput | TransferCreateOrConnectWithoutSenderWalletInput[]
    createMany?: TransferCreateManySenderWalletInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type TransferUncheckedCreateNestedManyWithoutReceiverWalletInput = {
    create?: XOR<TransferCreateWithoutReceiverWalletInput, TransferUncheckedCreateWithoutReceiverWalletInput> | TransferCreateWithoutReceiverWalletInput[] | TransferUncheckedCreateWithoutReceiverWalletInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutReceiverWalletInput | TransferCreateOrConnectWithoutReceiverWalletInput[]
    createMany?: TransferCreateManyReceiverWalletInputEnvelope
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutCryptoWalletsNestedInput = {
    create?: XOR<UserCreateWithoutCryptoWalletsInput, UserUncheckedCreateWithoutCryptoWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCryptoWalletsInput
    upsert?: UserUpsertWithoutCryptoWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCryptoWalletsInput, UserUpdateWithoutCryptoWalletsInput>, UserUncheckedUpdateWithoutCryptoWalletsInput>
  }

  export type CryptocurrencyUpdateOneRequiredWithoutCryptoWalletsNestedInput = {
    create?: XOR<CryptocurrencyCreateWithoutCryptoWalletsInput, CryptocurrencyUncheckedCreateWithoutCryptoWalletsInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutCryptoWalletsInput
    upsert?: CryptocurrencyUpsertWithoutCryptoWalletsInput
    connect?: CryptocurrencyWhereUniqueInput
    update?: XOR<XOR<CryptocurrencyUpdateToOneWithWhereWithoutCryptoWalletsInput, CryptocurrencyUpdateWithoutCryptoWalletsInput>, CryptocurrencyUncheckedUpdateWithoutCryptoWalletsInput>
  }

  export type TransferUpdateManyWithoutSenderWalletNestedInput = {
    create?: XOR<TransferCreateWithoutSenderWalletInput, TransferUncheckedCreateWithoutSenderWalletInput> | TransferCreateWithoutSenderWalletInput[] | TransferUncheckedCreateWithoutSenderWalletInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutSenderWalletInput | TransferCreateOrConnectWithoutSenderWalletInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutSenderWalletInput | TransferUpsertWithWhereUniqueWithoutSenderWalletInput[]
    createMany?: TransferCreateManySenderWalletInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutSenderWalletInput | TransferUpdateWithWhereUniqueWithoutSenderWalletInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutSenderWalletInput | TransferUpdateManyWithWhereWithoutSenderWalletInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type TransferUpdateManyWithoutReceiverWalletNestedInput = {
    create?: XOR<TransferCreateWithoutReceiverWalletInput, TransferUncheckedCreateWithoutReceiverWalletInput> | TransferCreateWithoutReceiverWalletInput[] | TransferUncheckedCreateWithoutReceiverWalletInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutReceiverWalletInput | TransferCreateOrConnectWithoutReceiverWalletInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutReceiverWalletInput | TransferUpsertWithWhereUniqueWithoutReceiverWalletInput[]
    createMany?: TransferCreateManyReceiverWalletInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutReceiverWalletInput | TransferUpdateWithWhereUniqueWithoutReceiverWalletInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutReceiverWalletInput | TransferUpdateManyWithWhereWithoutReceiverWalletInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type TransferUncheckedUpdateManyWithoutSenderWalletNestedInput = {
    create?: XOR<TransferCreateWithoutSenderWalletInput, TransferUncheckedCreateWithoutSenderWalletInput> | TransferCreateWithoutSenderWalletInput[] | TransferUncheckedCreateWithoutSenderWalletInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutSenderWalletInput | TransferCreateOrConnectWithoutSenderWalletInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutSenderWalletInput | TransferUpsertWithWhereUniqueWithoutSenderWalletInput[]
    createMany?: TransferCreateManySenderWalletInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutSenderWalletInput | TransferUpdateWithWhereUniqueWithoutSenderWalletInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutSenderWalletInput | TransferUpdateManyWithWhereWithoutSenderWalletInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type TransferUncheckedUpdateManyWithoutReceiverWalletNestedInput = {
    create?: XOR<TransferCreateWithoutReceiverWalletInput, TransferUncheckedCreateWithoutReceiverWalletInput> | TransferCreateWithoutReceiverWalletInput[] | TransferUncheckedCreateWithoutReceiverWalletInput[]
    connectOrCreate?: TransferCreateOrConnectWithoutReceiverWalletInput | TransferCreateOrConnectWithoutReceiverWalletInput[]
    upsert?: TransferUpsertWithWhereUniqueWithoutReceiverWalletInput | TransferUpsertWithWhereUniqueWithoutReceiverWalletInput[]
    createMany?: TransferCreateManyReceiverWalletInputEnvelope
    set?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    disconnect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    delete?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    connect?: TransferWhereUniqueInput | TransferWhereUniqueInput[]
    update?: TransferUpdateWithWhereUniqueWithoutReceiverWalletInput | TransferUpdateWithWhereUniqueWithoutReceiverWalletInput[]
    updateMany?: TransferUpdateManyWithWhereWithoutReceiverWalletInput | TransferUpdateManyWithWhereWithoutReceiverWalletInput[]
    deleteMany?: TransferScalarWhereInput | TransferScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFiatWalletsInput = {
    create?: XOR<UserCreateWithoutFiatWalletsInput, UserUncheckedCreateWithoutFiatWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFiatWalletsInput
    connect?: UserWhereUniqueInput
  }

  export type FiatCurrencyCreateNestedOneWithoutFiatWalletsInput = {
    create?: XOR<FiatCurrencyCreateWithoutFiatWalletsInput, FiatCurrencyUncheckedCreateWithoutFiatWalletsInput>
    connectOrCreate?: FiatCurrencyCreateOrConnectWithoutFiatWalletsInput
    connect?: FiatCurrencyWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFiatWalletsNestedInput = {
    create?: XOR<UserCreateWithoutFiatWalletsInput, UserUncheckedCreateWithoutFiatWalletsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFiatWalletsInput
    upsert?: UserUpsertWithoutFiatWalletsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFiatWalletsInput, UserUpdateWithoutFiatWalletsInput>, UserUncheckedUpdateWithoutFiatWalletsInput>
  }

  export type FiatCurrencyUpdateOneRequiredWithoutFiatWalletsNestedInput = {
    create?: XOR<FiatCurrencyCreateWithoutFiatWalletsInput, FiatCurrencyUncheckedCreateWithoutFiatWalletsInput>
    connectOrCreate?: FiatCurrencyCreateOrConnectWithoutFiatWalletsInput
    upsert?: FiatCurrencyUpsertWithoutFiatWalletsInput
    connect?: FiatCurrencyWhereUniqueInput
    update?: XOR<XOR<FiatCurrencyUpdateToOneWithWhereWithoutFiatWalletsInput, FiatCurrencyUpdateWithoutFiatWalletsInput>, FiatCurrencyUncheckedUpdateWithoutFiatWalletsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type CryptocurrencyCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CryptocurrencyCreateWithoutTransactionsInput, CryptocurrencyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutTransactionsInput
    connect?: CryptocurrencyWhereUniqueInput
  }

  export type FiatCurrencyCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<FiatCurrencyCreateWithoutTransactionsInput, FiatCurrencyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FiatCurrencyCreateOrConnectWithoutTransactionsInput
    connect?: FiatCurrencyWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type CryptocurrencyUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CryptocurrencyCreateWithoutTransactionsInput, CryptocurrencyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CryptocurrencyCreateOrConnectWithoutTransactionsInput
    upsert?: CryptocurrencyUpsertWithoutTransactionsInput
    connect?: CryptocurrencyWhereUniqueInput
    update?: XOR<XOR<CryptocurrencyUpdateToOneWithWhereWithoutTransactionsInput, CryptocurrencyUpdateWithoutTransactionsInput>, CryptocurrencyUncheckedUpdateWithoutTransactionsInput>
  }

  export type FiatCurrencyUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<FiatCurrencyCreateWithoutTransactionsInput, FiatCurrencyUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FiatCurrencyCreateOrConnectWithoutTransactionsInput
    upsert?: FiatCurrencyUpsertWithoutTransactionsInput
    connect?: FiatCurrencyWhereUniqueInput
    update?: XOR<XOR<FiatCurrencyUpdateToOneWithWhereWithoutTransactionsInput, FiatCurrencyUpdateWithoutTransactionsInput>, FiatCurrencyUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutTransfersInput = {
    create?: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransfersInput
    connect?: UserWhereUniqueInput
  }

  export type CryptoWalletCreateNestedOneWithoutTransfersFromInput = {
    create?: XOR<CryptoWalletCreateWithoutTransfersFromInput, CryptoWalletUncheckedCreateWithoutTransfersFromInput>
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutTransfersFromInput
    connect?: CryptoWalletWhereUniqueInput
  }

  export type CryptoWalletCreateNestedOneWithoutTransfersToInput = {
    create?: XOR<CryptoWalletCreateWithoutTransfersToInput, CryptoWalletUncheckedCreateWithoutTransfersToInput>
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutTransfersToInput
    connect?: CryptoWalletWhereUniqueInput
  }

  export type ExternalTransferCreateNestedOneWithoutTransferInput = {
    create?: XOR<ExternalTransferCreateWithoutTransferInput, ExternalTransferUncheckedCreateWithoutTransferInput>
    connectOrCreate?: ExternalTransferCreateOrConnectWithoutTransferInput
    connect?: ExternalTransferWhereUniqueInput
  }

  export type ExternalTransferUncheckedCreateNestedOneWithoutTransferInput = {
    create?: XOR<ExternalTransferCreateWithoutTransferInput, ExternalTransferUncheckedCreateWithoutTransferInput>
    connectOrCreate?: ExternalTransferCreateOrConnectWithoutTransferInput
    connect?: ExternalTransferWhereUniqueInput
  }

  export type EnumTransferTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransferType
  }

  export type UserUpdateOneRequiredWithoutTransfersNestedInput = {
    create?: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransfersInput
    upsert?: UserUpsertWithoutTransfersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransfersInput, UserUpdateWithoutTransfersInput>, UserUncheckedUpdateWithoutTransfersInput>
  }

  export type CryptoWalletUpdateOneRequiredWithoutTransfersFromNestedInput = {
    create?: XOR<CryptoWalletCreateWithoutTransfersFromInput, CryptoWalletUncheckedCreateWithoutTransfersFromInput>
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutTransfersFromInput
    upsert?: CryptoWalletUpsertWithoutTransfersFromInput
    connect?: CryptoWalletWhereUniqueInput
    update?: XOR<XOR<CryptoWalletUpdateToOneWithWhereWithoutTransfersFromInput, CryptoWalletUpdateWithoutTransfersFromInput>, CryptoWalletUncheckedUpdateWithoutTransfersFromInput>
  }

  export type CryptoWalletUpdateOneRequiredWithoutTransfersToNestedInput = {
    create?: XOR<CryptoWalletCreateWithoutTransfersToInput, CryptoWalletUncheckedCreateWithoutTransfersToInput>
    connectOrCreate?: CryptoWalletCreateOrConnectWithoutTransfersToInput
    upsert?: CryptoWalletUpsertWithoutTransfersToInput
    connect?: CryptoWalletWhereUniqueInput
    update?: XOR<XOR<CryptoWalletUpdateToOneWithWhereWithoutTransfersToInput, CryptoWalletUpdateWithoutTransfersToInput>, CryptoWalletUncheckedUpdateWithoutTransfersToInput>
  }

  export type ExternalTransferUpdateOneWithoutTransferNestedInput = {
    create?: XOR<ExternalTransferCreateWithoutTransferInput, ExternalTransferUncheckedCreateWithoutTransferInput>
    connectOrCreate?: ExternalTransferCreateOrConnectWithoutTransferInput
    upsert?: ExternalTransferUpsertWithoutTransferInput
    disconnect?: ExternalTransferWhereInput | boolean
    delete?: ExternalTransferWhereInput | boolean
    connect?: ExternalTransferWhereUniqueInput
    update?: XOR<XOR<ExternalTransferUpdateToOneWithWhereWithoutTransferInput, ExternalTransferUpdateWithoutTransferInput>, ExternalTransferUncheckedUpdateWithoutTransferInput>
  }

  export type ExternalTransferUncheckedUpdateOneWithoutTransferNestedInput = {
    create?: XOR<ExternalTransferCreateWithoutTransferInput, ExternalTransferUncheckedCreateWithoutTransferInput>
    connectOrCreate?: ExternalTransferCreateOrConnectWithoutTransferInput
    upsert?: ExternalTransferUpsertWithoutTransferInput
    disconnect?: ExternalTransferWhereInput | boolean
    delete?: ExternalTransferWhereInput | boolean
    connect?: ExternalTransferWhereUniqueInput
    update?: XOR<XOR<ExternalTransferUpdateToOneWithWhereWithoutTransferInput, ExternalTransferUpdateWithoutTransferInput>, ExternalTransferUncheckedUpdateWithoutTransferInput>
  }

  export type TransferCreateNestedOneWithoutExternalTransferInput = {
    create?: XOR<TransferCreateWithoutExternalTransferInput, TransferUncheckedCreateWithoutExternalTransferInput>
    connectOrCreate?: TransferCreateOrConnectWithoutExternalTransferInput
    connect?: TransferWhereUniqueInput
  }

  export type TransferUpdateOneRequiredWithoutExternalTransferNestedInput = {
    create?: XOR<TransferCreateWithoutExternalTransferInput, TransferUncheckedCreateWithoutExternalTransferInput>
    connectOrCreate?: TransferCreateOrConnectWithoutExternalTransferInput
    upsert?: TransferUpsertWithoutExternalTransferInput
    connect?: TransferWhereUniqueInput
    update?: XOR<XOR<TransferUpdateToOneWithWhereWithoutExternalTransferInput, TransferUpdateWithoutExternalTransferInput>, TransferUncheckedUpdateWithoutExternalTransferInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransferTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferType | EnumTransferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransferType[]
    notIn?: $Enums.TransferType[]
    not?: NestedEnumTransferTypeFilter<$PrismaModel> | $Enums.TransferType
  }

  export type NestedEnumTransferTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferType | EnumTransferTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransferType[]
    notIn?: $Enums.TransferType[]
    not?: NestedEnumTransferTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransferType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransferTypeFilter<$PrismaModel>
    _max?: NestedEnumTransferTypeFilter<$PrismaModel>
  }

  export type CryptoWalletCreateWithoutUserInput = {
    balance?: number
    cryptocurrency: CryptocurrencyCreateNestedOneWithoutCryptoWalletsInput
    transfersFrom?: TransferCreateNestedManyWithoutSenderWalletInput
    transfersTo?: TransferCreateNestedManyWithoutReceiverWalletInput
  }

  export type CryptoWalletUncheckedCreateWithoutUserInput = {
    id?: number
    cryptoId: number
    balance?: number
    transfersFrom?: TransferUncheckedCreateNestedManyWithoutSenderWalletInput
    transfersTo?: TransferUncheckedCreateNestedManyWithoutReceiverWalletInput
  }

  export type CryptoWalletCreateOrConnectWithoutUserInput = {
    where: CryptoWalletWhereUniqueInput
    create: XOR<CryptoWalletCreateWithoutUserInput, CryptoWalletUncheckedCreateWithoutUserInput>
  }

  export type CryptoWalletCreateManyUserInputEnvelope = {
    data: CryptoWalletCreateManyUserInput | CryptoWalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FiatWalletCreateWithoutUserInput = {
    balance?: number
    fiatCurrency: FiatCurrencyCreateNestedOneWithoutFiatWalletsInput
  }

  export type FiatWalletUncheckedCreateWithoutUserInput = {
    id?: number
    fiatId: number
    balance?: number
  }

  export type FiatWalletCreateOrConnectWithoutUserInput = {
    where: FiatWalletWhereUniqueInput
    create: XOR<FiatWalletCreateWithoutUserInput, FiatWalletUncheckedCreateWithoutUserInput>
  }

  export type FiatWalletCreateManyUserInputEnvelope = {
    data: FiatWalletCreateManyUserInput | FiatWalletCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
    cryptocurrency: CryptocurrencyCreateNestedOneWithoutTransactionsInput
    fiatCurrency: FiatCurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    cryptoId: number
    fiatId: number
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransferCreateWithoutUserInput = {
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
    senderWallet: CryptoWalletCreateNestedOneWithoutTransfersFromInput
    receiverWallet: CryptoWalletCreateNestedOneWithoutTransfersToInput
    externalTransfer?: ExternalTransferCreateNestedOneWithoutTransferInput
  }

  export type TransferUncheckedCreateWithoutUserInput = {
    id?: number
    senderWalletId: number
    receiverWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
    externalTransfer?: ExternalTransferUncheckedCreateNestedOneWithoutTransferInput
  }

  export type TransferCreateOrConnectWithoutUserInput = {
    where: TransferWhereUniqueInput
    create: XOR<TransferCreateWithoutUserInput, TransferUncheckedCreateWithoutUserInput>
  }

  export type TransferCreateManyUserInputEnvelope = {
    data: TransferCreateManyUserInput | TransferCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CryptoWalletUpsertWithWhereUniqueWithoutUserInput = {
    where: CryptoWalletWhereUniqueInput
    update: XOR<CryptoWalletUpdateWithoutUserInput, CryptoWalletUncheckedUpdateWithoutUserInput>
    create: XOR<CryptoWalletCreateWithoutUserInput, CryptoWalletUncheckedCreateWithoutUserInput>
  }

  export type CryptoWalletUpdateWithWhereUniqueWithoutUserInput = {
    where: CryptoWalletWhereUniqueInput
    data: XOR<CryptoWalletUpdateWithoutUserInput, CryptoWalletUncheckedUpdateWithoutUserInput>
  }

  export type CryptoWalletUpdateManyWithWhereWithoutUserInput = {
    where: CryptoWalletScalarWhereInput
    data: XOR<CryptoWalletUpdateManyMutationInput, CryptoWalletUncheckedUpdateManyWithoutUserInput>
  }

  export type CryptoWalletScalarWhereInput = {
    AND?: CryptoWalletScalarWhereInput | CryptoWalletScalarWhereInput[]
    OR?: CryptoWalletScalarWhereInput[]
    NOT?: CryptoWalletScalarWhereInput | CryptoWalletScalarWhereInput[]
    id?: IntFilter<"CryptoWallet"> | number
    userId?: IntFilter<"CryptoWallet"> | number
    cryptoId?: IntFilter<"CryptoWallet"> | number
    balance?: FloatFilter<"CryptoWallet"> | number
  }

  export type FiatWalletUpsertWithWhereUniqueWithoutUserInput = {
    where: FiatWalletWhereUniqueInput
    update: XOR<FiatWalletUpdateWithoutUserInput, FiatWalletUncheckedUpdateWithoutUserInput>
    create: XOR<FiatWalletCreateWithoutUserInput, FiatWalletUncheckedCreateWithoutUserInput>
  }

  export type FiatWalletUpdateWithWhereUniqueWithoutUserInput = {
    where: FiatWalletWhereUniqueInput
    data: XOR<FiatWalletUpdateWithoutUserInput, FiatWalletUncheckedUpdateWithoutUserInput>
  }

  export type FiatWalletUpdateManyWithWhereWithoutUserInput = {
    where: FiatWalletScalarWhereInput
    data: XOR<FiatWalletUpdateManyMutationInput, FiatWalletUncheckedUpdateManyWithoutUserInput>
  }

  export type FiatWalletScalarWhereInput = {
    AND?: FiatWalletScalarWhereInput | FiatWalletScalarWhereInput[]
    OR?: FiatWalletScalarWhereInput[]
    NOT?: FiatWalletScalarWhereInput | FiatWalletScalarWhereInput[]
    id?: IntFilter<"FiatWallet"> | number
    userId?: IntFilter<"FiatWallet"> | number
    fiatId?: IntFilter<"FiatWallet"> | number
    balance?: FloatFilter<"FiatWallet"> | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    cryptoId?: IntFilter<"Transaction"> | number
    fiatId?: IntFilter<"Transaction"> | number
    transactionType?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    price?: FloatFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type TransferUpsertWithWhereUniqueWithoutUserInput = {
    where: TransferWhereUniqueInput
    update: XOR<TransferUpdateWithoutUserInput, TransferUncheckedUpdateWithoutUserInput>
    create: XOR<TransferCreateWithoutUserInput, TransferUncheckedCreateWithoutUserInput>
  }

  export type TransferUpdateWithWhereUniqueWithoutUserInput = {
    where: TransferWhereUniqueInput
    data: XOR<TransferUpdateWithoutUserInput, TransferUncheckedUpdateWithoutUserInput>
  }

  export type TransferUpdateManyWithWhereWithoutUserInput = {
    where: TransferScalarWhereInput
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyWithoutUserInput>
  }

  export type TransferScalarWhereInput = {
    AND?: TransferScalarWhereInput | TransferScalarWhereInput[]
    OR?: TransferScalarWhereInput[]
    NOT?: TransferScalarWhereInput | TransferScalarWhereInput[]
    id?: IntFilter<"Transfer"> | number
    userId?: IntFilter<"Transfer"> | number
    senderWalletId?: IntFilter<"Transfer"> | number
    receiverWalletId?: IntFilter<"Transfer"> | number
    amount?: FloatFilter<"Transfer"> | number
    transferType?: EnumTransferTypeFilter<"Transfer"> | $Enums.TransferType
    createdAt?: DateTimeFilter<"Transfer"> | Date | string
  }

  export type CryptoWalletCreateWithoutCryptocurrencyInput = {
    balance?: number
    user: UserCreateNestedOneWithoutCryptoWalletsInput
    transfersFrom?: TransferCreateNestedManyWithoutSenderWalletInput
    transfersTo?: TransferCreateNestedManyWithoutReceiverWalletInput
  }

  export type CryptoWalletUncheckedCreateWithoutCryptocurrencyInput = {
    id?: number
    userId: number
    balance?: number
    transfersFrom?: TransferUncheckedCreateNestedManyWithoutSenderWalletInput
    transfersTo?: TransferUncheckedCreateNestedManyWithoutReceiverWalletInput
  }

  export type CryptoWalletCreateOrConnectWithoutCryptocurrencyInput = {
    where: CryptoWalletWhereUniqueInput
    create: XOR<CryptoWalletCreateWithoutCryptocurrencyInput, CryptoWalletUncheckedCreateWithoutCryptocurrencyInput>
  }

  export type CryptoWalletCreateManyCryptocurrencyInputEnvelope = {
    data: CryptoWalletCreateManyCryptocurrencyInput | CryptoWalletCreateManyCryptocurrencyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutCryptocurrencyInput = {
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    fiatCurrency: FiatCurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutCryptocurrencyInput = {
    id?: number
    userId: number
    fiatId: number
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCryptocurrencyInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCryptocurrencyInput, TransactionUncheckedCreateWithoutCryptocurrencyInput>
  }

  export type TransactionCreateManyCryptocurrencyInputEnvelope = {
    data: TransactionCreateManyCryptocurrencyInput | TransactionCreateManyCryptocurrencyInput[]
    skipDuplicates?: boolean
  }

  export type CryptoWalletUpsertWithWhereUniqueWithoutCryptocurrencyInput = {
    where: CryptoWalletWhereUniqueInput
    update: XOR<CryptoWalletUpdateWithoutCryptocurrencyInput, CryptoWalletUncheckedUpdateWithoutCryptocurrencyInput>
    create: XOR<CryptoWalletCreateWithoutCryptocurrencyInput, CryptoWalletUncheckedCreateWithoutCryptocurrencyInput>
  }

  export type CryptoWalletUpdateWithWhereUniqueWithoutCryptocurrencyInput = {
    where: CryptoWalletWhereUniqueInput
    data: XOR<CryptoWalletUpdateWithoutCryptocurrencyInput, CryptoWalletUncheckedUpdateWithoutCryptocurrencyInput>
  }

  export type CryptoWalletUpdateManyWithWhereWithoutCryptocurrencyInput = {
    where: CryptoWalletScalarWhereInput
    data: XOR<CryptoWalletUpdateManyMutationInput, CryptoWalletUncheckedUpdateManyWithoutCryptocurrencyInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutCryptocurrencyInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCryptocurrencyInput, TransactionUncheckedUpdateWithoutCryptocurrencyInput>
    create: XOR<TransactionCreateWithoutCryptocurrencyInput, TransactionUncheckedCreateWithoutCryptocurrencyInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCryptocurrencyInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCryptocurrencyInput, TransactionUncheckedUpdateWithoutCryptocurrencyInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCryptocurrencyInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCryptocurrencyInput>
  }

  export type FiatWalletCreateWithoutFiatCurrencyInput = {
    balance?: number
    user: UserCreateNestedOneWithoutFiatWalletsInput
  }

  export type FiatWalletUncheckedCreateWithoutFiatCurrencyInput = {
    id?: number
    userId: number
    balance?: number
  }

  export type FiatWalletCreateOrConnectWithoutFiatCurrencyInput = {
    where: FiatWalletWhereUniqueInput
    create: XOR<FiatWalletCreateWithoutFiatCurrencyInput, FiatWalletUncheckedCreateWithoutFiatCurrencyInput>
  }

  export type FiatWalletCreateManyFiatCurrencyInputEnvelope = {
    data: FiatWalletCreateManyFiatCurrencyInput | FiatWalletCreateManyFiatCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutFiatCurrencyInput = {
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    cryptocurrency: CryptocurrencyCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutFiatCurrencyInput = {
    id?: number
    userId: number
    cryptoId: number
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutFiatCurrencyInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutFiatCurrencyInput, TransactionUncheckedCreateWithoutFiatCurrencyInput>
  }

  export type TransactionCreateManyFiatCurrencyInputEnvelope = {
    data: TransactionCreateManyFiatCurrencyInput | TransactionCreateManyFiatCurrencyInput[]
    skipDuplicates?: boolean
  }

  export type FiatWalletUpsertWithWhereUniqueWithoutFiatCurrencyInput = {
    where: FiatWalletWhereUniqueInput
    update: XOR<FiatWalletUpdateWithoutFiatCurrencyInput, FiatWalletUncheckedUpdateWithoutFiatCurrencyInput>
    create: XOR<FiatWalletCreateWithoutFiatCurrencyInput, FiatWalletUncheckedCreateWithoutFiatCurrencyInput>
  }

  export type FiatWalletUpdateWithWhereUniqueWithoutFiatCurrencyInput = {
    where: FiatWalletWhereUniqueInput
    data: XOR<FiatWalletUpdateWithoutFiatCurrencyInput, FiatWalletUncheckedUpdateWithoutFiatCurrencyInput>
  }

  export type FiatWalletUpdateManyWithWhereWithoutFiatCurrencyInput = {
    where: FiatWalletScalarWhereInput
    data: XOR<FiatWalletUpdateManyMutationInput, FiatWalletUncheckedUpdateManyWithoutFiatCurrencyInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutFiatCurrencyInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutFiatCurrencyInput, TransactionUncheckedUpdateWithoutFiatCurrencyInput>
    create: XOR<TransactionCreateWithoutFiatCurrencyInput, TransactionUncheckedCreateWithoutFiatCurrencyInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutFiatCurrencyInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutFiatCurrencyInput, TransactionUncheckedUpdateWithoutFiatCurrencyInput>
  }

  export type TransactionUpdateManyWithWhereWithoutFiatCurrencyInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutFiatCurrencyInput>
  }

  export type UserCreateWithoutCryptoWalletsInput = {
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    fiatWallets?: FiatWalletCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    transfers?: TransferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCryptoWalletsInput = {
    id?: number
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    fiatWallets?: FiatWalletUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    transfers?: TransferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCryptoWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCryptoWalletsInput, UserUncheckedCreateWithoutCryptoWalletsInput>
  }

  export type CryptocurrencyCreateWithoutCryptoWalletsInput = {
    name: string
    symbol: string
    transactions?: TransactionCreateNestedManyWithoutCryptocurrencyInput
  }

  export type CryptocurrencyUncheckedCreateWithoutCryptoWalletsInput = {
    id?: number
    name: string
    symbol: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutCryptocurrencyInput
  }

  export type CryptocurrencyCreateOrConnectWithoutCryptoWalletsInput = {
    where: CryptocurrencyWhereUniqueInput
    create: XOR<CryptocurrencyCreateWithoutCryptoWalletsInput, CryptocurrencyUncheckedCreateWithoutCryptoWalletsInput>
  }

  export type TransferCreateWithoutSenderWalletInput = {
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransfersInput
    receiverWallet: CryptoWalletCreateNestedOneWithoutTransfersToInput
    externalTransfer?: ExternalTransferCreateNestedOneWithoutTransferInput
  }

  export type TransferUncheckedCreateWithoutSenderWalletInput = {
    id?: number
    userId: number
    receiverWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
    externalTransfer?: ExternalTransferUncheckedCreateNestedOneWithoutTransferInput
  }

  export type TransferCreateOrConnectWithoutSenderWalletInput = {
    where: TransferWhereUniqueInput
    create: XOR<TransferCreateWithoutSenderWalletInput, TransferUncheckedCreateWithoutSenderWalletInput>
  }

  export type TransferCreateManySenderWalletInputEnvelope = {
    data: TransferCreateManySenderWalletInput | TransferCreateManySenderWalletInput[]
    skipDuplicates?: boolean
  }

  export type TransferCreateWithoutReceiverWalletInput = {
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransfersInput
    senderWallet: CryptoWalletCreateNestedOneWithoutTransfersFromInput
    externalTransfer?: ExternalTransferCreateNestedOneWithoutTransferInput
  }

  export type TransferUncheckedCreateWithoutReceiverWalletInput = {
    id?: number
    userId: number
    senderWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
    externalTransfer?: ExternalTransferUncheckedCreateNestedOneWithoutTransferInput
  }

  export type TransferCreateOrConnectWithoutReceiverWalletInput = {
    where: TransferWhereUniqueInput
    create: XOR<TransferCreateWithoutReceiverWalletInput, TransferUncheckedCreateWithoutReceiverWalletInput>
  }

  export type TransferCreateManyReceiverWalletInputEnvelope = {
    data: TransferCreateManyReceiverWalletInput | TransferCreateManyReceiverWalletInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCryptoWalletsInput = {
    update: XOR<UserUpdateWithoutCryptoWalletsInput, UserUncheckedUpdateWithoutCryptoWalletsInput>
    create: XOR<UserCreateWithoutCryptoWalletsInput, UserUncheckedCreateWithoutCryptoWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCryptoWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCryptoWalletsInput, UserUncheckedUpdateWithoutCryptoWalletsInput>
  }

  export type UserUpdateWithoutCryptoWalletsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatWallets?: FiatWalletUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    transfers?: TransferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCryptoWalletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fiatWallets?: FiatWalletUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    transfers?: TransferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CryptocurrencyUpsertWithoutCryptoWalletsInput = {
    update: XOR<CryptocurrencyUpdateWithoutCryptoWalletsInput, CryptocurrencyUncheckedUpdateWithoutCryptoWalletsInput>
    create: XOR<CryptocurrencyCreateWithoutCryptoWalletsInput, CryptocurrencyUncheckedCreateWithoutCryptoWalletsInput>
    where?: CryptocurrencyWhereInput
  }

  export type CryptocurrencyUpdateToOneWithWhereWithoutCryptoWalletsInput = {
    where?: CryptocurrencyWhereInput
    data: XOR<CryptocurrencyUpdateWithoutCryptoWalletsInput, CryptocurrencyUncheckedUpdateWithoutCryptoWalletsInput>
  }

  export type CryptocurrencyUpdateWithoutCryptoWalletsInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutCryptocurrencyNestedInput
  }

  export type CryptocurrencyUncheckedUpdateWithoutCryptoWalletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutCryptocurrencyNestedInput
  }

  export type TransferUpsertWithWhereUniqueWithoutSenderWalletInput = {
    where: TransferWhereUniqueInput
    update: XOR<TransferUpdateWithoutSenderWalletInput, TransferUncheckedUpdateWithoutSenderWalletInput>
    create: XOR<TransferCreateWithoutSenderWalletInput, TransferUncheckedCreateWithoutSenderWalletInput>
  }

  export type TransferUpdateWithWhereUniqueWithoutSenderWalletInput = {
    where: TransferWhereUniqueInput
    data: XOR<TransferUpdateWithoutSenderWalletInput, TransferUncheckedUpdateWithoutSenderWalletInput>
  }

  export type TransferUpdateManyWithWhereWithoutSenderWalletInput = {
    where: TransferScalarWhereInput
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyWithoutSenderWalletInput>
  }

  export type TransferUpsertWithWhereUniqueWithoutReceiverWalletInput = {
    where: TransferWhereUniqueInput
    update: XOR<TransferUpdateWithoutReceiverWalletInput, TransferUncheckedUpdateWithoutReceiverWalletInput>
    create: XOR<TransferCreateWithoutReceiverWalletInput, TransferUncheckedCreateWithoutReceiverWalletInput>
  }

  export type TransferUpdateWithWhereUniqueWithoutReceiverWalletInput = {
    where: TransferWhereUniqueInput
    data: XOR<TransferUpdateWithoutReceiverWalletInput, TransferUncheckedUpdateWithoutReceiverWalletInput>
  }

  export type TransferUpdateManyWithWhereWithoutReceiverWalletInput = {
    where: TransferScalarWhereInput
    data: XOR<TransferUpdateManyMutationInput, TransferUncheckedUpdateManyWithoutReceiverWalletInput>
  }

  export type UserCreateWithoutFiatWalletsInput = {
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    cryptoWallets?: CryptoWalletCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    transfers?: TransferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFiatWalletsInput = {
    id?: number
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    cryptoWallets?: CryptoWalletUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    transfers?: TransferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFiatWalletsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFiatWalletsInput, UserUncheckedCreateWithoutFiatWalletsInput>
  }

  export type FiatCurrencyCreateWithoutFiatWalletsInput = {
    name: string
    symbol: string
    transactions?: TransactionCreateNestedManyWithoutFiatCurrencyInput
  }

  export type FiatCurrencyUncheckedCreateWithoutFiatWalletsInput = {
    id?: number
    name: string
    symbol: string
    transactions?: TransactionUncheckedCreateNestedManyWithoutFiatCurrencyInput
  }

  export type FiatCurrencyCreateOrConnectWithoutFiatWalletsInput = {
    where: FiatCurrencyWhereUniqueInput
    create: XOR<FiatCurrencyCreateWithoutFiatWalletsInput, FiatCurrencyUncheckedCreateWithoutFiatWalletsInput>
  }

  export type UserUpsertWithoutFiatWalletsInput = {
    update: XOR<UserUpdateWithoutFiatWalletsInput, UserUncheckedUpdateWithoutFiatWalletsInput>
    create: XOR<UserCreateWithoutFiatWalletsInput, UserUncheckedCreateWithoutFiatWalletsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFiatWalletsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFiatWalletsInput, UserUncheckedUpdateWithoutFiatWalletsInput>
  }

  export type UserUpdateWithoutFiatWalletsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptoWallets?: CryptoWalletUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    transfers?: TransferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFiatWalletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptoWallets?: CryptoWalletUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    transfers?: TransferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FiatCurrencyUpsertWithoutFiatWalletsInput = {
    update: XOR<FiatCurrencyUpdateWithoutFiatWalletsInput, FiatCurrencyUncheckedUpdateWithoutFiatWalletsInput>
    create: XOR<FiatCurrencyCreateWithoutFiatWalletsInput, FiatCurrencyUncheckedCreateWithoutFiatWalletsInput>
    where?: FiatCurrencyWhereInput
  }

  export type FiatCurrencyUpdateToOneWithWhereWithoutFiatWalletsInput = {
    where?: FiatCurrencyWhereInput
    data: XOR<FiatCurrencyUpdateWithoutFiatWalletsInput, FiatCurrencyUncheckedUpdateWithoutFiatWalletsInput>
  }

  export type FiatCurrencyUpdateWithoutFiatWalletsInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUpdateManyWithoutFiatCurrencyNestedInput
  }

  export type FiatCurrencyUncheckedUpdateWithoutFiatWalletsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    transactions?: TransactionUncheckedUpdateManyWithoutFiatCurrencyNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    cryptoWallets?: CryptoWalletCreateNestedManyWithoutUserInput
    fiatWallets?: FiatWalletCreateNestedManyWithoutUserInput
    transfers?: TransferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    cryptoWallets?: CryptoWalletUncheckedCreateNestedManyWithoutUserInput
    fiatWallets?: FiatWalletUncheckedCreateNestedManyWithoutUserInput
    transfers?: TransferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type CryptocurrencyCreateWithoutTransactionsInput = {
    name: string
    symbol: string
    cryptoWallets?: CryptoWalletCreateNestedManyWithoutCryptocurrencyInput
  }

  export type CryptocurrencyUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    symbol: string
    cryptoWallets?: CryptoWalletUncheckedCreateNestedManyWithoutCryptocurrencyInput
  }

  export type CryptocurrencyCreateOrConnectWithoutTransactionsInput = {
    where: CryptocurrencyWhereUniqueInput
    create: XOR<CryptocurrencyCreateWithoutTransactionsInput, CryptocurrencyUncheckedCreateWithoutTransactionsInput>
  }

  export type FiatCurrencyCreateWithoutTransactionsInput = {
    name: string
    symbol: string
    fiatWallets?: FiatWalletCreateNestedManyWithoutFiatCurrencyInput
  }

  export type FiatCurrencyUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    symbol: string
    fiatWallets?: FiatWalletUncheckedCreateNestedManyWithoutFiatCurrencyInput
  }

  export type FiatCurrencyCreateOrConnectWithoutTransactionsInput = {
    where: FiatCurrencyWhereUniqueInput
    create: XOR<FiatCurrencyCreateWithoutTransactionsInput, FiatCurrencyUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptoWallets?: CryptoWalletUpdateManyWithoutUserNestedInput
    fiatWallets?: FiatWalletUpdateManyWithoutUserNestedInput
    transfers?: TransferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptoWallets?: CryptoWalletUncheckedUpdateManyWithoutUserNestedInput
    fiatWallets?: FiatWalletUncheckedUpdateManyWithoutUserNestedInput
    transfers?: TransferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CryptocurrencyUpsertWithoutTransactionsInput = {
    update: XOR<CryptocurrencyUpdateWithoutTransactionsInput, CryptocurrencyUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CryptocurrencyCreateWithoutTransactionsInput, CryptocurrencyUncheckedCreateWithoutTransactionsInput>
    where?: CryptocurrencyWhereInput
  }

  export type CryptocurrencyUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CryptocurrencyWhereInput
    data: XOR<CryptocurrencyUpdateWithoutTransactionsInput, CryptocurrencyUncheckedUpdateWithoutTransactionsInput>
  }

  export type CryptocurrencyUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    cryptoWallets?: CryptoWalletUpdateManyWithoutCryptocurrencyNestedInput
  }

  export type CryptocurrencyUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    cryptoWallets?: CryptoWalletUncheckedUpdateManyWithoutCryptocurrencyNestedInput
  }

  export type FiatCurrencyUpsertWithoutTransactionsInput = {
    update: XOR<FiatCurrencyUpdateWithoutTransactionsInput, FiatCurrencyUncheckedUpdateWithoutTransactionsInput>
    create: XOR<FiatCurrencyCreateWithoutTransactionsInput, FiatCurrencyUncheckedCreateWithoutTransactionsInput>
    where?: FiatCurrencyWhereInput
  }

  export type FiatCurrencyUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: FiatCurrencyWhereInput
    data: XOR<FiatCurrencyUpdateWithoutTransactionsInput, FiatCurrencyUncheckedUpdateWithoutTransactionsInput>
  }

  export type FiatCurrencyUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fiatWallets?: FiatWalletUpdateManyWithoutFiatCurrencyNestedInput
  }

  export type FiatCurrencyUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    symbol?: StringFieldUpdateOperationsInput | string
    fiatWallets?: FiatWalletUncheckedUpdateManyWithoutFiatCurrencyNestedInput
  }

  export type UserCreateWithoutTransfersInput = {
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    cryptoWallets?: CryptoWalletCreateNestedManyWithoutUserInput
    fiatWallets?: FiatWalletCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransfersInput = {
    id?: number
    username: string
    password: string
    email: string
    fullName: string
    createdAt?: Date | string
    cryptoWallets?: CryptoWalletUncheckedCreateNestedManyWithoutUserInput
    fiatWallets?: FiatWalletUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransfersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
  }

  export type CryptoWalletCreateWithoutTransfersFromInput = {
    balance?: number
    user: UserCreateNestedOneWithoutCryptoWalletsInput
    cryptocurrency: CryptocurrencyCreateNestedOneWithoutCryptoWalletsInput
    transfersTo?: TransferCreateNestedManyWithoutReceiverWalletInput
  }

  export type CryptoWalletUncheckedCreateWithoutTransfersFromInput = {
    id?: number
    userId: number
    cryptoId: number
    balance?: number
    transfersTo?: TransferUncheckedCreateNestedManyWithoutReceiverWalletInput
  }

  export type CryptoWalletCreateOrConnectWithoutTransfersFromInput = {
    where: CryptoWalletWhereUniqueInput
    create: XOR<CryptoWalletCreateWithoutTransfersFromInput, CryptoWalletUncheckedCreateWithoutTransfersFromInput>
  }

  export type CryptoWalletCreateWithoutTransfersToInput = {
    balance?: number
    user: UserCreateNestedOneWithoutCryptoWalletsInput
    cryptocurrency: CryptocurrencyCreateNestedOneWithoutCryptoWalletsInput
    transfersFrom?: TransferCreateNestedManyWithoutSenderWalletInput
  }

  export type CryptoWalletUncheckedCreateWithoutTransfersToInput = {
    id?: number
    userId: number
    cryptoId: number
    balance?: number
    transfersFrom?: TransferUncheckedCreateNestedManyWithoutSenderWalletInput
  }

  export type CryptoWalletCreateOrConnectWithoutTransfersToInput = {
    where: CryptoWalletWhereUniqueInput
    create: XOR<CryptoWalletCreateWithoutTransfersToInput, CryptoWalletUncheckedCreateWithoutTransfersToInput>
  }

  export type ExternalTransferCreateWithoutTransferInput = {
    externalAddress: string
    createdAt?: Date | string
  }

  export type ExternalTransferUncheckedCreateWithoutTransferInput = {
    id?: number
    externalAddress: string
    createdAt?: Date | string
  }

  export type ExternalTransferCreateOrConnectWithoutTransferInput = {
    where: ExternalTransferWhereUniqueInput
    create: XOR<ExternalTransferCreateWithoutTransferInput, ExternalTransferUncheckedCreateWithoutTransferInput>
  }

  export type UserUpsertWithoutTransfersInput = {
    update: XOR<UserUpdateWithoutTransfersInput, UserUncheckedUpdateWithoutTransfersInput>
    create: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransfersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransfersInput, UserUncheckedUpdateWithoutTransfersInput>
  }

  export type UserUpdateWithoutTransfersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptoWallets?: CryptoWalletUpdateManyWithoutUserNestedInput
    fiatWallets?: FiatWalletUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransfersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptoWallets?: CryptoWalletUncheckedUpdateManyWithoutUserNestedInput
    fiatWallets?: FiatWalletUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CryptoWalletUpsertWithoutTransfersFromInput = {
    update: XOR<CryptoWalletUpdateWithoutTransfersFromInput, CryptoWalletUncheckedUpdateWithoutTransfersFromInput>
    create: XOR<CryptoWalletCreateWithoutTransfersFromInput, CryptoWalletUncheckedCreateWithoutTransfersFromInput>
    where?: CryptoWalletWhereInput
  }

  export type CryptoWalletUpdateToOneWithWhereWithoutTransfersFromInput = {
    where?: CryptoWalletWhereInput
    data: XOR<CryptoWalletUpdateWithoutTransfersFromInput, CryptoWalletUncheckedUpdateWithoutTransfersFromInput>
  }

  export type CryptoWalletUpdateWithoutTransfersFromInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCryptoWalletsNestedInput
    cryptocurrency?: CryptocurrencyUpdateOneRequiredWithoutCryptoWalletsNestedInput
    transfersTo?: TransferUpdateManyWithoutReceiverWalletNestedInput
  }

  export type CryptoWalletUncheckedUpdateWithoutTransfersFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    transfersTo?: TransferUncheckedUpdateManyWithoutReceiverWalletNestedInput
  }

  export type CryptoWalletUpsertWithoutTransfersToInput = {
    update: XOR<CryptoWalletUpdateWithoutTransfersToInput, CryptoWalletUncheckedUpdateWithoutTransfersToInput>
    create: XOR<CryptoWalletCreateWithoutTransfersToInput, CryptoWalletUncheckedCreateWithoutTransfersToInput>
    where?: CryptoWalletWhereInput
  }

  export type CryptoWalletUpdateToOneWithWhereWithoutTransfersToInput = {
    where?: CryptoWalletWhereInput
    data: XOR<CryptoWalletUpdateWithoutTransfersToInput, CryptoWalletUncheckedUpdateWithoutTransfersToInput>
  }

  export type CryptoWalletUpdateWithoutTransfersToInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCryptoWalletsNestedInput
    cryptocurrency?: CryptocurrencyUpdateOneRequiredWithoutCryptoWalletsNestedInput
    transfersFrom?: TransferUpdateManyWithoutSenderWalletNestedInput
  }

  export type CryptoWalletUncheckedUpdateWithoutTransfersToInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    transfersFrom?: TransferUncheckedUpdateManyWithoutSenderWalletNestedInput
  }

  export type ExternalTransferUpsertWithoutTransferInput = {
    update: XOR<ExternalTransferUpdateWithoutTransferInput, ExternalTransferUncheckedUpdateWithoutTransferInput>
    create: XOR<ExternalTransferCreateWithoutTransferInput, ExternalTransferUncheckedCreateWithoutTransferInput>
    where?: ExternalTransferWhereInput
  }

  export type ExternalTransferUpdateToOneWithWhereWithoutTransferInput = {
    where?: ExternalTransferWhereInput
    data: XOR<ExternalTransferUpdateWithoutTransferInput, ExternalTransferUncheckedUpdateWithoutTransferInput>
  }

  export type ExternalTransferUpdateWithoutTransferInput = {
    externalAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExternalTransferUncheckedUpdateWithoutTransferInput = {
    id?: IntFieldUpdateOperationsInput | number
    externalAddress?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferCreateWithoutExternalTransferInput = {
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTransfersInput
    senderWallet: CryptoWalletCreateNestedOneWithoutTransfersFromInput
    receiverWallet: CryptoWalletCreateNestedOneWithoutTransfersToInput
  }

  export type TransferUncheckedCreateWithoutExternalTransferInput = {
    id?: number
    userId: number
    senderWalletId: number
    receiverWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
  }

  export type TransferCreateOrConnectWithoutExternalTransferInput = {
    where: TransferWhereUniqueInput
    create: XOR<TransferCreateWithoutExternalTransferInput, TransferUncheckedCreateWithoutExternalTransferInput>
  }

  export type TransferUpsertWithoutExternalTransferInput = {
    update: XOR<TransferUpdateWithoutExternalTransferInput, TransferUncheckedUpdateWithoutExternalTransferInput>
    create: XOR<TransferCreateWithoutExternalTransferInput, TransferUncheckedCreateWithoutExternalTransferInput>
    where?: TransferWhereInput
  }

  export type TransferUpdateToOneWithWhereWithoutExternalTransferInput = {
    where?: TransferWhereInput
    data: XOR<TransferUpdateWithoutExternalTransferInput, TransferUncheckedUpdateWithoutExternalTransferInput>
  }

  export type TransferUpdateWithoutExternalTransferInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransfersNestedInput
    senderWallet?: CryptoWalletUpdateOneRequiredWithoutTransfersFromNestedInput
    receiverWallet?: CryptoWalletUpdateOneRequiredWithoutTransfersToNestedInput
  }

  export type TransferUncheckedUpdateWithoutExternalTransferInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    senderWalletId?: IntFieldUpdateOperationsInput | number
    receiverWalletId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoWalletCreateManyUserInput = {
    id?: number
    cryptoId: number
    balance?: number
  }

  export type FiatWalletCreateManyUserInput = {
    id?: number
    fiatId: number
    balance?: number
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    cryptoId: number
    fiatId: number
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
  }

  export type TransferCreateManyUserInput = {
    id?: number
    senderWalletId: number
    receiverWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
  }

  export type CryptoWalletUpdateWithoutUserInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    cryptocurrency?: CryptocurrencyUpdateOneRequiredWithoutCryptoWalletsNestedInput
    transfersFrom?: TransferUpdateManyWithoutSenderWalletNestedInput
    transfersTo?: TransferUpdateManyWithoutReceiverWalletNestedInput
  }

  export type CryptoWalletUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    transfersFrom?: TransferUncheckedUpdateManyWithoutSenderWalletNestedInput
    transfersTo?: TransferUncheckedUpdateManyWithoutReceiverWalletNestedInput
  }

  export type CryptoWalletUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type FiatWalletUpdateWithoutUserInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    fiatCurrency?: FiatCurrencyUpdateOneRequiredWithoutFiatWalletsNestedInput
  }

  export type FiatWalletUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type FiatWalletUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutUserInput = {
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cryptocurrency?: CryptocurrencyUpdateOneRequiredWithoutTransactionsNestedInput
    fiatCurrency?: FiatCurrencyUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderWallet?: CryptoWalletUpdateOneRequiredWithoutTransfersFromNestedInput
    receiverWallet?: CryptoWalletUpdateOneRequiredWithoutTransfersToNestedInput
    externalTransfer?: ExternalTransferUpdateOneWithoutTransferNestedInput
  }

  export type TransferUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderWalletId?: IntFieldUpdateOperationsInput | number
    receiverWalletId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalTransfer?: ExternalTransferUncheckedUpdateOneWithoutTransferNestedInput
  }

  export type TransferUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    senderWalletId?: IntFieldUpdateOperationsInput | number
    receiverWalletId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CryptoWalletCreateManyCryptocurrencyInput = {
    id?: number
    userId: number
    balance?: number
  }

  export type TransactionCreateManyCryptocurrencyInput = {
    id?: number
    userId: number
    fiatId: number
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
  }

  export type CryptoWalletUpdateWithoutCryptocurrencyInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutCryptoWalletsNestedInput
    transfersFrom?: TransferUpdateManyWithoutSenderWalletNestedInput
    transfersTo?: TransferUpdateManyWithoutReceiverWalletNestedInput
  }

  export type CryptoWalletUncheckedUpdateWithoutCryptocurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    transfersFrom?: TransferUncheckedUpdateManyWithoutSenderWalletNestedInput
    transfersTo?: TransferUncheckedUpdateManyWithoutReceiverWalletNestedInput
  }

  export type CryptoWalletUncheckedUpdateManyWithoutCryptocurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutCryptocurrencyInput = {
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    fiatCurrency?: FiatCurrencyUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCryptocurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCryptocurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    fiatId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FiatWalletCreateManyFiatCurrencyInput = {
    id?: number
    userId: number
    balance?: number
  }

  export type TransactionCreateManyFiatCurrencyInput = {
    id?: number
    userId: number
    cryptoId: number
    transactionType: $Enums.TransactionType
    amount: number
    price: number
    createdAt?: Date | string
  }

  export type FiatWalletUpdateWithoutFiatCurrencyInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutFiatWalletsNestedInput
  }

  export type FiatWalletUncheckedUpdateWithoutFiatCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type FiatWalletUncheckedUpdateManyWithoutFiatCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutFiatCurrencyInput = {
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    cryptocurrency?: CryptocurrencyUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutFiatCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutFiatCurrencyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cryptoId?: IntFieldUpdateOperationsInput | number
    transactionType?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferCreateManySenderWalletInput = {
    id?: number
    userId: number
    receiverWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
  }

  export type TransferCreateManyReceiverWalletInput = {
    id?: number
    userId: number
    senderWalletId: number
    amount: number
    transferType: $Enums.TransferType
    createdAt?: Date | string
  }

  export type TransferUpdateWithoutSenderWalletInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransfersNestedInput
    receiverWallet?: CryptoWalletUpdateOneRequiredWithoutTransfersToNestedInput
    externalTransfer?: ExternalTransferUpdateOneWithoutTransferNestedInput
  }

  export type TransferUncheckedUpdateWithoutSenderWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    receiverWalletId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalTransfer?: ExternalTransferUncheckedUpdateOneWithoutTransferNestedInput
  }

  export type TransferUncheckedUpdateManyWithoutSenderWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    receiverWalletId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransferUpdateWithoutReceiverWalletInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransfersNestedInput
    senderWallet?: CryptoWalletUpdateOneRequiredWithoutTransfersFromNestedInput
    externalTransfer?: ExternalTransferUpdateOneWithoutTransferNestedInput
  }

  export type TransferUncheckedUpdateWithoutReceiverWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    senderWalletId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    externalTransfer?: ExternalTransferUncheckedUpdateOneWithoutTransferNestedInput
  }

  export type TransferUncheckedUpdateManyWithoutReceiverWalletInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    senderWalletId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    transferType?: EnumTransferTypeFieldUpdateOperationsInput | $Enums.TransferType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CryptocurrencyCountOutputTypeDefaultArgs instead
     */
    export type CryptocurrencyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CryptocurrencyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FiatCurrencyCountOutputTypeDefaultArgs instead
     */
    export type FiatCurrencyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FiatCurrencyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CryptoWalletCountOutputTypeDefaultArgs instead
     */
    export type CryptoWalletCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CryptoWalletCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CryptocurrencyDefaultArgs instead
     */
    export type CryptocurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CryptocurrencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FiatCurrencyDefaultArgs instead
     */
    export type FiatCurrencyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FiatCurrencyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CryptoWalletDefaultArgs instead
     */
    export type CryptoWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CryptoWalletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FiatWalletDefaultArgs instead
     */
    export type FiatWalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FiatWalletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransferDefaultArgs instead
     */
    export type TransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransferDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExternalTransferDefaultArgs instead
     */
    export type ExternalTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExternalTransferDefaultArgs<ExtArgs>

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