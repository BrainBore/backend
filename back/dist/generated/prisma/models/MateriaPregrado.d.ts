import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MateriaPregradoModel = runtime.Types.Result.DefaultSelection<Prisma.$MateriaPregradoPayload>;
export type AggregateMateriaPregrado = {
    _count: MateriaPregradoCountAggregateOutputType | null;
    _avg: MateriaPregradoAvgAggregateOutputType | null;
    _sum: MateriaPregradoSumAggregateOutputType | null;
    _min: MateriaPregradoMinAggregateOutputType | null;
    _max: MateriaPregradoMaxAggregateOutputType | null;
};
export type MateriaPregradoAvgAggregateOutputType = {
    idMateriaAct: number | null;
    horasMateria: number | null;
    semestre: number | null;
};
export type MateriaPregradoSumAggregateOutputType = {
    idMateriaAct: number | null;
    horasMateria: number | null;
    semestre: number | null;
};
export type MateriaPregradoMinAggregateOutputType = {
    idMateriaAct: number | null;
    siglaMateriaAct: string | null;
    nombreMateriaAct: string | null;
    horasMateria: number | null;
    prerrequisitos: string | null;
    semestre: number | null;
};
export type MateriaPregradoMaxAggregateOutputType = {
    idMateriaAct: number | null;
    siglaMateriaAct: string | null;
    nombreMateriaAct: string | null;
    horasMateria: number | null;
    prerrequisitos: string | null;
    semestre: number | null;
};
export type MateriaPregradoCountAggregateOutputType = {
    idMateriaAct: number;
    siglaMateriaAct: number;
    nombreMateriaAct: number;
    horasMateria: number;
    prerrequisitos: number;
    semestre: number;
    _all: number;
};
export type MateriaPregradoAvgAggregateInputType = {
    idMateriaAct?: true;
    horasMateria?: true;
    semestre?: true;
};
export type MateriaPregradoSumAggregateInputType = {
    idMateriaAct?: true;
    horasMateria?: true;
    semestre?: true;
};
export type MateriaPregradoMinAggregateInputType = {
    idMateriaAct?: true;
    siglaMateriaAct?: true;
    nombreMateriaAct?: true;
    horasMateria?: true;
    prerrequisitos?: true;
    semestre?: true;
};
export type MateriaPregradoMaxAggregateInputType = {
    idMateriaAct?: true;
    siglaMateriaAct?: true;
    nombreMateriaAct?: true;
    horasMateria?: true;
    prerrequisitos?: true;
    semestre?: true;
};
export type MateriaPregradoCountAggregateInputType = {
    idMateriaAct?: true;
    siglaMateriaAct?: true;
    nombreMateriaAct?: true;
    horasMateria?: true;
    prerrequisitos?: true;
    semestre?: true;
    _all?: true;
};
export type MateriaPregradoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MateriaPregradoWhereInput;
    orderBy?: Prisma.MateriaPregradoOrderByWithRelationInput | Prisma.MateriaPregradoOrderByWithRelationInput[];
    cursor?: Prisma.MateriaPregradoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MateriaPregradoCountAggregateInputType;
    _avg?: MateriaPregradoAvgAggregateInputType;
    _sum?: MateriaPregradoSumAggregateInputType;
    _min?: MateriaPregradoMinAggregateInputType;
    _max?: MateriaPregradoMaxAggregateInputType;
};
export type GetMateriaPregradoAggregateType<T extends MateriaPregradoAggregateArgs> = {
    [P in keyof T & keyof AggregateMateriaPregrado]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMateriaPregrado[P]> : Prisma.GetScalarType<T[P], AggregateMateriaPregrado[P]>;
};
export type MateriaPregradoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MateriaPregradoWhereInput;
    orderBy?: Prisma.MateriaPregradoOrderByWithAggregationInput | Prisma.MateriaPregradoOrderByWithAggregationInput[];
    by: Prisma.MateriaPregradoScalarFieldEnum[] | Prisma.MateriaPregradoScalarFieldEnum;
    having?: Prisma.MateriaPregradoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MateriaPregradoCountAggregateInputType | true;
    _avg?: MateriaPregradoAvgAggregateInputType;
    _sum?: MateriaPregradoSumAggregateInputType;
    _min?: MateriaPregradoMinAggregateInputType;
    _max?: MateriaPregradoMaxAggregateInputType;
};
export type MateriaPregradoGroupByOutputType = {
    idMateriaAct: number;
    siglaMateriaAct: string;
    nombreMateriaAct: string;
    horasMateria: number;
    prerrequisitos: string;
    semestre: number;
    _count: MateriaPregradoCountAggregateOutputType | null;
    _avg: MateriaPregradoAvgAggregateOutputType | null;
    _sum: MateriaPregradoSumAggregateOutputType | null;
    _min: MateriaPregradoMinAggregateOutputType | null;
    _max: MateriaPregradoMaxAggregateOutputType | null;
};
export type GetMateriaPregradoGroupByPayload<T extends MateriaPregradoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MateriaPregradoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MateriaPregradoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MateriaPregradoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MateriaPregradoGroupByOutputType[P]>;
}>>;
export type MateriaPregradoWhereInput = {
    AND?: Prisma.MateriaPregradoWhereInput | Prisma.MateriaPregradoWhereInput[];
    OR?: Prisma.MateriaPregradoWhereInput[];
    NOT?: Prisma.MateriaPregradoWhereInput | Prisma.MateriaPregradoWhereInput[];
    idMateriaAct?: Prisma.IntFilter<"MateriaPregrado"> | number;
    siglaMateriaAct?: Prisma.StringFilter<"MateriaPregrado"> | string;
    nombreMateriaAct?: Prisma.StringFilter<"MateriaPregrado"> | string;
    horasMateria?: Prisma.IntFilter<"MateriaPregrado"> | number;
    prerrequisitos?: Prisma.StringFilter<"MateriaPregrado"> | string;
    semestre?: Prisma.IntFilter<"MateriaPregrado"> | number;
    incluye?: Prisma.IncluyeListRelationFilter;
};
export type MateriaPregradoOrderByWithRelationInput = {
    idMateriaAct?: Prisma.SortOrder;
    siglaMateriaAct?: Prisma.SortOrder;
    nombreMateriaAct?: Prisma.SortOrder;
    horasMateria?: Prisma.SortOrder;
    prerrequisitos?: Prisma.SortOrder;
    semestre?: Prisma.SortOrder;
    incluye?: Prisma.IncluyeOrderByRelationAggregateInput;
};
export type MateriaPregradoWhereUniqueInput = Prisma.AtLeast<{
    idMateriaAct?: number;
    AND?: Prisma.MateriaPregradoWhereInput | Prisma.MateriaPregradoWhereInput[];
    OR?: Prisma.MateriaPregradoWhereInput[];
    NOT?: Prisma.MateriaPregradoWhereInput | Prisma.MateriaPregradoWhereInput[];
    siglaMateriaAct?: Prisma.StringFilter<"MateriaPregrado"> | string;
    nombreMateriaAct?: Prisma.StringFilter<"MateriaPregrado"> | string;
    horasMateria?: Prisma.IntFilter<"MateriaPregrado"> | number;
    prerrequisitos?: Prisma.StringFilter<"MateriaPregrado"> | string;
    semestre?: Prisma.IntFilter<"MateriaPregrado"> | number;
    incluye?: Prisma.IncluyeListRelationFilter;
}, "idMateriaAct">;
export type MateriaPregradoOrderByWithAggregationInput = {
    idMateriaAct?: Prisma.SortOrder;
    siglaMateriaAct?: Prisma.SortOrder;
    nombreMateriaAct?: Prisma.SortOrder;
    horasMateria?: Prisma.SortOrder;
    prerrequisitos?: Prisma.SortOrder;
    semestre?: Prisma.SortOrder;
    _count?: Prisma.MateriaPregradoCountOrderByAggregateInput;
    _avg?: Prisma.MateriaPregradoAvgOrderByAggregateInput;
    _max?: Prisma.MateriaPregradoMaxOrderByAggregateInput;
    _min?: Prisma.MateriaPregradoMinOrderByAggregateInput;
    _sum?: Prisma.MateriaPregradoSumOrderByAggregateInput;
};
export type MateriaPregradoScalarWhereWithAggregatesInput = {
    AND?: Prisma.MateriaPregradoScalarWhereWithAggregatesInput | Prisma.MateriaPregradoScalarWhereWithAggregatesInput[];
    OR?: Prisma.MateriaPregradoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MateriaPregradoScalarWhereWithAggregatesInput | Prisma.MateriaPregradoScalarWhereWithAggregatesInput[];
    idMateriaAct?: Prisma.IntWithAggregatesFilter<"MateriaPregrado"> | number;
    siglaMateriaAct?: Prisma.StringWithAggregatesFilter<"MateriaPregrado"> | string;
    nombreMateriaAct?: Prisma.StringWithAggregatesFilter<"MateriaPregrado"> | string;
    horasMateria?: Prisma.IntWithAggregatesFilter<"MateriaPregrado"> | number;
    prerrequisitos?: Prisma.StringWithAggregatesFilter<"MateriaPregrado"> | string;
    semestre?: Prisma.IntWithAggregatesFilter<"MateriaPregrado"> | number;
};
export type MateriaPregradoCreateInput = {
    siglaMateriaAct: string;
    nombreMateriaAct: string;
    horasMateria: number;
    prerrequisitos: string;
    semestre: number;
    incluye?: Prisma.IncluyeCreateNestedManyWithoutMateriaInput;
};
export type MateriaPregradoUncheckedCreateInput = {
    idMateriaAct?: number;
    siglaMateriaAct: string;
    nombreMateriaAct: string;
    horasMateria: number;
    prerrequisitos: string;
    semestre: number;
    incluye?: Prisma.IncluyeUncheckedCreateNestedManyWithoutMateriaInput;
};
export type MateriaPregradoUpdateInput = {
    siglaMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    horasMateria?: Prisma.IntFieldUpdateOperationsInput | number;
    prerrequisitos?: Prisma.StringFieldUpdateOperationsInput | string;
    semestre?: Prisma.IntFieldUpdateOperationsInput | number;
    incluye?: Prisma.IncluyeUpdateManyWithoutMateriaNestedInput;
};
export type MateriaPregradoUncheckedUpdateInput = {
    idMateriaAct?: Prisma.IntFieldUpdateOperationsInput | number;
    siglaMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    horasMateria?: Prisma.IntFieldUpdateOperationsInput | number;
    prerrequisitos?: Prisma.StringFieldUpdateOperationsInput | string;
    semestre?: Prisma.IntFieldUpdateOperationsInput | number;
    incluye?: Prisma.IncluyeUncheckedUpdateManyWithoutMateriaNestedInput;
};
export type MateriaPregradoCreateManyInput = {
    idMateriaAct?: number;
    siglaMateriaAct: string;
    nombreMateriaAct: string;
    horasMateria: number;
    prerrequisitos: string;
    semestre: number;
};
export type MateriaPregradoUpdateManyMutationInput = {
    siglaMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    horasMateria?: Prisma.IntFieldUpdateOperationsInput | number;
    prerrequisitos?: Prisma.StringFieldUpdateOperationsInput | string;
    semestre?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MateriaPregradoUncheckedUpdateManyInput = {
    idMateriaAct?: Prisma.IntFieldUpdateOperationsInput | number;
    siglaMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    horasMateria?: Prisma.IntFieldUpdateOperationsInput | number;
    prerrequisitos?: Prisma.StringFieldUpdateOperationsInput | string;
    semestre?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MateriaPregradoCountOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    siglaMateriaAct?: Prisma.SortOrder;
    nombreMateriaAct?: Prisma.SortOrder;
    horasMateria?: Prisma.SortOrder;
    prerrequisitos?: Prisma.SortOrder;
    semestre?: Prisma.SortOrder;
};
export type MateriaPregradoAvgOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    horasMateria?: Prisma.SortOrder;
    semestre?: Prisma.SortOrder;
};
export type MateriaPregradoMaxOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    siglaMateriaAct?: Prisma.SortOrder;
    nombreMateriaAct?: Prisma.SortOrder;
    horasMateria?: Prisma.SortOrder;
    prerrequisitos?: Prisma.SortOrder;
    semestre?: Prisma.SortOrder;
};
export type MateriaPregradoMinOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    siglaMateriaAct?: Prisma.SortOrder;
    nombreMateriaAct?: Prisma.SortOrder;
    horasMateria?: Prisma.SortOrder;
    prerrequisitos?: Prisma.SortOrder;
    semestre?: Prisma.SortOrder;
};
export type MateriaPregradoSumOrderByAggregateInput = {
    idMateriaAct?: Prisma.SortOrder;
    horasMateria?: Prisma.SortOrder;
    semestre?: Prisma.SortOrder;
};
export type MateriaPregradoScalarRelationFilter = {
    is?: Prisma.MateriaPregradoWhereInput;
    isNot?: Prisma.MateriaPregradoWhereInput;
};
export type MateriaPregradoCreateNestedOneWithoutIncluyeInput = {
    create?: Prisma.XOR<Prisma.MateriaPregradoCreateWithoutIncluyeInput, Prisma.MateriaPregradoUncheckedCreateWithoutIncluyeInput>;
    connectOrCreate?: Prisma.MateriaPregradoCreateOrConnectWithoutIncluyeInput;
    connect?: Prisma.MateriaPregradoWhereUniqueInput;
};
export type MateriaPregradoUpdateOneRequiredWithoutIncluyeNestedInput = {
    create?: Prisma.XOR<Prisma.MateriaPregradoCreateWithoutIncluyeInput, Prisma.MateriaPregradoUncheckedCreateWithoutIncluyeInput>;
    connectOrCreate?: Prisma.MateriaPregradoCreateOrConnectWithoutIncluyeInput;
    upsert?: Prisma.MateriaPregradoUpsertWithoutIncluyeInput;
    connect?: Prisma.MateriaPregradoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MateriaPregradoUpdateToOneWithWhereWithoutIncluyeInput, Prisma.MateriaPregradoUpdateWithoutIncluyeInput>, Prisma.MateriaPregradoUncheckedUpdateWithoutIncluyeInput>;
};
export type MateriaPregradoCreateWithoutIncluyeInput = {
    siglaMateriaAct: string;
    nombreMateriaAct: string;
    horasMateria: number;
    prerrequisitos: string;
    semestre: number;
};
export type MateriaPregradoUncheckedCreateWithoutIncluyeInput = {
    idMateriaAct?: number;
    siglaMateriaAct: string;
    nombreMateriaAct: string;
    horasMateria: number;
    prerrequisitos: string;
    semestre: number;
};
export type MateriaPregradoCreateOrConnectWithoutIncluyeInput = {
    where: Prisma.MateriaPregradoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MateriaPregradoCreateWithoutIncluyeInput, Prisma.MateriaPregradoUncheckedCreateWithoutIncluyeInput>;
};
export type MateriaPregradoUpsertWithoutIncluyeInput = {
    update: Prisma.XOR<Prisma.MateriaPregradoUpdateWithoutIncluyeInput, Prisma.MateriaPregradoUncheckedUpdateWithoutIncluyeInput>;
    create: Prisma.XOR<Prisma.MateriaPregradoCreateWithoutIncluyeInput, Prisma.MateriaPregradoUncheckedCreateWithoutIncluyeInput>;
    where?: Prisma.MateriaPregradoWhereInput;
};
export type MateriaPregradoUpdateToOneWithWhereWithoutIncluyeInput = {
    where?: Prisma.MateriaPregradoWhereInput;
    data: Prisma.XOR<Prisma.MateriaPregradoUpdateWithoutIncluyeInput, Prisma.MateriaPregradoUncheckedUpdateWithoutIncluyeInput>;
};
export type MateriaPregradoUpdateWithoutIncluyeInput = {
    siglaMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    horasMateria?: Prisma.IntFieldUpdateOperationsInput | number;
    prerrequisitos?: Prisma.StringFieldUpdateOperationsInput | string;
    semestre?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MateriaPregradoUncheckedUpdateWithoutIncluyeInput = {
    idMateriaAct?: Prisma.IntFieldUpdateOperationsInput | number;
    siglaMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreMateriaAct?: Prisma.StringFieldUpdateOperationsInput | string;
    horasMateria?: Prisma.IntFieldUpdateOperationsInput | number;
    prerrequisitos?: Prisma.StringFieldUpdateOperationsInput | string;
    semestre?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MateriaPregradoCountOutputType = {
    incluye: number;
};
export type MateriaPregradoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    incluye?: boolean | MateriaPregradoCountOutputTypeCountIncluyeArgs;
};
export type MateriaPregradoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoCountOutputTypeSelect<ExtArgs> | null;
};
export type MateriaPregradoCountOutputTypeCountIncluyeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncluyeWhereInput;
};
export type MateriaPregradoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idMateriaAct?: boolean;
    siglaMateriaAct?: boolean;
    nombreMateriaAct?: boolean;
    horasMateria?: boolean;
    prerrequisitos?: boolean;
    semestre?: boolean;
    incluye?: boolean | Prisma.MateriaPregrado$incluyeArgs<ExtArgs>;
    _count?: boolean | Prisma.MateriaPregradoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["materiaPregrado"]>;
