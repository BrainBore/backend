import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get user(): Prisma.UserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get seccionPagina(): Prisma.SeccionPaginaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get docente(): Prisma.DocenteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get administrativo(): Prisma.AdministrativoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auxiliar(): Prisma.AuxiliarDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get estudianteAutoridad(): Prisma.EstudianteAutoridadDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get convenio(): Prisma.ConvenioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get materiaPregrado(): Prisma.MateriaPregradoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get planEstudios(): Prisma.PlanEstudiosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get incluye(): Prisma.IncluyeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get convalida(): Prisma.ConvalidaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get convocatoria(): Prisma.ConvocatoriaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get programa(): Prisma.ProgramaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get modulo(): Prisma.ModuloDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get organizaPosgrado(): Prisma.OrganizaPosgradoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get incluyePosgrado(): Prisma.IncluyePosgradoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get directivoEstudiante(): Prisma.DirectivoEstudianteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get convocatoriaAuxiliatura(): Prisma.ConvocatoriaAuxiliaturaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pasantia(): Prisma.PasantiaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get publicacionesEstudiantiles(): Prisma.PublicacionesEstudiantilesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get matrizCientifica(): Prisma.MatrizCientificaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get autor(): Prisma.AutorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get libro(): Prisma.LibroDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get revista(): Prisma.RevistaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get documentoDigital(): Prisma.DocumentoDigitalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get tesis(): Prisma.TesisDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get bancoDatos(): Prisma.BancoDatosDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get datosArchivo(): Prisma.DatosArchivoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get noticia(): Prisma.NoticiaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get evento(): Prisma.EventoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
