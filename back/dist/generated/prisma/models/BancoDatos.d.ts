import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BancoDatosModel = runtime.Types.Result.DefaultSelection<Prisma.$BancoDatosPayload>;
export type AggregateBancoDatos = {
    _count: BancoDatosCountAggregateOutputType | null;
    _avg: BancoDatosAvgAggregateOutputType | null;
    _sum: BancoDatosSumAggregateOutputType | null;
    _min: BancoDatosMinAggregateOutputType | null;
    _max: BancoDatosMaxAggregateOutputType | null;
};
export type BancoDatosAvgAggregateOutputType = {
    id: number | null;
    anio: number | null;
};
export type BancoDatosSumAggregateOutputType = {
    id: number | null;
    anio: number | null;
};
export type BancoDatosMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    fuente: string | null;
    anio: number | null;
    resumen: string | null;
};
export type BancoDatosMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    tipo: string | null;
    fuente: string | null;
    anio: number | null;
    resumen: string | null;
};
export type BancoDatosCountAggregateOutputType = {
    id: number;
    titulo: number;
    tipo: number;
    fuente: number;
    anio: number;
    resumen: number;
    _all: number;
};
export type BancoDatosAvgAggregateInputType = {
    id?: true;
    anio?: true;
};
export type BancoDatosSumAggregateInputType = {
    id?: true;
    anio?: true;
};
export type BancoDatosMinAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    fuente?: true;
    anio?: true;
    resumen?: true;
};
export type BancoDatosMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    fuente?: true;
    anio?: true;
    resumen?: true;
};
export type BancoDatosCountAggregateInputType = {
    id?: true;
    titulo?: true;
    tipo?: true;
    fuente?: true;
    anio?: true;
    resumen?: true;
    _all?: true;
};
export type BancoDatosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BancoDatosWhereInput;
    orderBy?: Prisma.BancoDatosOrderByWithRelationInput | Prisma.BancoDatosOrderByWithRelationInput[];
    cursor?: Prisma.BancoDatosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BancoDatosCountAggregateInputType;
    _avg?: BancoDatosAvgAggregateInputType;
    _sum?: BancoDatosSumAggregateInputType;
    _min?: BancoDatosMinAggregateInputType;
    _max?: BancoDatosMaxAggregateInputType;
};
export type GetBancoDatosAggregateType<T extends BancoDatosAggregateArgs> = {
    [P in keyof T & keyof AggregateBancoDatos]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBancoDatos[P]> : Prisma.GetScalarType<T[P], AggregateBancoDatos[P]>;
};
export type BancoDatosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BancoDatosWhereInput;
    orderBy?: Prisma.BancoDatosOrderByWithAggregationInput | Prisma.BancoDatosOrderByWithAggregationInput[];
    by: Prisma.BancoDatosScalarFieldEnum[] | Prisma.BancoDatosScalarFieldEnum;
    having?: Prisma.BancoDatosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BancoDatosCountAggregateInputType | true;
    _avg?: BancoDatosAvgAggregateInputType;
    _sum?: BancoDatosSumAggregateInputType;
    _min?: BancoDatosMinAggregateInputType;
    _max?: BancoDatosMaxAggregateInputType;
};
export type BancoDatosGroupByOutputType = {
    id: number;
    titulo: string | null;
    tipo: string | null;
    fuente: string | null;
    anio: number | null;
    resumen: string | null;
    _count: BancoDatosCountAggregateOutputType | null;
    _avg: BancoDatosAvgAggregateOutputType | null;
    _sum: BancoDatosSumAggregateOutputType | null;
    _min: BancoDatosMinAggregateOutputType | null;
    _max: BancoDatosMaxAggregateOutputType | null;
};
export type GetBancoDatosGroupByPayload<T extends BancoDatosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BancoDatosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BancoDatosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BancoDatosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BancoDatosGroupByOutputType[P]>;
}>>;
export type BancoDatosWhereInput = {
    AND?: Prisma.BancoDatosWhereInput | Prisma.BancoDatosWhereInput[];
    OR?: Prisma.BancoDatosWhereInput[];
    NOT?: Prisma.BancoDatosWhereInput | Prisma.BancoDatosWhereInput[];
    id?: Prisma.IntFilter<"BancoDatos"> | number;
    titulo?: Prisma.StringNullableFilter<"BancoDatos"> | string | null;
    tipo?: Prisma.StringNullableFilter<"BancoDatos"> | string | null;
    fuente?: Prisma.StringNullableFilter<"BancoDatos"> | string | null;
    anio?: Prisma.IntNullableFilter<"BancoDatos"> | number | null;
    resumen?: Prisma.StringNullableFilter<"BancoDatos"> | string | null;
    archivos?: Prisma.DatosArchivoListRelationFilter;
};
export type BancoDatosOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fuente?: Prisma.SortOrderInput | Prisma.SortOrder;
    anio?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumen?: Prisma.SortOrderInput | Prisma.SortOrder;
    archivos?: Prisma.DatosArchivoOrderByRelationAggregateInput;
};
export type BancoDatosWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.BancoDatosWhereInput | Prisma.BancoDatosWhereInput[];
    OR?: Prisma.BancoDatosWhereInput[];
    NOT?: Prisma.BancoDatosWhereInput | Prisma.BancoDatosWhereInput[];
    titulo?: Prisma.StringNullableFilter<"BancoDatos"> | string | null;
    tipo?: Prisma.StringNullableFilter<"BancoDatos"> | string | null;
    fuente?: Prisma.StringNullableFilter<"BancoDatos"> | string | null;
    anio?: Prisma.IntNullableFilter<"BancoDatos"> | number | null;
    resumen?: Prisma.StringNullableFilter<"BancoDatos"> | string | null;
    archivos?: Prisma.DatosArchivoListRelationFilter;
}, "id">;
export type BancoDatosOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fuente?: Prisma.SortOrderInput | Prisma.SortOrder;
    anio?: Prisma.SortOrderInput | Prisma.SortOrder;
    resumen?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BancoDatosCountOrderByAggregateInput;
    _avg?: Prisma.BancoDatosAvgOrderByAggregateInput;
    _max?: Prisma.BancoDatosMaxOrderByAggregateInput;
    _min?: Prisma.BancoDatosMinOrderByAggregateInput;
    _sum?: Prisma.BancoDatosSumOrderByAggregateInput;
};
export type BancoDatosScalarWhereWithAggregatesInput = {
    AND?: Prisma.BancoDatosScalarWhereWithAggregatesInput | Prisma.BancoDatosScalarWhereWithAggregatesInput[];
    OR?: Prisma.BancoDatosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BancoDatosScalarWhereWithAggregatesInput | Prisma.BancoDatosScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"BancoDatos"> | number;
    titulo?: Prisma.StringNullableWithAggregatesFilter<"BancoDatos"> | string | null;
    tipo?: Prisma.StringNullableWithAggregatesFilter<"BancoDatos"> | string | null;
    fuente?: Prisma.StringNullableWithAggregatesFilter<"BancoDatos"> | string | null;
    anio?: Prisma.IntNullableWithAggregatesFilter<"BancoDatos"> | number | null;
    resumen?: Prisma.StringNullableWithAggregatesFilter<"BancoDatos"> | string | null;
};
export type BancoDatosCreateInput = {
    titulo?: string | null;
    tipo?: string | null;
    fuente?: string | null;
    anio?: number | null;
    resumen?: string | null;
    archivos?: Prisma.DatosArchivoCreateNestedManyWithoutBancoRelInput;
};
export type BancoDatosUncheckedCreateInput = {
    id?: number;
    titulo?: string | null;
    tipo?: string | null;
    fuente?: string | null;
    anio?: number | null;
    resumen?: string | null;
    archivos?: Prisma.DatosArchivoUncheckedCreateNestedManyWithoutBancoRelInput;
};
export type BancoDatosUpdateInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fuente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anio?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivos?: Prisma.DatosArchivoUpdateManyWithoutBancoRelNestedInput;
};
export type BancoDatosUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fuente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anio?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    archivos?: Prisma.DatosArchivoUncheckedUpdateManyWithoutBancoRelNestedInput;
};
export type BancoDatosCreateManyInput = {
    id?: number;
    titulo?: string | null;
    tipo?: string | null;
    fuente?: string | null;
    anio?: number | null;
    resumen?: string | null;
};
export type BancoDatosUpdateManyMutationInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fuente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anio?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BancoDatosUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fuente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anio?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BancoDatosCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fuente?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
};
export type BancoDatosAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
};
export type BancoDatosMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fuente?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
};
export type BancoDatosMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    fuente?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
    resumen?: Prisma.SortOrder;
};
export type BancoDatosSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
};
export type BancoDatosNullableScalarRelationFilter = {
    is?: Prisma.BancoDatosWhereInput | null;
    isNot?: Prisma.BancoDatosWhereInput | null;
};
export type BancoDatosCreateNestedOneWithoutArchivosInput = {
    create?: Prisma.XOR<Prisma.BancoDatosCreateWithoutArchivosInput, Prisma.BancoDatosUncheckedCreateWithoutArchivosInput>;
    connectOrCreate?: Prisma.BancoDatosCreateOrConnectWithoutArchivosInput;
    connect?: Prisma.BancoDatosWhereUniqueInput;
};
export type BancoDatosUpdateOneWithoutArchivosNestedInput = {
    create?: Prisma.XOR<Prisma.BancoDatosCreateWithoutArchivosInput, Prisma.BancoDatosUncheckedCreateWithoutArchivosInput>;
    connectOrCreate?: Prisma.BancoDatosCreateOrConnectWithoutArchivosInput;
    upsert?: Prisma.BancoDatosUpsertWithoutArchivosInput;
    disconnect?: Prisma.BancoDatosWhereInput | boolean;
    delete?: Prisma.BancoDatosWhereInput | boolean;
    connect?: Prisma.BancoDatosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BancoDatosUpdateToOneWithWhereWithoutArchivosInput, Prisma.BancoDatosUpdateWithoutArchivosInput>, Prisma.BancoDatosUncheckedUpdateWithoutArchivosInput>;
};
export type BancoDatosCreateWithoutArchivosInput = {
    titulo?: string | null;
    tipo?: string | null;
    fuente?: string | null;
    anio?: number | null;
    resumen?: string | null;
};
export type BancoDatosUncheckedCreateWithoutArchivosInput = {
    id?: number;
    titulo?: string | null;
    tipo?: string | null;
    fuente?: string | null;
    anio?: number | null;
    resumen?: string | null;
};
export type BancoDatosCreateOrConnectWithoutArchivosInput = {
    where: Prisma.BancoDatosWhereUniqueInput;
    create: Prisma.XOR<Prisma.BancoDatosCreateWithoutArchivosInput, Prisma.BancoDatosUncheckedCreateWithoutArchivosInput>;
};
export type BancoDatosUpsertWithoutArchivosInput = {
    update: Prisma.XOR<Prisma.BancoDatosUpdateWithoutArchivosInput, Prisma.BancoDatosUncheckedUpdateWithoutArchivosInput>;
    create: Prisma.XOR<Prisma.BancoDatosCreateWithoutArchivosInput, Prisma.BancoDatosUncheckedCreateWithoutArchivosInput>;
    where?: Prisma.BancoDatosWhereInput;
};
export type BancoDatosUpdateToOneWithWhereWithoutArchivosInput = {
    where?: Prisma.BancoDatosWhereInput;
    data: Prisma.XOR<Prisma.BancoDatosUpdateWithoutArchivosInput, Prisma.BancoDatosUncheckedUpdateWithoutArchivosInput>;
};
export type BancoDatosUpdateWithoutArchivosInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fuente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anio?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BancoDatosUncheckedUpdateWithoutArchivosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fuente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    anio?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    resumen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BancoDatosCountOutputType = {
    archivos: number;
};
export type BancoDatosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    archivos?: boolean | BancoDatosCountOutputTypeCountArchivosArgs;
};
export type BancoDatosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosCountOutputTypeSelect<ExtArgs> | null;
};
export type BancoDatosCountOutputTypeCountArchivosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DatosArchivoWhereInput;
};
export type BancoDatosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    fuente?: boolean;
    anio?: boolean;
    resumen?: boolean;
    archivos?: boolean | Prisma.BancoDatos$archivosArgs<ExtArgs>;
    _count?: boolean | Prisma.BancoDatosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bancoDatos"]>;
