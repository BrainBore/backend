import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type IncluyeModel = runtime.Types.Result.DefaultSelection<Prisma.$IncluyePayload>;
export type AggregateIncluye = {
    _count: IncluyeCountAggregateOutputType | null;
    _avg: IncluyeAvgAggregateOutputType | null;
    _sum: IncluyeSumAggregateOutputType | null;
    _min: IncluyeMinAggregateOutputType | null;
    _max: IncluyeMaxAggregateOutputType | null;
};
export type IncluyeAvgAggregateOutputType = {
    idPlanEstudio: number | null;
    idMateriaAct: number | null;
};
export type IncluyeSumAggregateOutputType = {
    idPlanEstudio: number | null;
    idMateriaAct: number | null;
};
export type IncluyeMinAggregateOutputType = {
    idPlanEstudio: number | null;
    idMateriaAct: number | null;
};
export type IncluyeMaxAggregateOutputType = {
    idPlanEstudio: number | null;
    idMateriaAct: number | null;
};
export type IncluyeCountAggregateOutputType = {
    idPlanEstudio: number;
    idMateriaAct: number;
    _all: number;
};
export type IncluyeAvgAggregateInputType = {
    idPlanEstudio?: true;
    idMateriaAct?: true;
};
export type IncluyeSumAggregateInputType = {
    idPlanEstudio?: true;
    idMateriaAct?: true;
};
export type IncluyeMinAggregateInputType = {
    idPlanEstudio?: true;
    idMateriaAct?: true;
};
export type IncluyeMaxAggregateInputType = {
    idPlanEstudio?: true;
    idMateriaAct?: true;
};
export type IncluyeCountAggregateInputType = {
    idPlanEstudio?: true;
    idMateriaAct?: true;
    _all?: true;
};
export type IncluyeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncluyeWhereInput;
    orderBy?: Prisma.IncluyeOrderByWithRelationInput | Prisma.IncluyeOrderByWithRelationInput[];
    cursor?: Prisma.IncluyeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IncluyeCountAggregateInputType;
    _avg?: IncluyeAvgAggregateInputType;
    _sum?: IncluyeSumAggregateInputType;
    _min?: IncluyeMinAggregateInputType;
    _max?: IncluyeMaxAggregateInputType;
};
export type GetIncluyeAggregateType<T extends IncluyeAggregateArgs> = {
    [P in keyof T & keyof AggregateIncluye]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIncluye[P]> : Prisma.GetScalarType<T[P], AggregateIncluye[P]>;
};
export type IncluyeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncluyeWhereInput;
    orderBy?: Prisma.IncluyeOrderByWithAggregationInput | Prisma.IncluyeOrderByWithAggregationInput[];
    by: Prisma.IncluyeScalarFieldEnum[] | Prisma.IncluyeScalarFieldEnum;
    having?: Prisma.IncluyeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IncluyeCountAggregateInputType | true;
    _avg?: IncluyeAvgAggregateInputType;
    _sum?: IncluyeSumAggregateInputType;
    _min?: IncluyeMinAggregateInputType;
    _max?: IncluyeMaxAggregateInputType;
};
export type IncluyeGroupByOutputType = {
    idPlanEstudio: number;
    idMateriaAct: number;
    _count: IncluyeCountAggregateOutputType | null;
    _avg: IncluyeAvgAggregateOutputType | null;
    _sum: IncluyeSumAggregateOutputType | null;
    _min: IncluyeMinAggregateOutputType | null;
    _max: IncluyeMaxAggregateOutputType | null;
};
export type GetIncluyeGroupByPayload<T extends IncluyeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IncluyeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IncluyeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IncluyeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IncluyeGroupByOutputType[P]>;
}>>;
export type IncluyeWhereInput = {
    AND?: Prisma.IncluyeWhereInput | Prisma.IncluyeWhereInput[];
    OR?: Prisma.IncluyeWhereInput[];
    NOT?: Prisma.IncluyeWhereInput | Prisma.IncluyeWhereInput[];
    idPlanEstudio?: Prisma.IntFilter<"Incluye"> | number;
    idMateriaAct?: Prisma.IntFilter<"Incluye"> | number;
    planEstudio?: Prisma.XOR<Prisma.PlanEstudiosScalarRelationFilter, Prisma.PlanEstudiosWhereInput>;
    materia?: Prisma.XOR<Prisma.MateriaPregradoScalarRelationFilter, Prisma.MateriaPregradoWhereInput>;
};
export type IncluyeOrderByWithRelationInput = {
    idPlanEstudio?: Prisma.SortOrder;
    idMateriaAct?: Prisma.SortOrder;
    planEstudio?: Prisma.PlanEstudiosOrderByWithRelationInput;
    materia?: Prisma.MateriaPregradoOrderByWithRelationInput;
};
export type IncluyeWhereUniqueInput = Prisma.AtLeast<{
    idPlanEstudio_idMateriaAct?: Prisma.IncluyeIdPlanEstudioIdMateriaActCompoundUniqueInput;
    AND?: Prisma.IncluyeWhereInput | Prisma.IncluyeWhereInput[];
    OR?: Prisma.IncluyeWhereInput[];
    NOT?: Prisma.IncluyeWhereInput | Prisma.IncluyeWhereInput[];
    idPlanEstudio?: Prisma.IntFilter<"Incluye"> | number;
    idMateriaAct?: Prisma.IntFilter<"Incluye"> | number;
    planEstudio?: Prisma.XOR<Prisma.PlanEstudiosScalarRelationFilter, Prisma.PlanEstudiosWhereInput>;
    materia?: Prisma.XOR<Prisma.MateriaPregradoScalarRelationFilter, Prisma.MateriaPregradoWhereInput>;
}, "idPlanEstudio_idMateriaAct">;
export type IncluyeOrderByWithAggregationInput = {
    idPlanEstudio?: Prisma.SortOrder;
    idMateriaAct?: Prisma.SortOrder;
    _count?: Prisma.IncluyeCountOrderByAggregateInput;
    _avg?: Prisma.IncluyeAvgOrderByAggregateInput;
    _max?: Prisma.IncluyeMaxOrderByAggregateInput;
    _min?: Prisma.IncluyeMinOrderByAggregateInput;
    _sum?: Prisma.IncluyeSumOrderByAggregateInput;
};
export type IncluyeScalarWhereWithAggregatesInput = {
    AND?: Prisma.IncluyeScalarWhereWithAggregatesInput | Prisma.IncluyeScalarWhereWithAggregatesInput[];
    OR?: Prisma.IncluyeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IncluyeScalarWhereWithAggregatesInput | Prisma.IncluyeScalarWhereWithAggregatesInput[];
    idPlanEstudio?: Prisma.IntWithAggregatesFilter<"Incluye"> | number;
    idMateriaAct?: Prisma.IntWithAggregatesFilter<"Incluye"> | number;
};
export type IncluyeCreateInput = {
    planEstudio: Prisma.PlanEstudiosCreateNestedOneWithoutIncluyeInput;
    materia: Prisma.MateriaPregradoCreateNestedOneWithoutIncluyeInput;
};
export type IncluyeUncheckedCreateInput = {
    idPlanEstudio: number;
    idMateriaAct: number;
};
export type IncluyeUpdateInput = {
    planEstudio?: Prisma.PlanEstudiosUpdateOneRequiredWithoutIncluyeNestedInput;
    materia?: Prisma.MateriaPregradoUpdateOneRequiredWithoutIncluyeNestedInput;
};
export type IncluyeUncheckedUpdateInput = {
    idPlanEstudio?: Prisma.IntFieldUpdateOperationsInput | number;
    idMateriaAct?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IncluyeCreateManyInput = {
    idPlanEstudio: number;
    idMateriaAct: number;
};
export type IncluyeUpdateManyMutationInput = {};
export type IncluyeUncheckedUpdateManyInput = {
    idPlanEstudio?: Prisma.IntFieldUpdateOperationsInput | number;
    idMateriaAct?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IncluyeListRelationFilter = {
    every?: Prisma.IncluyeWhereInput;
    some?: Prisma.IncluyeWhereInput;
    none?: Prisma.IncluyeWhereInput;
};
export type IncluyeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IncluyeIdPlanEstudioIdMateriaActCompoundUniqueInput = {
    idPlanEstudio: number;
    idMateriaAct: number;
};
export type IncluyeCountOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
    idMateriaAct?: Prisma.SortOrder;
};
export type IncluyeAvgOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
    idMateriaAct?: Prisma.SortOrder;
};
export type IncluyeMaxOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
    idMateriaAct?: Prisma.SortOrder;
};
export type IncluyeMinOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
    idMateriaAct?: Prisma.SortOrder;
};
export type IncluyeSumOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
    idMateriaAct?: Prisma.SortOrder;
};
export type IncluyeCreateNestedManyWithoutMateriaInput = {
    create?: Prisma.XOR<Prisma.IncluyeCreateWithoutMateriaInput, Prisma.IncluyeUncheckedCreateWithoutMateriaInput> | Prisma.IncluyeCreateWithoutMateriaInput[] | Prisma.IncluyeUncheckedCreateWithoutMateriaInput[];
    connectOrCreate?: Prisma.IncluyeCreateOrConnectWithoutMateriaInput | Prisma.IncluyeCreateOrConnectWithoutMateriaInput[];
    createMany?: Prisma.IncluyeCreateManyMateriaInputEnvelope;
    connect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
};
export type IncluyeUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: Prisma.XOR<Prisma.IncluyeCreateWithoutMateriaInput, Prisma.IncluyeUncheckedCreateWithoutMateriaInput> | Prisma.IncluyeCreateWithoutMateriaInput[] | Prisma.IncluyeUncheckedCreateWithoutMateriaInput[];
    connectOrCreate?: Prisma.IncluyeCreateOrConnectWithoutMateriaInput | Prisma.IncluyeCreateOrConnectWithoutMateriaInput[];
    createMany?: Prisma.IncluyeCreateManyMateriaInputEnvelope;
    connect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
};
export type IncluyeUpdateManyWithoutMateriaNestedInput = {
    create?: Prisma.XOR<Prisma.IncluyeCreateWithoutMateriaInput, Prisma.IncluyeUncheckedCreateWithoutMateriaInput> | Prisma.IncluyeCreateWithoutMateriaInput[] | Prisma.IncluyeUncheckedCreateWithoutMateriaInput[];
    connectOrCreate?: Prisma.IncluyeCreateOrConnectWithoutMateriaInput | Prisma.IncluyeCreateOrConnectWithoutMateriaInput[];
    upsert?: Prisma.IncluyeUpsertWithWhereUniqueWithoutMateriaInput | Prisma.IncluyeUpsertWithWhereUniqueWithoutMateriaInput[];
    createMany?: Prisma.IncluyeCreateManyMateriaInputEnvelope;
    set?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    disconnect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    delete?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    connect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    update?: Prisma.IncluyeUpdateWithWhereUniqueWithoutMateriaInput | Prisma.IncluyeUpdateWithWhereUniqueWithoutMateriaInput[];
    updateMany?: Prisma.IncluyeUpdateManyWithWhereWithoutMateriaInput | Prisma.IncluyeUpdateManyWithWhereWithoutMateriaInput[];
    deleteMany?: Prisma.IncluyeScalarWhereInput | Prisma.IncluyeScalarWhereInput[];
};
export type IncluyeUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: Prisma.XOR<Prisma.IncluyeCreateWithoutMateriaInput, Prisma.IncluyeUncheckedCreateWithoutMateriaInput> | Prisma.IncluyeCreateWithoutMateriaInput[] | Prisma.IncluyeUncheckedCreateWithoutMateriaInput[];
    connectOrCreate?: Prisma.IncluyeCreateOrConnectWithoutMateriaInput | Prisma.IncluyeCreateOrConnectWithoutMateriaInput[];
    upsert?: Prisma.IncluyeUpsertWithWhereUniqueWithoutMateriaInput | Prisma.IncluyeUpsertWithWhereUniqueWithoutMateriaInput[];
    createMany?: Prisma.IncluyeCreateManyMateriaInputEnvelope;
    set?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    disconnect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    delete?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    connect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    update?: Prisma.IncluyeUpdateWithWhereUniqueWithoutMateriaInput | Prisma.IncluyeUpdateWithWhereUniqueWithoutMateriaInput[];
    updateMany?: Prisma.IncluyeUpdateManyWithWhereWithoutMateriaInput | Prisma.IncluyeUpdateManyWithWhereWithoutMateriaInput[];
    deleteMany?: Prisma.IncluyeScalarWhereInput | Prisma.IncluyeScalarWhereInput[];
};
export type IncluyeCreateNestedManyWithoutPlanEstudioInput = {
    create?: Prisma.XOR<Prisma.IncluyeCreateWithoutPlanEstudioInput, Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput> | Prisma.IncluyeCreateWithoutPlanEstudioInput[] | Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput[];
    connectOrCreate?: Prisma.IncluyeCreateOrConnectWithoutPlanEstudioInput | Prisma.IncluyeCreateOrConnectWithoutPlanEstudioInput[];
    createMany?: Prisma.IncluyeCreateManyPlanEstudioInputEnvelope;
    connect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
};
export type IncluyeUncheckedCreateNestedManyWithoutPlanEstudioInput = {
    create?: Prisma.XOR<Prisma.IncluyeCreateWithoutPlanEstudioInput, Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput> | Prisma.IncluyeCreateWithoutPlanEstudioInput[] | Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput[];
    connectOrCreate?: Prisma.IncluyeCreateOrConnectWithoutPlanEstudioInput | Prisma.IncluyeCreateOrConnectWithoutPlanEstudioInput[];
    createMany?: Prisma.IncluyeCreateManyPlanEstudioInputEnvelope;
    connect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
};
export type IncluyeUpdateManyWithoutPlanEstudioNestedInput = {
    create?: Prisma.XOR<Prisma.IncluyeCreateWithoutPlanEstudioInput, Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput> | Prisma.IncluyeCreateWithoutPlanEstudioInput[] | Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput[];
    connectOrCreate?: Prisma.IncluyeCreateOrConnectWithoutPlanEstudioInput | Prisma.IncluyeCreateOrConnectWithoutPlanEstudioInput[];
    upsert?: Prisma.IncluyeUpsertWithWhereUniqueWithoutPlanEstudioInput | Prisma.IncluyeUpsertWithWhereUniqueWithoutPlanEstudioInput[];
    createMany?: Prisma.IncluyeCreateManyPlanEstudioInputEnvelope;
    set?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    disconnect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    delete?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    connect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    update?: Prisma.IncluyeUpdateWithWhereUniqueWithoutPlanEstudioInput | Prisma.IncluyeUpdateWithWhereUniqueWithoutPlanEstudioInput[];
    updateMany?: Prisma.IncluyeUpdateManyWithWhereWithoutPlanEstudioInput | Prisma.IncluyeUpdateManyWithWhereWithoutPlanEstudioInput[];
    deleteMany?: Prisma.IncluyeScalarWhereInput | Prisma.IncluyeScalarWhereInput[];
};
export type IncluyeUncheckedUpdateManyWithoutPlanEstudioNestedInput = {
    create?: Prisma.XOR<Prisma.IncluyeCreateWithoutPlanEstudioInput, Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput> | Prisma.IncluyeCreateWithoutPlanEstudioInput[] | Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput[];
    connectOrCreate?: Prisma.IncluyeCreateOrConnectWithoutPlanEstudioInput | Prisma.IncluyeCreateOrConnectWithoutPlanEstudioInput[];
    upsert?: Prisma.IncluyeUpsertWithWhereUniqueWithoutPlanEstudioInput | Prisma.IncluyeUpsertWithWhereUniqueWithoutPlanEstudioInput[];
    createMany?: Prisma.IncluyeCreateManyPlanEstudioInputEnvelope;
    set?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    disconnect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    delete?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    connect?: Prisma.IncluyeWhereUniqueInput | Prisma.IncluyeWhereUniqueInput[];
    update?: Prisma.IncluyeUpdateWithWhereUniqueWithoutPlanEstudioInput | Prisma.IncluyeUpdateWithWhereUniqueWithoutPlanEstudioInput[];
    updateMany?: Prisma.IncluyeUpdateManyWithWhereWithoutPlanEstudioInput | Prisma.IncluyeUpdateManyWithWhereWithoutPlanEstudioInput[];
    deleteMany?: Prisma.IncluyeScalarWhereInput | Prisma.IncluyeScalarWhereInput[];
};
export type IncluyeCreateWithoutMateriaInput = {
    planEstudio: Prisma.PlanEstudiosCreateNestedOneWithoutIncluyeInput;
};
export type IncluyeUncheckedCreateWithoutMateriaInput = {
    idPlanEstudio: number;
};
export type IncluyeCreateOrConnectWithoutMateriaInput = {
    where: Prisma.IncluyeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncluyeCreateWithoutMateriaInput, Prisma.IncluyeUncheckedCreateWithoutMateriaInput>;
};
export type IncluyeCreateManyMateriaInputEnvelope = {
    data: Prisma.IncluyeCreateManyMateriaInput | Prisma.IncluyeCreateManyMateriaInput[];
    skipDuplicates?: boolean;
};
export type IncluyeUpsertWithWhereUniqueWithoutMateriaInput = {
    where: Prisma.IncluyeWhereUniqueInput;
    update: Prisma.XOR<Prisma.IncluyeUpdateWithoutMateriaInput, Prisma.IncluyeUncheckedUpdateWithoutMateriaInput>;
    create: Prisma.XOR<Prisma.IncluyeCreateWithoutMateriaInput, Prisma.IncluyeUncheckedCreateWithoutMateriaInput>;
};
export type IncluyeUpdateWithWhereUniqueWithoutMateriaInput = {
    where: Prisma.IncluyeWhereUniqueInput;
    data: Prisma.XOR<Prisma.IncluyeUpdateWithoutMateriaInput, Prisma.IncluyeUncheckedUpdateWithoutMateriaInput>;
};
export type IncluyeUpdateManyWithWhereWithoutMateriaInput = {
    where: Prisma.IncluyeScalarWhereInput;
    data: Prisma.XOR<Prisma.IncluyeUpdateManyMutationInput, Prisma.IncluyeUncheckedUpdateManyWithoutMateriaInput>;
};
export type IncluyeScalarWhereInput = {
    AND?: Prisma.IncluyeScalarWhereInput | Prisma.IncluyeScalarWhereInput[];
    OR?: Prisma.IncluyeScalarWhereInput[];
    NOT?: Prisma.IncluyeScalarWhereInput | Prisma.IncluyeScalarWhereInput[];
    idPlanEstudio?: Prisma.IntFilter<"Incluye"> | number;
    idMateriaAct?: Prisma.IntFilter<"Incluye"> | number;
};
export type IncluyeCreateWithoutPlanEstudioInput = {
    materia: Prisma.MateriaPregradoCreateNestedOneWithoutIncluyeInput;
};
export type IncluyeUncheckedCreateWithoutPlanEstudioInput = {
    idMateriaAct: number;
};
export type IncluyeCreateOrConnectWithoutPlanEstudioInput = {
    where: Prisma.IncluyeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncluyeCreateWithoutPlanEstudioInput, Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput>;
};
export type IncluyeCreateManyPlanEstudioInputEnvelope = {
    data: Prisma.IncluyeCreateManyPlanEstudioInput | Prisma.IncluyeCreateManyPlanEstudioInput[];
    skipDuplicates?: boolean;
};
export type IncluyeUpsertWithWhereUniqueWithoutPlanEstudioInput = {
    where: Prisma.IncluyeWhereUniqueInput;
    update: Prisma.XOR<Prisma.IncluyeUpdateWithoutPlanEstudioInput, Prisma.IncluyeUncheckedUpdateWithoutPlanEstudioInput>;
    create: Prisma.XOR<Prisma.IncluyeCreateWithoutPlanEstudioInput, Prisma.IncluyeUncheckedCreateWithoutPlanEstudioInput>;
};
export type IncluyeUpdateWithWhereUniqueWithoutPlanEstudioInput = {
    where: Prisma.IncluyeWhereUniqueInput;
    data: Prisma.XOR<Prisma.IncluyeUpdateWithoutPlanEstudioInput, Prisma.IncluyeUncheckedUpdateWithoutPlanEstudioInput>;
};
export type IncluyeUpdateManyWithWhereWithoutPlanEstudioInput = {
    where: Prisma.IncluyeScalarWhereInput;
    data: Prisma.XOR<Prisma.IncluyeUpdateManyMutationInput, Prisma.IncluyeUncheckedUpdateManyWithoutPlanEstudioInput>;
};
export type IncluyeCreateManyMateriaInput = {
    idPlanEstudio: number;
};
export type IncluyeUpdateWithoutMateriaInput = {
    planEstudio?: Prisma.PlanEstudiosUpdateOneRequiredWithoutIncluyeNestedInput;
};
export type IncluyeUncheckedUpdateWithoutMateriaInput = {
    idPlanEstudio?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IncluyeUncheckedUpdateManyWithoutMateriaInput = {
    idPlanEstudio?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IncluyeCreateManyPlanEstudioInput = {
    idMateriaAct: number;
};
export type IncluyeUpdateWithoutPlanEstudioInput = {
    materia?: Prisma.MateriaPregradoUpdateOneRequiredWithoutIncluyeNestedInput;
};
export type IncluyeUncheckedUpdateWithoutPlanEstudioInput = {
    idMateriaAct?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IncluyeUncheckedUpdateManyWithoutPlanEstudioInput = {
    idMateriaAct?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type IncluyeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idPlanEstudio?: boolean;
    idMateriaAct?: boolean;
    planEstudio?: boolean | Prisma.PlanEstudiosDefaultArgs<ExtArgs>;
    materia?: boolean | Prisma.MateriaPregradoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incluye"]>;
export type IncluyeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idPlanEstudio?: boolean;
    idMateriaAct?: boolean;
    planEstudio?: boolean | Prisma.PlanEstudiosDefaultArgs<ExtArgs>;
    materia?: boolean | Prisma.MateriaPregradoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incluye"]>;
export type IncluyeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idPlanEstudio?: boolean;
    idMateriaAct?: boolean;
    planEstudio?: boolean | Prisma.PlanEstudiosDefaultArgs<ExtArgs>;
    materia?: boolean | Prisma.MateriaPregradoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incluye"]>;
export type IncluyeSelectScalar = {
    idPlanEstudio?: boolean;
    idMateriaAct?: boolean;
};
export type IncluyeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idPlanEstudio" | "idMateriaAct", ExtArgs["result"]["incluye"]>;
export type IncluyeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planEstudio?: boolean | Prisma.PlanEstudiosDefaultArgs<ExtArgs>;
    materia?: boolean | Prisma.MateriaPregradoDefaultArgs<ExtArgs>;
};
export type IncluyeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planEstudio?: boolean | Prisma.PlanEstudiosDefaultArgs<ExtArgs>;
    materia?: boolean | Prisma.MateriaPregradoDefaultArgs<ExtArgs>;
};
export type IncluyeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    planEstudio?: boolean | Prisma.PlanEstudiosDefaultArgs<ExtArgs>;
    materia?: boolean | Prisma.MateriaPregradoDefaultArgs<ExtArgs>;
};
export type $IncluyePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Incluye";
    objects: {
        planEstudio: Prisma.$PlanEstudiosPayload<ExtArgs>;
        materia: Prisma.$MateriaPregradoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idPlanEstudio: number;
        idMateriaAct: number;
    }, ExtArgs["result"]["incluye"]>;
    composites: {};
};
export type IncluyeGetPayload<S extends boolean | null | undefined | IncluyeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IncluyePayload, S>;
export type IncluyeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IncluyeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IncluyeCountAggregateInputType | true;
};
export interface IncluyeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Incluye'];
        meta: {
            name: 'Incluye';
        };
    };
    findUnique<T extends IncluyeFindUniqueArgs>(args: Prisma.SelectSubset<T, IncluyeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IncluyeClient<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IncluyeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IncluyeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncluyeClient<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IncluyeFindFirstArgs>(args?: Prisma.SelectSubset<T, IncluyeFindFirstArgs<ExtArgs>>): Prisma.Prisma__IncluyeClient<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IncluyeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IncluyeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncluyeClient<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IncluyeFindManyArgs>(args?: Prisma.SelectSubset<T, IncluyeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IncluyeCreateArgs>(args: Prisma.SelectSubset<T, IncluyeCreateArgs<ExtArgs>>): Prisma.Prisma__IncluyeClient<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IncluyeCreateManyArgs>(args?: Prisma.SelectSubset<T, IncluyeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IncluyeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IncluyeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IncluyeDeleteArgs>(args: Prisma.SelectSubset<T, IncluyeDeleteArgs<ExtArgs>>): Prisma.Prisma__IncluyeClient<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IncluyeUpdateArgs>(args: Prisma.SelectSubset<T, IncluyeUpdateArgs<ExtArgs>>): Prisma.Prisma__IncluyeClient<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IncluyeDeleteManyArgs>(args?: Prisma.SelectSubset<T, IncluyeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IncluyeUpdateManyArgs>(args: Prisma.SelectSubset<T, IncluyeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IncluyeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IncluyeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IncluyeUpsertArgs>(args: Prisma.SelectSubset<T, IncluyeUpsertArgs<ExtArgs>>): Prisma.Prisma__IncluyeClient<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IncluyeCountArgs>(args?: Prisma.Subset<T, IncluyeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IncluyeCountAggregateOutputType> : number>;
    aggregate<T extends IncluyeAggregateArgs>(args: Prisma.Subset<T, IncluyeAggregateArgs>): Prisma.PrismaPromise<GetIncluyeAggregateType<T>>;
    groupBy<T extends IncluyeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IncluyeGroupByArgs['orderBy'];
    } : {
        orderBy?: IncluyeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IncluyeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncluyeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IncluyeFieldRefs;
}
export interface Prisma__IncluyeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    planEstudio<T extends Prisma.PlanEstudiosDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlanEstudiosDefaultArgs<ExtArgs>>): Prisma.Prisma__PlanEstudiosClient<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    materia<T extends Prisma.MateriaPregradoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MateriaPregradoDefaultArgs<ExtArgs>>): Prisma.Prisma__MateriaPregradoClient<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IncluyeFieldRefs {
    readonly idPlanEstudio: Prisma.FieldRef<"Incluye", 'Int'>;
    readonly idMateriaAct: Prisma.FieldRef<"Incluye", 'Int'>;
}
export type IncluyeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
    where: Prisma.IncluyeWhereUniqueInput;
};
export type IncluyeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
    where: Prisma.IncluyeWhereUniqueInput;
};
export type IncluyeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
    where?: Prisma.IncluyeWhereInput;
    orderBy?: Prisma.IncluyeOrderByWithRelationInput | Prisma.IncluyeOrderByWithRelationInput[];
    cursor?: Prisma.IncluyeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncluyeScalarFieldEnum | Prisma.IncluyeScalarFieldEnum[];
};
export type IncluyeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
    where?: Prisma.IncluyeWhereInput;
    orderBy?: Prisma.IncluyeOrderByWithRelationInput | Prisma.IncluyeOrderByWithRelationInput[];
    cursor?: Prisma.IncluyeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncluyeScalarFieldEnum | Prisma.IncluyeScalarFieldEnum[];
};
export type IncluyeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
    where?: Prisma.IncluyeWhereInput;
    orderBy?: Prisma.IncluyeOrderByWithRelationInput | Prisma.IncluyeOrderByWithRelationInput[];
    cursor?: Prisma.IncluyeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncluyeScalarFieldEnum | Prisma.IncluyeScalarFieldEnum[];
};
export type IncluyeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncluyeCreateInput, Prisma.IncluyeUncheckedCreateInput>;
};
export type IncluyeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IncluyeCreateManyInput | Prisma.IncluyeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IncluyeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    data: Prisma.IncluyeCreateManyInput | Prisma.IncluyeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IncluyeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IncluyeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncluyeUpdateInput, Prisma.IncluyeUncheckedUpdateInput>;
    where: Prisma.IncluyeWhereUniqueInput;
};
export type IncluyeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IncluyeUpdateManyMutationInput, Prisma.IncluyeUncheckedUpdateManyInput>;
    where?: Prisma.IncluyeWhereInput;
    limit?: number;
};
export type IncluyeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncluyeUpdateManyMutationInput, Prisma.IncluyeUncheckedUpdateManyInput>;
    where?: Prisma.IncluyeWhereInput;
    limit?: number;
    include?: Prisma.IncluyeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IncluyeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
    where: Prisma.IncluyeWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncluyeCreateInput, Prisma.IncluyeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IncluyeUpdateInput, Prisma.IncluyeUncheckedUpdateInput>;
};
export type IncluyeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
    where: Prisma.IncluyeWhereUniqueInput;
};
export type IncluyeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncluyeWhereInput;
    limit?: number;
};
export type IncluyeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyeSelect<ExtArgs> | null;
    omit?: Prisma.IncluyeOmit<ExtArgs> | null;
    include?: Prisma.IncluyeInclude<ExtArgs> | null;
};
