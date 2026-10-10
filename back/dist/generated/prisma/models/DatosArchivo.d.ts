import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DatosArchivoModel = runtime.Types.Result.DefaultSelection<Prisma.$DatosArchivoPayload>;
export type AggregateDatosArchivo = {
    _count: DatosArchivoCountAggregateOutputType | null;
    _avg: DatosArchivoAvgAggregateOutputType | null;
    _sum: DatosArchivoSumAggregateOutputType | null;
    _min: DatosArchivoMinAggregateOutputType | null;
    _max: DatosArchivoMaxAggregateOutputType | null;
};
export type DatosArchivoAvgAggregateOutputType = {
    id: number | null;
    idBancoDatos: number | null;
};
export type DatosArchivoSumAggregateOutputType = {
    id: number | null;
    idBancoDatos: number | null;
};
export type DatosArchivoMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    formato: string | null;
    peso: string | null;
    linkDescarga: string | null;
    idBancoDatos: number | null;
};
export type DatosArchivoMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    formato: string | null;
    peso: string | null;
    linkDescarga: string | null;
    idBancoDatos: number | null;
};
export type DatosArchivoCountAggregateOutputType = {
    id: number;
    titulo: number;
    formato: number;
    peso: number;
    linkDescarga: number;
    idBancoDatos: number;
    _all: number;
};
export type DatosArchivoAvgAggregateInputType = {
    id?: true;
    idBancoDatos?: true;
};
export type DatosArchivoSumAggregateInputType = {
    id?: true;
    idBancoDatos?: true;
};
export type DatosArchivoMinAggregateInputType = {
    id?: true;
    titulo?: true;
    formato?: true;
    peso?: true;
    linkDescarga?: true;
    idBancoDatos?: true;
};
export type DatosArchivoMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    formato?: true;
    peso?: true;
    linkDescarga?: true;
    idBancoDatos?: true;
};
export type DatosArchivoCountAggregateInputType = {
    id?: true;
    titulo?: true;
    formato?: true;
    peso?: true;
    linkDescarga?: true;
    idBancoDatos?: true;
    _all?: true;
};
export type DatosArchivoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DatosArchivoWhereInput;
    orderBy?: Prisma.DatosArchivoOrderByWithRelationInput | Prisma.DatosArchivoOrderByWithRelationInput[];
    cursor?: Prisma.DatosArchivoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DatosArchivoCountAggregateInputType;
    _avg?: DatosArchivoAvgAggregateInputType;
    _sum?: DatosArchivoSumAggregateInputType;
    _min?: DatosArchivoMinAggregateInputType;
    _max?: DatosArchivoMaxAggregateInputType;
};
export type GetDatosArchivoAggregateType<T extends DatosArchivoAggregateArgs> = {
    [P in keyof T & keyof AggregateDatosArchivo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDatosArchivo[P]> : Prisma.GetScalarType<T[P], AggregateDatosArchivo[P]>;
};
export type DatosArchivoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DatosArchivoWhereInput;
    orderBy?: Prisma.DatosArchivoOrderByWithAggregationInput | Prisma.DatosArchivoOrderByWithAggregationInput[];
    by: Prisma.DatosArchivoScalarFieldEnum[] | Prisma.DatosArchivoScalarFieldEnum;
    having?: Prisma.DatosArchivoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DatosArchivoCountAggregateInputType | true;
    _avg?: DatosArchivoAvgAggregateInputType;
    _sum?: DatosArchivoSumAggregateInputType;
    _min?: DatosArchivoMinAggregateInputType;
    _max?: DatosArchivoMaxAggregateInputType;
};
export type DatosArchivoGroupByOutputType = {
    id: number;
    titulo: string | null;
    formato: string | null;
    peso: string | null;
    linkDescarga: string | null;
    idBancoDatos: number | null;
    _count: DatosArchivoCountAggregateOutputType | null;
    _avg: DatosArchivoAvgAggregateOutputType | null;
    _sum: DatosArchivoSumAggregateOutputType | null;
    _min: DatosArchivoMinAggregateOutputType | null;
    _max: DatosArchivoMaxAggregateOutputType | null;
};
export type GetDatosArchivoGroupByPayload<T extends DatosArchivoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DatosArchivoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DatosArchivoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DatosArchivoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DatosArchivoGroupByOutputType[P]>;
}>>;
export type DatosArchivoWhereInput = {
    AND?: Prisma.DatosArchivoWhereInput | Prisma.DatosArchivoWhereInput[];
    OR?: Prisma.DatosArchivoWhereInput[];
    NOT?: Prisma.DatosArchivoWhereInput | Prisma.DatosArchivoWhereInput[];
    id?: Prisma.IntFilter<"DatosArchivo"> | number;
    titulo?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    formato?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    peso?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    linkDescarga?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    idBancoDatos?: Prisma.IntNullableFilter<"DatosArchivo"> | number | null;
    bancoRel?: Prisma.XOR<Prisma.BancoDatosNullableScalarRelationFilter, Prisma.BancoDatosWhereInput> | null;
};
export type DatosArchivoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    formato?: Prisma.SortOrderInput | Prisma.SortOrder;
    peso?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrderInput | Prisma.SortOrder;
    idBancoDatos?: Prisma.SortOrderInput | Prisma.SortOrder;
    bancoRel?: Prisma.BancoDatosOrderByWithRelationInput;
};
export type DatosArchivoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DatosArchivoWhereInput | Prisma.DatosArchivoWhereInput[];
    OR?: Prisma.DatosArchivoWhereInput[];
    NOT?: Prisma.DatosArchivoWhereInput | Prisma.DatosArchivoWhereInput[];
    titulo?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    formato?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    peso?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    linkDescarga?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    idBancoDatos?: Prisma.IntNullableFilter<"DatosArchivo"> | number | null;
    bancoRel?: Prisma.XOR<Prisma.BancoDatosNullableScalarRelationFilter, Prisma.BancoDatosWhereInput> | null;
}, "id">;
export type DatosArchivoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    formato?: Prisma.SortOrderInput | Prisma.SortOrder;
    peso?: Prisma.SortOrderInput | Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrderInput | Prisma.SortOrder;
    idBancoDatos?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.DatosArchivoCountOrderByAggregateInput;
    _avg?: Prisma.DatosArchivoAvgOrderByAggregateInput;
    _max?: Prisma.DatosArchivoMaxOrderByAggregateInput;
    _min?: Prisma.DatosArchivoMinOrderByAggregateInput;
    _sum?: Prisma.DatosArchivoSumOrderByAggregateInput;
};
export type DatosArchivoScalarWhereWithAggregatesInput = {
    AND?: Prisma.DatosArchivoScalarWhereWithAggregatesInput | Prisma.DatosArchivoScalarWhereWithAggregatesInput[];
    OR?: Prisma.DatosArchivoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DatosArchivoScalarWhereWithAggregatesInput | Prisma.DatosArchivoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DatosArchivo"> | number;
    titulo?: Prisma.StringNullableWithAggregatesFilter<"DatosArchivo"> | string | null;
    formato?: Prisma.StringNullableWithAggregatesFilter<"DatosArchivo"> | string | null;
    peso?: Prisma.StringNullableWithAggregatesFilter<"DatosArchivo"> | string | null;
    linkDescarga?: Prisma.StringNullableWithAggregatesFilter<"DatosArchivo"> | string | null;
    idBancoDatos?: Prisma.IntNullableWithAggregatesFilter<"DatosArchivo"> | number | null;
};
export type DatosArchivoCreateInput = {
    titulo?: string | null;
    formato?: string | null;
    peso?: string | null;
    linkDescarga?: string | null;
    bancoRel?: Prisma.BancoDatosCreateNestedOneWithoutArchivosInput;
};
export type DatosArchivoUncheckedCreateInput = {
    id?: number;
    titulo?: string | null;
    formato?: string | null;
    peso?: string | null;
    linkDescarga?: string | null;
    idBancoDatos?: number | null;
};
export type DatosArchivoUpdateInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bancoRel?: Prisma.BancoDatosUpdateOneWithoutArchivosNestedInput;
};
export type DatosArchivoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idBancoDatos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type DatosArchivoCreateManyInput = {
    id?: number;
    titulo?: string | null;
    formato?: string | null;
    peso?: string | null;
    linkDescarga?: string | null;
    idBancoDatos?: number | null;
};
export type DatosArchivoUpdateManyMutationInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DatosArchivoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    idBancoDatos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type DatosArchivoListRelationFilter = {
    every?: Prisma.DatosArchivoWhereInput;
    some?: Prisma.DatosArchivoWhereInput;
    none?: Prisma.DatosArchivoWhereInput;
};
export type DatosArchivoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DatosArchivoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    formato?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrder;
    idBancoDatos?: Prisma.SortOrder;
};
export type DatosArchivoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idBancoDatos?: Prisma.SortOrder;
};
export type DatosArchivoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    formato?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrder;
    idBancoDatos?: Prisma.SortOrder;
};
export type DatosArchivoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    formato?: Prisma.SortOrder;
    peso?: Prisma.SortOrder;
    linkDescarga?: Prisma.SortOrder;
    idBancoDatos?: Prisma.SortOrder;
};
export type DatosArchivoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idBancoDatos?: Prisma.SortOrder;
};
export type DatosArchivoCreateNestedManyWithoutBancoRelInput = {
    create?: Prisma.XOR<Prisma.DatosArchivoCreateWithoutBancoRelInput, Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput> | Prisma.DatosArchivoCreateWithoutBancoRelInput[] | Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput[];
    connectOrCreate?: Prisma.DatosArchivoCreateOrConnectWithoutBancoRelInput | Prisma.DatosArchivoCreateOrConnectWithoutBancoRelInput[];
    createMany?: Prisma.DatosArchivoCreateManyBancoRelInputEnvelope;
    connect?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
};
export type DatosArchivoUncheckedCreateNestedManyWithoutBancoRelInput = {
    create?: Prisma.XOR<Prisma.DatosArchivoCreateWithoutBancoRelInput, Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput> | Prisma.DatosArchivoCreateWithoutBancoRelInput[] | Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput[];
    connectOrCreate?: Prisma.DatosArchivoCreateOrConnectWithoutBancoRelInput | Prisma.DatosArchivoCreateOrConnectWithoutBancoRelInput[];
    createMany?: Prisma.DatosArchivoCreateManyBancoRelInputEnvelope;
    connect?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
};
export type DatosArchivoUpdateManyWithoutBancoRelNestedInput = {
    create?: Prisma.XOR<Prisma.DatosArchivoCreateWithoutBancoRelInput, Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput> | Prisma.DatosArchivoCreateWithoutBancoRelInput[] | Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput[];
    connectOrCreate?: Prisma.DatosArchivoCreateOrConnectWithoutBancoRelInput | Prisma.DatosArchivoCreateOrConnectWithoutBancoRelInput[];
    upsert?: Prisma.DatosArchivoUpsertWithWhereUniqueWithoutBancoRelInput | Prisma.DatosArchivoUpsertWithWhereUniqueWithoutBancoRelInput[];
    createMany?: Prisma.DatosArchivoCreateManyBancoRelInputEnvelope;
    set?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
    disconnect?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
    delete?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
    connect?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
    update?: Prisma.DatosArchivoUpdateWithWhereUniqueWithoutBancoRelInput | Prisma.DatosArchivoUpdateWithWhereUniqueWithoutBancoRelInput[];
    updateMany?: Prisma.DatosArchivoUpdateManyWithWhereWithoutBancoRelInput | Prisma.DatosArchivoUpdateManyWithWhereWithoutBancoRelInput[];
    deleteMany?: Prisma.DatosArchivoScalarWhereInput | Prisma.DatosArchivoScalarWhereInput[];
};
export type DatosArchivoUncheckedUpdateManyWithoutBancoRelNestedInput = {
    create?: Prisma.XOR<Prisma.DatosArchivoCreateWithoutBancoRelInput, Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput> | Prisma.DatosArchivoCreateWithoutBancoRelInput[] | Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput[];
    connectOrCreate?: Prisma.DatosArchivoCreateOrConnectWithoutBancoRelInput | Prisma.DatosArchivoCreateOrConnectWithoutBancoRelInput[];
    upsert?: Prisma.DatosArchivoUpsertWithWhereUniqueWithoutBancoRelInput | Prisma.DatosArchivoUpsertWithWhereUniqueWithoutBancoRelInput[];
    createMany?: Prisma.DatosArchivoCreateManyBancoRelInputEnvelope;
    set?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
    disconnect?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
    delete?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
    connect?: Prisma.DatosArchivoWhereUniqueInput | Prisma.DatosArchivoWhereUniqueInput[];
    update?: Prisma.DatosArchivoUpdateWithWhereUniqueWithoutBancoRelInput | Prisma.DatosArchivoUpdateWithWhereUniqueWithoutBancoRelInput[];
    updateMany?: Prisma.DatosArchivoUpdateManyWithWhereWithoutBancoRelInput | Prisma.DatosArchivoUpdateManyWithWhereWithoutBancoRelInput[];
    deleteMany?: Prisma.DatosArchivoScalarWhereInput | Prisma.DatosArchivoScalarWhereInput[];
};
export type DatosArchivoCreateWithoutBancoRelInput = {
    titulo?: string | null;
    formato?: string | null;
    peso?: string | null;
    linkDescarga?: string | null;
};
export type DatosArchivoUncheckedCreateWithoutBancoRelInput = {
    id?: number;
    titulo?: string | null;
    formato?: string | null;
    peso?: string | null;
    linkDescarga?: string | null;
};
export type DatosArchivoCreateOrConnectWithoutBancoRelInput = {
    where: Prisma.DatosArchivoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DatosArchivoCreateWithoutBancoRelInput, Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput>;
};
export type DatosArchivoCreateManyBancoRelInputEnvelope = {
    data: Prisma.DatosArchivoCreateManyBancoRelInput | Prisma.DatosArchivoCreateManyBancoRelInput[];
    skipDuplicates?: boolean;
};
export type DatosArchivoUpsertWithWhereUniqueWithoutBancoRelInput = {
    where: Prisma.DatosArchivoWhereUniqueInput;
    update: Prisma.XOR<Prisma.DatosArchivoUpdateWithoutBancoRelInput, Prisma.DatosArchivoUncheckedUpdateWithoutBancoRelInput>;
    create: Prisma.XOR<Prisma.DatosArchivoCreateWithoutBancoRelInput, Prisma.DatosArchivoUncheckedCreateWithoutBancoRelInput>;
};
export type DatosArchivoUpdateWithWhereUniqueWithoutBancoRelInput = {
    where: Prisma.DatosArchivoWhereUniqueInput;
    data: Prisma.XOR<Prisma.DatosArchivoUpdateWithoutBancoRelInput, Prisma.DatosArchivoUncheckedUpdateWithoutBancoRelInput>;
};
export type DatosArchivoUpdateManyWithWhereWithoutBancoRelInput = {
    where: Prisma.DatosArchivoScalarWhereInput;
    data: Prisma.XOR<Prisma.DatosArchivoUpdateManyMutationInput, Prisma.DatosArchivoUncheckedUpdateManyWithoutBancoRelInput>;
};
export type DatosArchivoScalarWhereInput = {
    AND?: Prisma.DatosArchivoScalarWhereInput | Prisma.DatosArchivoScalarWhereInput[];
    OR?: Prisma.DatosArchivoScalarWhereInput[];
    NOT?: Prisma.DatosArchivoScalarWhereInput | Prisma.DatosArchivoScalarWhereInput[];
    id?: Prisma.IntFilter<"DatosArchivo"> | number;
    titulo?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    formato?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    peso?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    linkDescarga?: Prisma.StringNullableFilter<"DatosArchivo"> | string | null;
    idBancoDatos?: Prisma.IntNullableFilter<"DatosArchivo"> | number | null;
};
export type DatosArchivoCreateManyBancoRelInput = {
    id?: number;
    titulo?: string | null;
    formato?: string | null;
    peso?: string | null;
    linkDescarga?: string | null;
};
export type DatosArchivoUpdateWithoutBancoRelInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DatosArchivoUncheckedUpdateWithoutBancoRelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DatosArchivoUncheckedUpdateManyWithoutBancoRelInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    peso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    linkDescarga?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type DatosArchivoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    formato?: boolean;
    peso?: boolean;
    linkDescarga?: boolean;
    idBancoDatos?: boolean;
    bancoRel?: boolean | Prisma.DatosArchivo$bancoRelArgs<ExtArgs>;
}, ExtArgs["result"]["datosArchivo"]>;
export type DatosArchivoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    formato?: boolean;
    peso?: boolean;
    linkDescarga?: boolean;
    idBancoDatos?: boolean;
    bancoRel?: boolean | Prisma.DatosArchivo$bancoRelArgs<ExtArgs>;
}, ExtArgs["result"]["datosArchivo"]>;
export type DatosArchivoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    formato?: boolean;
    peso?: boolean;
    linkDescarga?: boolean;
    idBancoDatos?: boolean;
    bancoRel?: boolean | Prisma.DatosArchivo$bancoRelArgs<ExtArgs>;
}, ExtArgs["result"]["datosArchivo"]>;
export type DatosArchivoSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    formato?: boolean;
    peso?: boolean;
    linkDescarga?: boolean;
    idBancoDatos?: boolean;
};
export type DatosArchivoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "formato" | "peso" | "linkDescarga" | "idBancoDatos", ExtArgs["result"]["datosArchivo"]>;
export type DatosArchivoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bancoRel?: boolean | Prisma.DatosArchivo$bancoRelArgs<ExtArgs>;
};
export type DatosArchivoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bancoRel?: boolean | Prisma.DatosArchivo$bancoRelArgs<ExtArgs>;
};
export type DatosArchivoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bancoRel?: boolean | Prisma.DatosArchivo$bancoRelArgs<ExtArgs>;
};
export type $DatosArchivoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DatosArchivo";
    objects: {
        bancoRel: Prisma.$BancoDatosPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string | null;
        formato: string | null;
        peso: string | null;
        linkDescarga: string | null;
        idBancoDatos: number | null;
    }, ExtArgs["result"]["datosArchivo"]>;
    composites: {};
};
export type DatosArchivoGetPayload<S extends boolean | null | undefined | DatosArchivoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload, S>;
export type DatosArchivoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DatosArchivoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DatosArchivoCountAggregateInputType | true;
};
export interface DatosArchivoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DatosArchivo'];
        meta: {
            name: 'DatosArchivo';
        };
    };
    findUnique<T extends DatosArchivoFindUniqueArgs>(args: Prisma.SelectSubset<T, DatosArchivoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DatosArchivoClient<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DatosArchivoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DatosArchivoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DatosArchivoClient<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DatosArchivoFindFirstArgs>(args?: Prisma.SelectSubset<T, DatosArchivoFindFirstArgs<ExtArgs>>): Prisma.Prisma__DatosArchivoClient<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DatosArchivoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DatosArchivoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DatosArchivoClient<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DatosArchivoFindManyArgs>(args?: Prisma.SelectSubset<T, DatosArchivoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DatosArchivoCreateArgs>(args: Prisma.SelectSubset<T, DatosArchivoCreateArgs<ExtArgs>>): Prisma.Prisma__DatosArchivoClient<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DatosArchivoCreateManyArgs>(args?: Prisma.SelectSubset<T, DatosArchivoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DatosArchivoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DatosArchivoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DatosArchivoDeleteArgs>(args: Prisma.SelectSubset<T, DatosArchivoDeleteArgs<ExtArgs>>): Prisma.Prisma__DatosArchivoClient<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DatosArchivoUpdateArgs>(args: Prisma.SelectSubset<T, DatosArchivoUpdateArgs<ExtArgs>>): Prisma.Prisma__DatosArchivoClient<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DatosArchivoDeleteManyArgs>(args?: Prisma.SelectSubset<T, DatosArchivoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DatosArchivoUpdateManyArgs>(args: Prisma.SelectSubset<T, DatosArchivoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DatosArchivoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DatosArchivoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DatosArchivoUpsertArgs>(args: Prisma.SelectSubset<T, DatosArchivoUpsertArgs<ExtArgs>>): Prisma.Prisma__DatosArchivoClient<runtime.Types.Result.GetResult<Prisma.$DatosArchivoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DatosArchivoCountArgs>(args?: Prisma.Subset<T, DatosArchivoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DatosArchivoCountAggregateOutputType> : number>;
    aggregate<T extends DatosArchivoAggregateArgs>(args: Prisma.Subset<T, DatosArchivoAggregateArgs>): Prisma.PrismaPromise<GetDatosArchivoAggregateType<T>>;
    groupBy<T extends DatosArchivoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DatosArchivoGroupByArgs['orderBy'];
    } : {
        orderBy?: DatosArchivoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DatosArchivoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatosArchivoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DatosArchivoFieldRefs;
}
export interface Prisma__DatosArchivoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bancoRel<T extends Prisma.DatosArchivo$bancoRelArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DatosArchivo$bancoRelArgs<ExtArgs>>): Prisma.Prisma__BancoDatosClient<runtime.Types.Result.GetResult<Prisma.$BancoDatosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DatosArchivoFieldRefs {
    readonly id: Prisma.FieldRef<"DatosArchivo", 'Int'>;
    readonly titulo: Prisma.FieldRef<"DatosArchivo", 'String'>;
    readonly formato: Prisma.FieldRef<"DatosArchivo", 'String'>;
    readonly peso: Prisma.FieldRef<"DatosArchivo", 'String'>;
    readonly linkDescarga: Prisma.FieldRef<"DatosArchivo", 'String'>;
    readonly idBancoDatos: Prisma.FieldRef<"DatosArchivo", 'Int'>;
}
export type DatosArchivoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelect<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    include?: Prisma.DatosArchivoInclude<ExtArgs> | null;
    where: Prisma.DatosArchivoWhereUniqueInput;
};
export type DatosArchivoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelect<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    include?: Prisma.DatosArchivoInclude<ExtArgs> | null;
    where: Prisma.DatosArchivoWhereUniqueInput;
};
export type DatosArchivoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DatosArchivoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DatosArchivoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DatosArchivoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelect<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    include?: Prisma.DatosArchivoInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.DatosArchivoCreateInput, Prisma.DatosArchivoUncheckedCreateInput>;
};
export type DatosArchivoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DatosArchivoCreateManyInput | Prisma.DatosArchivoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DatosArchivoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    data: Prisma.DatosArchivoCreateManyInput | Prisma.DatosArchivoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DatosArchivoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DatosArchivoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelect<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    include?: Prisma.DatosArchivoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DatosArchivoUpdateInput, Prisma.DatosArchivoUncheckedUpdateInput>;
    where: Prisma.DatosArchivoWhereUniqueInput;
};
export type DatosArchivoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DatosArchivoUpdateManyMutationInput, Prisma.DatosArchivoUncheckedUpdateManyInput>;
    where?: Prisma.DatosArchivoWhereInput;
    limit?: number;
};
export type DatosArchivoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DatosArchivoUpdateManyMutationInput, Prisma.DatosArchivoUncheckedUpdateManyInput>;
    where?: Prisma.DatosArchivoWhereInput;
    limit?: number;
    include?: Prisma.DatosArchivoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DatosArchivoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelect<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    include?: Prisma.DatosArchivoInclude<ExtArgs> | null;
    where: Prisma.DatosArchivoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DatosArchivoCreateInput, Prisma.DatosArchivoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DatosArchivoUpdateInput, Prisma.DatosArchivoUncheckedUpdateInput>;
};
export type DatosArchivoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelect<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    include?: Prisma.DatosArchivoInclude<ExtArgs> | null;
    where: Prisma.DatosArchivoWhereUniqueInput;
};
export type DatosArchivoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DatosArchivoWhereInput;
    limit?: number;
};
export type DatosArchivo$bancoRelArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BancoDatosSelect<ExtArgs> | null;
    omit?: Prisma.BancoDatosOmit<ExtArgs> | null;
    include?: Prisma.BancoDatosInclude<ExtArgs> | null;
    where?: Prisma.BancoDatosWhereInput;
};
export type DatosArchivoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DatosArchivoSelect<ExtArgs> | null;
    omit?: Prisma.DatosArchivoOmit<ExtArgs> | null;
    include?: Prisma.DatosArchivoInclude<ExtArgs> | null;
};
