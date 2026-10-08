import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly User: "User";
    readonly SeccionPagina: "SeccionPagina";
    readonly Docente: "Docente";
    readonly Administrativo: "Administrativo";
    readonly Auxiliar: "Auxiliar";
    readonly EstudianteAutoridad: "EstudianteAutoridad";
    readonly Convenio: "Convenio";
    readonly MateriaPregrado: "MateriaPregrado";
    readonly PlanEstudios: "PlanEstudios";
    readonly Incluye: "Incluye";
    readonly Convalida: "Convalida";
    readonly Convocatoria: "Convocatoria";
    readonly Programa: "Programa";
    readonly Modulo: "Modulo";
    readonly OrganizaPosgrado: "OrganizaPosgrado";
    readonly IncluyePosgrado: "IncluyePosgrado";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "seccionPagina" | "docente" | "administrativo" | "auxiliar" | "estudianteAutoridad" | "convenio" | "materiaPregrado" | "planEstudios" | "incluye" | "convalida" | "convocatoria" | "programa" | "modulo" | "organizaPosgrado" | "incluyePosgrado";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        SeccionPagina: {
            payload: Prisma.$SeccionPaginaPayload<ExtArgs>;
            fields: Prisma.SeccionPaginaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SeccionPaginaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SeccionPaginaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload>;
                };
                findFirst: {
                    args: Prisma.SeccionPaginaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SeccionPaginaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload>;
                };
                findMany: {
                    args: Prisma.SeccionPaginaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload>[];
                };
                create: {
                    args: Prisma.SeccionPaginaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload>;
                };
                createMany: {
                    args: Prisma.SeccionPaginaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SeccionPaginaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload>[];
                };
                delete: {
                    args: Prisma.SeccionPaginaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload>;
                };
                update: {
                    args: Prisma.SeccionPaginaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload>;
                };
                deleteMany: {
                    args: Prisma.SeccionPaginaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SeccionPaginaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SeccionPaginaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload>[];
                };
                upsert: {
                    args: Prisma.SeccionPaginaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeccionPaginaPayload>;
                };
                aggregate: {
                    args: Prisma.SeccionPaginaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSeccionPagina>;
                };
                groupBy: {
                    args: Prisma.SeccionPaginaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeccionPaginaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SeccionPaginaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeccionPaginaCountAggregateOutputType> | number;
                };
            };
        };
        Docente: {
            payload: Prisma.$DocentePayload<ExtArgs>;
            fields: Prisma.DocenteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DocenteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DocenteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload>;
                };
                findFirst: {
                    args: Prisma.DocenteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DocenteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload>;
                };
                findMany: {
                    args: Prisma.DocenteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload>[];
                };
                create: {
                    args: Prisma.DocenteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload>;
                };
                createMany: {
                    args: Prisma.DocenteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DocenteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload>[];
                };
                delete: {
                    args: Prisma.DocenteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload>;
                };
                update: {
                    args: Prisma.DocenteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload>;
                };
                deleteMany: {
                    args: Prisma.DocenteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DocenteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DocenteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload>[];
                };
                upsert: {
                    args: Prisma.DocenteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DocentePayload>;
                };
                aggregate: {
                    args: Prisma.DocenteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDocente>;
                };
                groupBy: {
                    args: Prisma.DocenteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocenteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DocenteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DocenteCountAggregateOutputType> | number;
                };
            };
        };
        Administrativo: {
            payload: Prisma.$AdministrativoPayload<ExtArgs>;
            fields: Prisma.AdministrativoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdministrativoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdministrativoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload>;
                };
                findFirst: {
                    args: Prisma.AdministrativoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdministrativoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload>;
                };
                findMany: {
                    args: Prisma.AdministrativoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload>[];
                };
                create: {
                    args: Prisma.AdministrativoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload>;
                };
                createMany: {
                    args: Prisma.AdministrativoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdministrativoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload>[];
                };
                delete: {
                    args: Prisma.AdministrativoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload>;
                };
                update: {
                    args: Prisma.AdministrativoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload>;
                };
                deleteMany: {
                    args: Prisma.AdministrativoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdministrativoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdministrativoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload>[];
                };
                upsert: {
                    args: Prisma.AdministrativoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdministrativoPayload>;
                };
                aggregate: {
                    args: Prisma.AdministrativoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdministrativo>;
                };
                groupBy: {
                    args: Prisma.AdministrativoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdministrativoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdministrativoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdministrativoCountAggregateOutputType> | number;
                };
            };
        };
        Auxiliar: {
            payload: Prisma.$AuxiliarPayload<ExtArgs>;
            fields: Prisma.AuxiliarFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuxiliarFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuxiliarFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload>;
                };
                findFirst: {
                    args: Prisma.AuxiliarFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuxiliarFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload>;
                };
                findMany: {
                    args: Prisma.AuxiliarFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload>[];
                };
                create: {
                    args: Prisma.AuxiliarCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload>;
                };
                createMany: {
                    args: Prisma.AuxiliarCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuxiliarCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload>[];
                };
                delete: {
                    args: Prisma.AuxiliarDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload>;
                };
                update: {
                    args: Prisma.AuxiliarUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload>;
                };
                deleteMany: {
                    args: Prisma.AuxiliarDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuxiliarUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuxiliarUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload>[];
                };
                upsert: {
                    args: Prisma.AuxiliarUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuxiliarPayload>;
                };
                aggregate: {
                    args: Prisma.AuxiliarAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuxiliar>;
                };
                groupBy: {
                    args: Prisma.AuxiliarGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuxiliarGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuxiliarCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuxiliarCountAggregateOutputType> | number;
                };
            };
        };
        EstudianteAutoridad: {
            payload: Prisma.$EstudianteAutoridadPayload<ExtArgs>;
            fields: Prisma.EstudianteAutoridadFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EstudianteAutoridadFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EstudianteAutoridadFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload>;
                };
                findFirst: {
                    args: Prisma.EstudianteAutoridadFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EstudianteAutoridadFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload>;
                };
                findMany: {
                    args: Prisma.EstudianteAutoridadFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload>[];
                };
                create: {
                    args: Prisma.EstudianteAutoridadCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload>;
                };
                createMany: {
                    args: Prisma.EstudianteAutoridadCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EstudianteAutoridadCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload>[];
                };
                delete: {
                    args: Prisma.EstudianteAutoridadDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload>;
                };
                update: {
                    args: Prisma.EstudianteAutoridadUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload>;
                };
                deleteMany: {
                    args: Prisma.EstudianteAutoridadDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EstudianteAutoridadUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EstudianteAutoridadUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload>[];
                };
                upsert: {
                    args: Prisma.EstudianteAutoridadUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EstudianteAutoridadPayload>;
                };
                aggregate: {
                    args: Prisma.EstudianteAutoridadAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEstudianteAutoridad>;
                };
                groupBy: {
                    args: Prisma.EstudianteAutoridadGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstudianteAutoridadGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EstudianteAutoridadCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EstudianteAutoridadCountAggregateOutputType> | number;
                };
            };
        };
        Convenio: {
            payload: Prisma.$ConvenioPayload<ExtArgs>;
            fields: Prisma.ConvenioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConvenioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConvenioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload>;
                };
                findFirst: {
                    args: Prisma.ConvenioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConvenioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload>;
                };
                findMany: {
                    args: Prisma.ConvenioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload>[];
                };
                create: {
                    args: Prisma.ConvenioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload>;
                };
                createMany: {
                    args: Prisma.ConvenioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConvenioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload>[];
                };
                delete: {
                    args: Prisma.ConvenioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload>;
                };
                update: {
                    args: Prisma.ConvenioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload>;
                };
                deleteMany: {
                    args: Prisma.ConvenioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConvenioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConvenioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload>[];
                };
                upsert: {
                    args: Prisma.ConvenioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvenioPayload>;
                };
                aggregate: {
                    args: Prisma.ConvenioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConvenio>;
                };
                groupBy: {
                    args: Prisma.ConvenioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConvenioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConvenioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConvenioCountAggregateOutputType> | number;
                };
            };
        };
        MateriaPregrado: {
            payload: Prisma.$MateriaPregradoPayload<ExtArgs>;
            fields: Prisma.MateriaPregradoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MateriaPregradoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MateriaPregradoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload>;
                };
                findFirst: {
                    args: Prisma.MateriaPregradoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MateriaPregradoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload>;
                };
                findMany: {
                    args: Prisma.MateriaPregradoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload>[];
                };
                create: {
                    args: Prisma.MateriaPregradoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload>;
                };
                createMany: {
                    args: Prisma.MateriaPregradoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MateriaPregradoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload>[];
                };
                delete: {
                    args: Prisma.MateriaPregradoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload>;
                };
                update: {
                    args: Prisma.MateriaPregradoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload>;
                };
                deleteMany: {
                    args: Prisma.MateriaPregradoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MateriaPregradoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MateriaPregradoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload>[];
                };
                upsert: {
                    args: Prisma.MateriaPregradoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MateriaPregradoPayload>;
                };
                aggregate: {
                    args: Prisma.MateriaPregradoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMateriaPregrado>;
                };
                groupBy: {
                    args: Prisma.MateriaPregradoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MateriaPregradoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MateriaPregradoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MateriaPregradoCountAggregateOutputType> | number;
                };
            };
        };
        PlanEstudios: {
            payload: Prisma.$PlanEstudiosPayload<ExtArgs>;
            fields: Prisma.PlanEstudiosFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PlanEstudiosFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PlanEstudiosFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload>;
                };
                findFirst: {
                    args: Prisma.PlanEstudiosFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PlanEstudiosFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload>;
                };
                findMany: {
                    args: Prisma.PlanEstudiosFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload>[];
                };
                create: {
                    args: Prisma.PlanEstudiosCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload>;
                };
                createMany: {
                    args: Prisma.PlanEstudiosCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PlanEstudiosCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload>[];
                };
                delete: {
                    args: Prisma.PlanEstudiosDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload>;
                };
                update: {
                    args: Prisma.PlanEstudiosUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload>;
                };
                deleteMany: {
                    args: Prisma.PlanEstudiosDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PlanEstudiosUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PlanEstudiosUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload>[];
                };
                upsert: {
                    args: Prisma.PlanEstudiosUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PlanEstudiosPayload>;
                };
                aggregate: {
                    args: Prisma.PlanEstudiosAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlanEstudios>;
                };
                groupBy: {
                    args: Prisma.PlanEstudiosGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanEstudiosGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PlanEstudiosCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanEstudiosCountAggregateOutputType> | number;
                };
            };
        };
        Incluye: {
            payload: Prisma.$IncluyePayload<ExtArgs>;
            fields: Prisma.IncluyeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IncluyeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IncluyeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload>;
                };
                findFirst: {
                    args: Prisma.IncluyeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IncluyeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload>;
                };
                findMany: {
                    args: Prisma.IncluyeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload>[];
                };
                create: {
                    args: Prisma.IncluyeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload>;
                };
                createMany: {
                    args: Prisma.IncluyeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IncluyeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload>[];
                };
                delete: {
                    args: Prisma.IncluyeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload>;
                };
                update: {
                    args: Prisma.IncluyeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload>;
                };
                deleteMany: {
                    args: Prisma.IncluyeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IncluyeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IncluyeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload>[];
                };
                upsert: {
                    args: Prisma.IncluyeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePayload>;
                };
                aggregate: {
                    args: Prisma.IncluyeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIncluye>;
                };
                groupBy: {
                    args: Prisma.IncluyeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncluyeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IncluyeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncluyeCountAggregateOutputType> | number;
                };
            };
        };
        Convalida: {
            payload: Prisma.$ConvalidaPayload<ExtArgs>;
            fields: Prisma.ConvalidaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConvalidaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConvalidaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload>;
                };
                findFirst: {
                    args: Prisma.ConvalidaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConvalidaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload>;
                };
                findMany: {
                    args: Prisma.ConvalidaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload>[];
                };
                create: {
                    args: Prisma.ConvalidaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload>;
                };
                createMany: {
                    args: Prisma.ConvalidaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConvalidaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload>[];
                };
                delete: {
                    args: Prisma.ConvalidaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload>;
                };
                update: {
                    args: Prisma.ConvalidaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload>;
                };
                deleteMany: {
                    args: Prisma.ConvalidaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConvalidaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConvalidaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload>[];
                };
                upsert: {
                    args: Prisma.ConvalidaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvalidaPayload>;
                };
                aggregate: {
                    args: Prisma.ConvalidaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConvalida>;
                };
                groupBy: {
                    args: Prisma.ConvalidaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConvalidaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConvalidaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConvalidaCountAggregateOutputType> | number;
                };
            };
        };
        Convocatoria: {
            payload: Prisma.$ConvocatoriaPayload<ExtArgs>;
            fields: Prisma.ConvocatoriaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConvocatoriaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConvocatoriaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload>;
                };
                findFirst: {
                    args: Prisma.ConvocatoriaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConvocatoriaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload>;
                };
                findMany: {
                    args: Prisma.ConvocatoriaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload>[];
                };
                create: {
                    args: Prisma.ConvocatoriaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload>;
                };
                createMany: {
                    args: Prisma.ConvocatoriaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConvocatoriaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload>[];
                };
                delete: {
                    args: Prisma.ConvocatoriaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload>;
                };
                update: {
                    args: Prisma.ConvocatoriaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload>;
                };
                deleteMany: {
                    args: Prisma.ConvocatoriaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConvocatoriaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConvocatoriaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload>[];
                };
                upsert: {
                    args: Prisma.ConvocatoriaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvocatoriaPayload>;
                };
                aggregate: {
                    args: Prisma.ConvocatoriaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConvocatoria>;
                };
                groupBy: {
                    args: Prisma.ConvocatoriaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConvocatoriaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConvocatoriaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConvocatoriaCountAggregateOutputType> | number;
                };
            };
        };
        Programa: {
            payload: Prisma.$ProgramaPayload<ExtArgs>;
            fields: Prisma.ProgramaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProgramaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProgramaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload>;
                };
                findFirst: {
                    args: Prisma.ProgramaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProgramaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload>;
                };
                findMany: {
                    args: Prisma.ProgramaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload>[];
                };
                create: {
                    args: Prisma.ProgramaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload>;
                };
                createMany: {
                    args: Prisma.ProgramaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProgramaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload>[];
                };
                delete: {
                    args: Prisma.ProgramaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload>;
                };
                update: {
                    args: Prisma.ProgramaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload>;
                };
                deleteMany: {
                    args: Prisma.ProgramaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProgramaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProgramaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload>[];
                };
                upsert: {
                    args: Prisma.ProgramaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProgramaPayload>;
                };
                aggregate: {
                    args: Prisma.ProgramaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrograma>;
                };
                groupBy: {
                    args: Prisma.ProgramaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProgramaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProgramaCountAggregateOutputType> | number;
                };
            };
        };
        Modulo: {
            payload: Prisma.$ModuloPayload<ExtArgs>;
            fields: Prisma.ModuloFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModuloFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModuloFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload>;
                };
                findFirst: {
                    args: Prisma.ModuloFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModuloFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload>;
                };
                findMany: {
                    args: Prisma.ModuloFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload>[];
                };
                create: {
                    args: Prisma.ModuloCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload>;
                };
                createMany: {
                    args: Prisma.ModuloCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ModuloCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload>[];
                };
                delete: {
                    args: Prisma.ModuloDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload>;
                };
                update: {
                    args: Prisma.ModuloUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload>;
                };
                deleteMany: {
                    args: Prisma.ModuloDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModuloUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ModuloUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload>[];
                };
                upsert: {
                    args: Prisma.ModuloUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModuloPayload>;
                };
                aggregate: {
                    args: Prisma.ModuloAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModulo>;
                };
                groupBy: {
                    args: Prisma.ModuloGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuloGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModuloCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuloCountAggregateOutputType> | number;
                };
            };
        };
        OrganizaPosgrado: {
            payload: Prisma.$OrganizaPosgradoPayload<ExtArgs>;
            fields: Prisma.OrganizaPosgradoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrganizaPosgradoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrganizaPosgradoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload>;
                };
                findFirst: {
                    args: Prisma.OrganizaPosgradoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrganizaPosgradoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload>;
                };
                findMany: {
                    args: Prisma.OrganizaPosgradoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload>[];
                };
                create: {
                    args: Prisma.OrganizaPosgradoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload>;
                };
                createMany: {
                    args: Prisma.OrganizaPosgradoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrganizaPosgradoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload>[];
                };
                delete: {
                    args: Prisma.OrganizaPosgradoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload>;
                };
                update: {
                    args: Prisma.OrganizaPosgradoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload>;
                };
                deleteMany: {
                    args: Prisma.OrganizaPosgradoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrganizaPosgradoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrganizaPosgradoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload>[];
                };
                upsert: {
                    args: Prisma.OrganizaPosgradoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrganizaPosgradoPayload>;
                };
                aggregate: {
                    args: Prisma.OrganizaPosgradoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrganizaPosgrado>;
                };
                groupBy: {
                    args: Prisma.OrganizaPosgradoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizaPosgradoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrganizaPosgradoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganizaPosgradoCountAggregateOutputType> | number;
                };
            };
        };
        IncluyePosgrado: {
            payload: Prisma.$IncluyePosgradoPayload<ExtArgs>;
            fields: Prisma.IncluyePosgradoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IncluyePosgradoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IncluyePosgradoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload>;
                };
                findFirst: {
                    args: Prisma.IncluyePosgradoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IncluyePosgradoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload>;
                };
                findMany: {
                    args: Prisma.IncluyePosgradoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload>[];
                };
                create: {
                    args: Prisma.IncluyePosgradoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload>;
                };
                createMany: {
                    args: Prisma.IncluyePosgradoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IncluyePosgradoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload>[];
                };
                delete: {
                    args: Prisma.IncluyePosgradoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload>;
                };
                update: {
                    args: Prisma.IncluyePosgradoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload>;
                };
                deleteMany: {
                    args: Prisma.IncluyePosgradoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IncluyePosgradoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IncluyePosgradoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload>[];
                };
                upsert: {
                    args: Prisma.IncluyePosgradoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IncluyePosgradoPayload>;
                };
                aggregate: {
                    args: Prisma.IncluyePosgradoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIncluyePosgrado>;
                };
                groupBy: {
                    args: Prisma.IncluyePosgradoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncluyePosgradoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IncluyePosgradoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IncluyePosgradoCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SeccionPaginaScalarFieldEnum: {
    readonly claveCampo: "claveCampo";
    readonly paginaSlug: "paginaSlug";
    readonly valor: "valor";
    readonly tipo: "tipo";
};
export type SeccionPaginaScalarFieldEnum = (typeof SeccionPaginaScalarFieldEnum)[keyof typeof SeccionPaginaScalarFieldEnum];
export declare const DocenteScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly gradoAcademico: "gradoAcademico";
    readonly tipo: "tipo";
    readonly resumenCv: "resumenCv";
    readonly correoInstitucional: "correoInstitucional";
    readonly cargoAutoridad: "cargoAutoridad";
    readonly imagen: "imagen";
};
export type DocenteScalarFieldEnum = (typeof DocenteScalarFieldEnum)[keyof typeof DocenteScalarFieldEnum];
export declare const AdministrativoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly cargo: "cargo";
    readonly correoInstitucional: "correoInstitucional";
    readonly foto: "foto";
};
export type AdministrativoScalarFieldEnum = (typeof AdministrativoScalarFieldEnum)[keyof typeof AdministrativoScalarFieldEnum];
export declare const AuxiliarScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly foto: "foto";
    readonly materia: "materia";
    readonly paralelo: "paralelo";
    readonly diasAuxiliatura: "diasAuxiliatura";
    readonly horarioAuxiliatura: "horarioAuxiliatura";
    readonly aula: "aula";
};
export type AuxiliarScalarFieldEnum = (typeof AuxiliarScalarFieldEnum)[keyof typeof AuxiliarScalarFieldEnum];
export declare const EstudianteAutoridadScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly cargo: "cargo";
    readonly imagen: "imagen";
};
export type EstudianteAutoridadScalarFieldEnum = (typeof EstudianteAutoridadScalarFieldEnum)[keyof typeof EstudianteAutoridadScalarFieldEnum];
export declare const ConvenioScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly descripcion: "descripcion";
    readonly sector: "sector";
};
export type ConvenioScalarFieldEnum = (typeof ConvenioScalarFieldEnum)[keyof typeof ConvenioScalarFieldEnum];
export declare const MateriaPregradoScalarFieldEnum: {
    readonly idMateriaAct: "idMateriaAct";
    readonly siglaMateriaAct: "siglaMateriaAct";
    readonly nombreMateriaAct: "nombreMateriaAct";
    readonly horasMateria: "horasMateria";
    readonly prerrequisitos: "prerrequisitos";
    readonly semestre: "semestre";
};
export type MateriaPregradoScalarFieldEnum = (typeof MateriaPregradoScalarFieldEnum)[keyof typeof MateriaPregradoScalarFieldEnum];
export declare const PlanEstudiosScalarFieldEnum: {
    readonly idPlanEstudio: "idPlanEstudio";
    readonly nombrePlan: "nombrePlan";
};
export type PlanEstudiosScalarFieldEnum = (typeof PlanEstudiosScalarFieldEnum)[keyof typeof PlanEstudiosScalarFieldEnum];
export declare const IncluyeScalarFieldEnum: {
    readonly idPlanEstudio: "idPlanEstudio";
    readonly idMateriaAct: "idMateriaAct";
};
export type IncluyeScalarFieldEnum = (typeof IncluyeScalarFieldEnum)[keyof typeof IncluyeScalarFieldEnum];
export declare const ConvalidaScalarFieldEnum: {
    readonly idMateriaAct: "idMateriaAct";
    readonly idMateriaAntigua: "idMateriaAntigua";
    readonly nombreMateriaAntigua: "nombreMateriaAntigua";
    readonly siglaMateriaAntigua: "siglaMateriaAntigua";
};
export type ConvalidaScalarFieldEnum = (typeof ConvalidaScalarFieldEnum)[keyof typeof ConvalidaScalarFieldEnum];
export declare const ConvocatoriaScalarFieldEnum: {
    readonly idConvocatoria: "idConvocatoria";
    readonly periodoConvocatoria: "periodoConvocatoria";
    readonly descConvocatoria: "descConvocatoria";
    readonly insPreu: "insPreu";
    readonly insPsa: "insPsa";
    readonly fechaEntregaDocs: "fechaEntregaDocs";
    readonly matriculacionKardex: "matriculacionKardex";
};
export type ConvocatoriaScalarFieldEnum = (typeof ConvocatoriaScalarFieldEnum)[keyof typeof ConvocatoriaScalarFieldEnum];
export declare const ProgramaScalarFieldEnum: {
    readonly idPrograma: "idPrograma";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly costo: "costo";
};
export type ProgramaScalarFieldEnum = (typeof ProgramaScalarFieldEnum)[keyof typeof ProgramaScalarFieldEnum];
export declare const ModuloScalarFieldEnum: {
    readonly idModulo: "idModulo";
    readonly tituloModulo: "tituloModulo";
    readonly numeroModulo: "numeroModulo";
};
export type ModuloScalarFieldEnum = (typeof ModuloScalarFieldEnum)[keyof typeof ModuloScalarFieldEnum];
export declare const OrganizaPosgradoScalarFieldEnum: {
    readonly idPrograma: "idPrograma";
    readonly idModulo: "idModulo";
};
export type OrganizaPosgradoScalarFieldEnum = (typeof OrganizaPosgradoScalarFieldEnum)[keyof typeof OrganizaPosgradoScalarFieldEnum];
export declare const IncluyePosgradoScalarFieldEnum: {
    readonly idModulo: "idModulo";
    readonly horasPresencial: "horasPresencial";
    readonly horasInvestigacion: "horasInvestigacion";
};
export type IncluyePosgradoScalarFieldEnum = (typeof IncluyePosgradoScalarFieldEnum)[keyof typeof IncluyePosgradoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    seccionPagina?: Prisma.SeccionPaginaOmit;
    docente?: Prisma.DocenteOmit;
    administrativo?: Prisma.AdministrativoOmit;
    auxiliar?: Prisma.AuxiliarOmit;
    estudianteAutoridad?: Prisma.EstudianteAutoridadOmit;
    convenio?: Prisma.ConvenioOmit;
    materiaPregrado?: Prisma.MateriaPregradoOmit;
    planEstudios?: Prisma.PlanEstudiosOmit;
    incluye?: Prisma.IncluyeOmit;
    convalida?: Prisma.ConvalidaOmit;
    convocatoria?: Prisma.ConvocatoriaOmit;
    programa?: Prisma.ProgramaOmit;
    modulo?: Prisma.ModuloOmit;
    organizaPosgrado?: Prisma.OrganizaPosgradoOmit;
    incluyePosgrado?: Prisma.IncluyePosgradoOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