export type MateriaPregradoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idMateriaAct?: boolean;
    siglaMateriaAct?: boolean;
    nombreMateriaAct?: boolean;
    horasMateria?: boolean;
    prerrequisitos?: boolean;
    semestre?: boolean;
}, ExtArgs["result"]["materiaPregrado"]>;
export type MateriaPregradoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idMateriaAct?: boolean;
    siglaMateriaAct?: boolean;
    nombreMateriaAct?: boolean;
    horasMateria?: boolean;
    prerrequisitos?: boolean;
    semestre?: boolean;
}, ExtArgs["result"]["materiaPregrado"]>;
export type MateriaPregradoSelectScalar = {
    idMateriaAct?: boolean;
    siglaMateriaAct?: boolean;
    nombreMateriaAct?: boolean;
    horasMateria?: boolean;
    prerrequisitos?: boolean;
    semestre?: boolean;
};
export type MateriaPregradoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idMateriaAct" | "siglaMateriaAct" | "nombreMateriaAct" | "horasMateria" | "prerrequisitos" | "semestre", ExtArgs["result"]["materiaPregrado"]>;
export type MateriaPregradoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    incluye?: boolean | Prisma.MateriaPregrado$incluyeArgs<ExtArgs>;
    _count?: boolean | Prisma.MateriaPregradoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MateriaPregradoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type MateriaPregradoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $MateriaPregradoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MateriaPregrado";
    objects: {
        incluye: Prisma.$IncluyePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idMateriaAct: number;
        siglaMateriaAct: string;
        nombreMateriaAct: string;
        horasMateria: number;
        prerrequisitos: string;
        semestre: number;
    }, ExtArgs["result"]["materiaPregrado"]>;
    composites: {};
};
export type MateriaPregradoGetPayload<S extends boolean | null | undefined | MateriaPregradoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload, S>;
export type MateriaPregradoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MateriaPregradoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MateriaPregradoCountAggregateInputType | true;
};
export interface MateriaPregradoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MateriaPregrado'];
        meta: {
            name: 'MateriaPregrado';
        };
    };
    findUnique<T extends MateriaPregradoFindUniqueArgs>(args: Prisma.SelectSubset<T, MateriaPregradoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MateriaPregradoClient<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MateriaPregradoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MateriaPregradoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MateriaPregradoClient<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MateriaPregradoFindFirstArgs>(args?: Prisma.SelectSubset<T, MateriaPregradoFindFirstArgs<ExtArgs>>): Prisma.Prisma__MateriaPregradoClient<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MateriaPregradoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MateriaPregradoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MateriaPregradoClient<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MateriaPregradoFindManyArgs>(args?: Prisma.SelectSubset<T, MateriaPregradoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MateriaPregradoCreateArgs>(args: Prisma.SelectSubset<T, MateriaPregradoCreateArgs<ExtArgs>>): Prisma.Prisma__MateriaPregradoClient<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MateriaPregradoCreateManyArgs>(args?: Prisma.SelectSubset<T, MateriaPregradoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MateriaPregradoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MateriaPregradoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MateriaPregradoDeleteArgs>(args: Prisma.SelectSubset<T, MateriaPregradoDeleteArgs<ExtArgs>>): Prisma.Prisma__MateriaPregradoClient<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MateriaPregradoUpdateArgs>(args: Prisma.SelectSubset<T, MateriaPregradoUpdateArgs<ExtArgs>>): Prisma.Prisma__MateriaPregradoClient<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MateriaPregradoDeleteManyArgs>(args?: Prisma.SelectSubset<T, MateriaPregradoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MateriaPregradoUpdateManyArgs>(args: Prisma.SelectSubset<T, MateriaPregradoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MateriaPregradoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MateriaPregradoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MateriaPregradoUpsertArgs>(args: Prisma.SelectSubset<T, MateriaPregradoUpsertArgs<ExtArgs>>): Prisma.Prisma__MateriaPregradoClient<runtime.Types.Result.GetResult<Prisma.$MateriaPregradoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MateriaPregradoCountArgs>(args?: Prisma.Subset<T, MateriaPregradoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MateriaPregradoCountAggregateOutputType> : number>;
    aggregate<T extends MateriaPregradoAggregateArgs>(args: Prisma.Subset<T, MateriaPregradoAggregateArgs>): Prisma.PrismaPromise<GetMateriaPregradoAggregateType<T>>;
    groupBy<T extends MateriaPregradoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MateriaPregradoGroupByArgs['orderBy'];
    } : {
        orderBy?: MateriaPregradoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MateriaPregradoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaPregradoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MateriaPregradoFieldRefs;
}
export interface Prisma__MateriaPregradoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    incluye<T extends Prisma.MateriaPregrado$incluyeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MateriaPregrado$incluyeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MateriaPregradoFieldRefs {
    readonly idMateriaAct: Prisma.FieldRef<"MateriaPregrado", 'Int'>;
    readonly siglaMateriaAct: Prisma.FieldRef<"MateriaPregrado", 'String'>;
    readonly nombreMateriaAct: Prisma.FieldRef<"MateriaPregrado", 'String'>;
    readonly horasMateria: Prisma.FieldRef<"MateriaPregrado", 'Int'>;
    readonly prerrequisitos: Prisma.FieldRef<"MateriaPregrado", 'String'>;
    readonly semestre: Prisma.FieldRef<"MateriaPregrado", 'Int'>;
}
export type MateriaPregradoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
    where: Prisma.MateriaPregradoWhereUniqueInput;
};
export type MateriaPregradoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
    where: Prisma.MateriaPregradoWhereUniqueInput;
};
export type MateriaPregradoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
    where?: Prisma.MateriaPregradoWhereInput;
    orderBy?: Prisma.MateriaPregradoOrderByWithRelationInput | Prisma.MateriaPregradoOrderByWithRelationInput[];
    cursor?: Prisma.MateriaPregradoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MateriaPregradoScalarFieldEnum | Prisma.MateriaPregradoScalarFieldEnum[];
};
export type MateriaPregradoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
    where?: Prisma.MateriaPregradoWhereInput;
    orderBy?: Prisma.MateriaPregradoOrderByWithRelationInput | Prisma.MateriaPregradoOrderByWithRelationInput[];
    cursor?: Prisma.MateriaPregradoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MateriaPregradoScalarFieldEnum | Prisma.MateriaPregradoScalarFieldEnum[];
};
export type MateriaPregradoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
    where?: Prisma.MateriaPregradoWhereInput;
    orderBy?: Prisma.MateriaPregradoOrderByWithRelationInput | Prisma.MateriaPregradoOrderByWithRelationInput[];
    cursor?: Prisma.MateriaPregradoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MateriaPregradoScalarFieldEnum | Prisma.MateriaPregradoScalarFieldEnum[];
};
export type MateriaPregradoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MateriaPregradoCreateInput, Prisma.MateriaPregradoUncheckedCreateInput>;
};
export type MateriaPregradoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MateriaPregradoCreateManyInput | Prisma.MateriaPregradoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MateriaPregradoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    data: Prisma.MateriaPregradoCreateManyInput | Prisma.MateriaPregradoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MateriaPregradoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MateriaPregradoUpdateInput, Prisma.MateriaPregradoUncheckedUpdateInput>;
    where: Prisma.MateriaPregradoWhereUniqueInput;
};
export type MateriaPregradoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MateriaPregradoUpdateManyMutationInput, Prisma.MateriaPregradoUncheckedUpdateManyInput>;
    where?: Prisma.MateriaPregradoWhereInput;
    limit?: number;
};
export type MateriaPregradoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MateriaPregradoUpdateManyMutationInput, Prisma.MateriaPregradoUncheckedUpdateManyInput>;
    where?: Prisma.MateriaPregradoWhereInput;
    limit?: number;
};
export type MateriaPregradoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
    where: Prisma.MateriaPregradoWhereUniqueInput;
    create: Prisma.XOR<Prisma.MateriaPregradoCreateInput, Prisma.MateriaPregradoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MateriaPregradoUpdateInput, Prisma.MateriaPregradoUncheckedUpdateInput>;
};
export type MateriaPregradoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
    where: Prisma.MateriaPregradoWhereUniqueInput;
};
export type MateriaPregradoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MateriaPregradoWhereInput;
    limit?: number;
};
export type MateriaPregrado$incluyeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MateriaPregradoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MateriaPregradoSelect<ExtArgs> | null;
    omit?: Prisma.MateriaPregradoOmit<ExtArgs> | null;
    include?: Prisma.MateriaPregradoInclude<ExtArgs> | null;
};