export type BancoDatosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    fuente?: boolean;
    anio?: boolean;
    resumen?: boolean;
}, ExtArgs["result"]["bancoDatos"]>;
export type BancoDatosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    fuente?: boolean;
    anio?: boolean;
    resumen?: boolean;
}, ExtArgs["result"]["bancoDatos"]>;
export type BancoDatosSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    tipo?: boolean;
    fuente?: boolean;
    anio?: boolean;
    resumen?: boolean;
};
export type BancoDatosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "tipo" | "fuente" | "anio" | "resumen", ExtArgs["result"]["bancoDatos"]>;
export type BancoDatosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    archivos?: boolean | Prisma.BancoDatos$archivosArgs<ExtArgs>;
    _count?: boolean | Prisma.BancoDatosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BancoDatosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type BancoDatosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $BancoDatosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BancoDatos";
    objects: {
        archivos: Prisma.$DatosArchivoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string | null;
        tipo: string | null;
        fuente: string | null;
        anio: number | null;
        resumen: string | null;
    }, ExtArgs["result"]["bancoDatos"]>;
    composites: {};
};
export type BancoDatosGetPayload<S extends boolean | null | undefined | BancoDatosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload, S>;
export type BancoDatosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BancoDatosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BancoDatosCountAggregateInputType | true;
};
export interface BancoDatosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BancoDatos'];
        meta: {
            name: 'BancoDatos';
        };
    };
    findUnique<T extends BancoDatosFindUniqueArgs>(args: Prisma.SelectSubset<T, BancoDatosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BancoDatosClient<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BancoDatosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BancoDatosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BancoDatosClient<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BancoDatosFindFirstArgs>(args?: Prisma.SelectSubset<T, BancoDatosFindFirstArgs<ExtArgs>>): Prisma.Prisma__BancoDatosClient<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BancoDatosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BancoDatosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BancoDatosClient<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BancoDatosFindManyArgs>(args?: Prisma.SelectSubset<T, BancoDatosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BancoDatosCreateArgs>(args: Prisma.SelectSubset<T, BancoDatosCreateArgs<ExtArgs>>): Prisma.Prisma__BancoDatosClient<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BancoDatosCreateManyArgs>(args?: Prisma.SelectSubset<T, BancoDatosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BancoDatosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BancoDatosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BancoDatosDeleteArgs>(args: Prisma.SelectSubset<T, BancoDatosDeleteArgs<ExtArgs>>): Prisma.Prisma__BancoDatosClient<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BancoDatosUpdateArgs>(args: Prisma.SelectSubset<T, BancoDatosUpdateArgs<ExtArgs>>): Prisma.Prisma__BancoDatosClient<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BancoDatosDeleteManyArgs>(args?: Prisma.SelectSubset<T, BancoDatosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BancoDatosUpdateManyArgs>(args: Prisma.SelectSubset<T, BancoDatosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BancoDatosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BancoDatosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BancoDatosUpsertArgs>(args: Prisma.SelectSubset<T, BancoDatosUpsertArgs<ExtArgs>>): Prisma.Prisma__BancoDatosClient<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BancoDatosCountArgs>(args?: Prisma.Subset<T, BancoDatosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BancoDatosCountAggregateOutputType> : number>;
    aggregate<T extends BancoDatosAggregateArgs>(args: Prisma.Subset<T, BancoDatosAggregateArgs>): Prisma.PrismaPromise<GetBancoDatosAggregateType<T>>;
    groupBy<T extends BancoDatosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BancoDatosGroupByArgs['orderBy'];
    } : {
        orderBy?: BancoDatosGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BancoDatosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBancoDatosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BancoDatosFieldRefs;
}
export interface Prisma__BancoDatosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    archivos<T extends Prisma.BancoDatos$archivosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BancoDatos$archivosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BancoDatosFieldRefs {
    readonly id: Prisma.FieldRef<"BancoDatos", 'Int'>;
    readonly titulo: Prisma.FieldRef<"BancoDatos", 'String'>;
    readonly tipo: Prisma.FieldRef<"BancoDatos", 'String'>;
    readonly fuente: Prisma.FieldRef<"BancoDatos", 'String'>;
    readonly anio: Prisma.FieldRef<"BancoDatos", 'Int'>;
    readonly resumen: Prisma.FieldRef<"BancoDatos", 'String'>;
}
export type BancoDatosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    where: Prisma.BancoDatosWhereUniqueInput;
};
export type BancoDatosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    where: Prisma.BancoDatosWhereUniqueInput;
};
export type BancoDatosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    where?: Prisma.BancoDatosWhereInput;
    orderBy?: Prisma.BancoDatosOrderByWithRelationInput | Prisma.BancoDatosOrderByWithRelationInput[];
    cursor?: Prisma.BancoDatosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BancoDatosScalarFieldEnum | Prisma.BancoDatosScalarFieldEnum[];
};
export type BancoDatosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    where?: Prisma.BancoDatosWhereInput;
    orderBy?: Prisma.BancoDatosOrderByWithRelationInput | Prisma.BancoDatosOrderByWithRelationInput[];
    cursor?: Prisma.BancoDatosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BancoDatosScalarFieldEnum | Prisma.BancoDatosScalarFieldEnum[];
};
export type BancoDatosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    where?: Prisma.BancoDatosWhereInput;
    orderBy?: Prisma.BancoDatosOrderByWithRelationInput | Prisma.BancoDatosOrderByWithRelationInput[];
    cursor?: Prisma.BancoDatosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BancoDatosScalarFieldEnum | Prisma.BancoDatosScalarFieldEnum[];
};
export type BancoDatosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.BancoDatosCreateInput, Prisma.BancoDatosUncheckedCreateInput>;
};
export type BancoDatosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BancoDatosCreateManyInput | Prisma.BancoDatosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BancoDatosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    data: Prisma.BancoDatosCreateManyInput | Prisma.BancoDatosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BancoDatosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BancoDatosUpdateInput, Prisma.BancoDatosUncheckedUpdateInput>;
    where: Prisma.BancoDatosWhereUniqueInput;
};
export type BancoDatosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BancoDatosUpdateManyMutationInput, Prisma.BancoDatosUncheckedUpdateManyInput>;
    where?: Prisma.BancoDatosWhereInput;
    limit?: number;
};
export type BancoDatosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BancoDatosUpdateManyMutationInput, Prisma.BancoDatosUncheckedUpdateManyInput>;
    where?: Prisma.BancoDatosWhereInput;
    limit?: number;
};
export type BancoDatosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    where: Prisma.BancoDatosWhereUniqueInput;
    create: Prisma.XOR<Prisma.BancoDatosCreateInput, Prisma.BancoDatosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BancoDatosUpdateInput, Prisma.BancoDatosUncheckedUpdateInput>;
};
export type BancoDatosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    where: Prisma.BancoDatosWhereUniqueInput;
};
export type BancoDatosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BancoDatosWhereInput;
    limit?: number;
};
export type BancoDatos$archivosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelect<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    include?: Prisma.DatosArchivoInclude<ExtArgs> | null;
    where?: Prisma.DatosArchivoWhereInput;
    orderBy?: Prisma.DatosArchivoOrderByWithRelationInput | Prisma.DatosArchivoOrderByWithRelationInput[];
    cursor?: Prisma.DatosArchivoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DatosArchivoScalarFieldEnum | Prisma.DatosArchivoScalarFieldEnum[];
};
export type BancoDatosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
};
