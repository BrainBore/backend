import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type IncluyePosgradoModel = runtime.Types.Result.DefaultSelection<Prisma.$IncluyePosgradoPayload>;
export type AggregateIncluyePosgrado = {
    _count: IncluyePosgradoCountAggregateOutputType | null;
    _avg: IncluyePosgradoAvgAggregateOutputType | null;
    _sum: IncluyePosgradoSumAggregateOutputType | null;
    _min: IncluyePosgradoMinAggregateOutputType | null;
    _max: IncluyePosgradoMaxAggregateOutputType | null;
};
export type IncluyePosgradoAvgAggregateOutputType = {
    idModulo: number | null;
};
export type IncluyePosgradoSumAggregateOutputType = {
    idModulo: number | null;
};
export type IncluyePosgradoMinAggregateOutputType = {
    idModulo: number | null;
    horasPresencial: string | null;
    horasInvestigacion: string | null;
};
export type IncluyePosgradoMaxAggregateOutputType = {
    idModulo: number | null;
    horasPresencial: string | null;
    horasInvestigacion: string | null;
};
export type IncluyePosgradoCountAggregateOutputType = {
    idModulo: number;
    horasPresencial: number;
    horasInvestigacion: number;
    _all: number;
};
export type IncluyePosgradoAvgAggregateInputType = {
    idModulo?: true;
};
export type IncluyePosgradoSumAggregateInputType = {
    idModulo?: true;
};
export type IncluyePosgradoMinAggregateInputType = {
    idModulo?: true;
    horasPresencial?: true;
    horasInvestigacion?: true;
};
export type IncluyePosgradoMaxAggregateInputType = {
    idModulo?: true;
    horasPresencial?: true;
    horasInvestigacion?: true;
};
export type IncluyePosgradoCountAggregateInputType = {
    idModulo?: true;
    horasPresencial?: true;
    horasInvestigacion?: true;
    _all?: true;
};
export type IncluyePosgradoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncluyePosgradoWhereInput;
    orderBy?: Prisma.IncluyePosgradoOrderByWithRelationInput | Prisma.IncluyePosgradoOrderByWithRelationInput[];
    cursor?: Prisma.IncluyePosgradoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IncluyePosgradoCountAggregateInputType;
    _avg?: IncluyePosgradoAvgAggregateInputType;
    _sum?: IncluyePosgradoSumAggregateInputType;
    _min?: IncluyePosgradoMinAggregateInputType;
    _max?: IncluyePosgradoMaxAggregateInputType;
};
export type GetIncluyePosgradoAggregateType<T extends IncluyePosgradoAggregateArgs> = {
    [P in keyof T & keyof AggregateIncluyePosgrado]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIncluyePosgrado[P]> : Prisma.GetScalarType<T[P], AggregateIncluyePosgrado[P]>;
};
export type IncluyePosgradoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncluyePosgradoWhereInput;
    orderBy?: Prisma.IncluyePosgradoOrderByWithAggregationInput | Prisma.IncluyePosgradoOrderByWithAggregationInput[];
    by: Prisma.IncluyePosgradoScalarFieldEnum[] | Prisma.IncluyePosgradoScalarFieldEnum;
    having?: Prisma.IncluyePosgradoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IncluyePosgradoCountAggregateInputType | true;
    _avg?: IncluyePosgradoAvgAggregateInputType;
    _sum?: IncluyePosgradoSumAggregateInputType;
    _min?: IncluyePosgradoMinAggregateInputType;
    _max?: IncluyePosgradoMaxAggregateInputType;
};
export type IncluyePosgradoGroupByOutputType = {
    idModulo: number;
    horasPresencial: string;
    horasInvestigacion: string;
    _count: IncluyePosgradoCountAggregateOutputType | null;
    _avg: IncluyePosgradoAvgAggregateOutputType | null;
    _sum: IncluyePosgradoSumAggregateOutputType | null;
    _min: IncluyePosgradoMinAggregateOutputType | null;
    _max: IncluyePosgradoMaxAggregateOutputType | null;
};
export type GetIncluyePosgradoGroupByPayload<T extends IncluyePosgradoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IncluyePosgradoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IncluyePosgradoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IncluyePosgradoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IncluyePosgradoGroupByOutputType[P]>;
}>>;
export type IncluyePosgradoWhereInput = {
    AND?: Prisma.IncluyePosgradoWhereInput | Prisma.IncluyePosgradoWhereInput[];
    OR?: Prisma.IncluyePosgradoWhereInput[];
    NOT?: Prisma.IncluyePosgradoWhereInput | Prisma.IncluyePosgradoWhereInput[];
    idModulo?: Prisma.IntFilter<"IncluyePosgrado"> | number;
    horasPresencial?: Prisma.StringFilter<"IncluyePosgrado"> | string;
    horasInvestigacion?: Prisma.StringFilter<"IncluyePosgrado"> | string;
    modulo?: Prisma.XOR<Prisma.ModuloScalarRelationFilter, Prisma.ModuloWhereInput>;
};
export type IncluyePosgradoOrderByWithRelationInput = {
    idModulo?: Prisma.SortOrder;
    horasPresencial?: Prisma.SortOrder;
    horasInvestigacion?: Prisma.SortOrder;
    modulo?: Prisma.ModuloOrderByWithRelationInput;
};
export type IncluyePosgradoWhereUniqueInput = Prisma.AtLeast<{
    idModulo?: number;
    AND?: Prisma.IncluyePosgradoWhereInput | Prisma.IncluyePosgradoWhereInput[];
    OR?: Prisma.IncluyePosgradoWhereInput[];
    NOT?: Prisma.IncluyePosgradoWhereInput | Prisma.IncluyePosgradoWhereInput[];
    horasPresencial?: Prisma.StringFilter<"IncluyePosgrado"> | string;
    horasInvestigacion?: Prisma.StringFilter<"IncluyePosgrado"> | string;
    modulo?: Prisma.XOR<Prisma.ModuloScalarRelationFilter, Prisma.ModuloWhereInput>;
}, "idModulo">;
export type IncluyePosgradoOrderByWithAggregationInput = {
    idModulo?: Prisma.SortOrder;
    horasPresencial?: Prisma.SortOrder;
    horasInvestigacion?: Prisma.SortOrder;
    _count?: Prisma.IncluyePosgradoCountOrderByAggregateInput;
    _avg?: Prisma.IncluyePosgradoAvgOrderByAggregateInput;
    _max?: Prisma.IncluyePosgradoMaxOrderByAggregateInput;
    _min?: Prisma.IncluyePosgradoMinOrderByAggregateInput;
    _sum?: Prisma.IncluyePosgradoSumOrderByAggregateInput;
};
export type IncluyePosgradoScalarWhereWithAggregatesInput = {
    AND?: Prisma.IncluyePosgradoScalarWhereWithAggregatesInput | Prisma.IncluyePosgradoScalarWhereWithAggregatesInput[];
    OR?: Prisma.IncluyePosgradoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IncluyePosgradoScalarWhereWithAggregatesInput | Prisma.IncluyePosgradoScalarWhereWithAggregatesInput[];
    idModulo?: Prisma.IntWithAggregatesFilter<"IncluyePosgrado"> | number;
    horasPresencial?: Prisma.StringWithAggregatesFilter<"IncluyePosgrado"> | string;
    horasInvestigacion?: Prisma.StringWithAggregatesFilter<"IncluyePosgrado"> | string;
};
export type IncluyePosgradoCreateInput = {
    horasPresencial: string;
    horasInvestigacion: string;
    modulo: Prisma.ModuloCreateNestedOneWithoutIncluyeInput;
};
export type IncluyePosgradoUncheckedCreateInput = {
    idModulo: number;
    horasPresencial: string;
    horasInvestigacion: string;
};
export type IncluyePosgradoUpdateInput = {
    horasPresencial?: Prisma.StringFieldUpdateOperationsInput | string;
    horasInvestigacion?: Prisma.StringFieldUpdateOperationsInput | string;
    modulo?: Prisma.ModuloUpdateOneRequiredWithoutIncluyeNestedInput;
};
export type IncluyePosgradoUncheckedUpdateInput = {
    idModulo?: Prisma.IntFieldUpdateOperationsInput | number;
    horasPresencial?: Prisma.StringFieldUpdateOperationsInput | string;
    horasInvestigacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IncluyePosgradoCreateManyInput = {
    idModulo: number;
    horasPresencial: string;
    horasInvestigacion: string;
};
export type IncluyePosgradoUpdateManyMutationInput = {
    horasPresencial?: Prisma.StringFieldUpdateOperationsInput | string;
    horasInvestigacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IncluyePosgradoUncheckedUpdateManyInput = {
    idModulo?: Prisma.IntFieldUpdateOperationsInput | number;
    horasPresencial?: Prisma.StringFieldUpdateOperationsInput | string;
    horasInvestigacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IncluyePosgradoNullableScalarRelationFilter = {
    is?: Prisma.IncluyePosgradoWhereInput | null;
    isNot?: Prisma.IncluyePosgradoWhereInput | null;
};
export type IncluyePosgradoCountOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
    horasPresencial?: Prisma.SortOrder;
    horasInvestigacion?: Prisma.SortOrder;
};
export type IncluyePosgradoAvgOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
};
export type IncluyePosgradoMaxOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
    horasPresencial?: Prisma.SortOrder;
    horasInvestigacion?: Prisma.SortOrder;
};
export type IncluyePosgradoMinOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
    horasPresencial?: Prisma.SortOrder;
    horasInvestigacion?: Prisma.SortOrder;
};
export type IncluyePosgradoSumOrderByAggregateInput = {
    idModulo?: Prisma.SortOrder;
};
export type IncluyePosgradoCreateNestedOneWithoutModuloInput = {
    create?: Prisma.XOR<Prisma.IncluyePosgradoCreateWithoutModuloInput, Prisma.IncluyePosgradoUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.IncluyePosgradoCreateOrConnectWithoutModuloInput;
    connect?: Prisma.IncluyePosgradoWhereUniqueInput;
};
export type IncluyePosgradoUncheckedCreateNestedOneWithoutModuloInput = {
    create?: Prisma.XOR<Prisma.IncluyePosgradoCreateWithoutModuloInput, Prisma.IncluyePosgradoUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.IncluyePosgradoCreateOrConnectWithoutModuloInput;
    connect?: Prisma.IncluyePosgradoWhereUniqueInput;
};
export type IncluyePosgradoUpdateOneWithoutModuloNestedInput = {
    create?: Prisma.XOR<Prisma.IncluyePosgradoCreateWithoutModuloInput, Prisma.IncluyePosgradoUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.IncluyePosgradoCreateOrConnectWithoutModuloInput;
    upsert?: Prisma.IncluyePosgradoUpsertWithoutModuloInput;
    disconnect?: Prisma.IncluyePosgradoWhereInput | boolean;
    delete?: Prisma.IncluyePosgradoWhereInput | boolean;
    connect?: Prisma.IncluyePosgradoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IncluyePosgradoUpdateToOneWithWhereWithoutModuloInput, Prisma.IncluyePosgradoUpdateWithoutModuloInput>, Prisma.IncluyePosgradoUncheckedUpdateWithoutModuloInput>;
};
export type IncluyePosgradoUncheckedUpdateOneWithoutModuloNestedInput = {
    create?: Prisma.XOR<Prisma.IncluyePosgradoCreateWithoutModuloInput, Prisma.IncluyePosgradoUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.IncluyePosgradoCreateOrConnectWithoutModuloInput;
    upsert?: Prisma.IncluyePosgradoUpsertWithoutModuloInput;
    disconnect?: Prisma.IncluyePosgradoWhereInput | boolean;
    delete?: Prisma.IncluyePosgradoWhereInput | boolean;
    connect?: Prisma.IncluyePosgradoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.IncluyePosgradoUpdateToOneWithWhereWithoutModuloInput, Prisma.IncluyePosgradoUpdateWithoutModuloInput>, Prisma.IncluyePosgradoUncheckedUpdateWithoutModuloInput>;
};
export type IncluyePosgradoCreateWithoutModuloInput = {
    horasPresencial: string;
    horasInvestigacion: string;
};
export type IncluyePosgradoUncheckedCreateWithoutModuloInput = {
    horasPresencial: string;
    horasInvestigacion: string;
};
export type IncluyePosgradoCreateOrConnectWithoutModuloInput = {
    where: Prisma.IncluyePosgradoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncluyePosgradoCreateWithoutModuloInput, Prisma.IncluyePosgradoUncheckedCreateWithoutModuloInput>;
};
export type IncluyePosgradoUpsertWithoutModuloInput = {
    update: Prisma.XOR<Prisma.IncluyePosgradoUpdateWithoutModuloInput, Prisma.IncluyePosgradoUncheckedUpdateWithoutModuloInput>;
    create: Prisma.XOR<Prisma.IncluyePosgradoCreateWithoutModuloInput, Prisma.IncluyePosgradoUncheckedCreateWithoutModuloInput>;
    where?: Prisma.IncluyePosgradoWhereInput;
};
export type IncluyePosgradoUpdateToOneWithWhereWithoutModuloInput = {
    where?: Prisma.IncluyePosgradoWhereInput;
    data: Prisma.XOR<Prisma.IncluyePosgradoUpdateWithoutModuloInput, Prisma.IncluyePosgradoUncheckedUpdateWithoutModuloInput>;
};
export type IncluyePosgradoUpdateWithoutModuloInput = {
    horasPresencial?: Prisma.StringFieldUpdateOperationsInput | string;
    horasInvestigacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IncluyePosgradoUncheckedUpdateWithoutModuloInput = {
    horasPresencial?: Prisma.StringFieldUpdateOperationsInput | string;
    horasInvestigacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type IncluyePosgradoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idModulo?: boolean;
    horasPresencial?: boolean;
    horasInvestigacion?: boolean;
    modulo?: boolean | Prisma.ModuloDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incluyePosgrado"]>;
export type IncluyePosgradoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idModulo?: boolean;
    horasPresencial?: boolean;
    horasInvestigacion?: boolean;
    modulo?: boolean | Prisma.ModuloDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incluyePosgrado"]>;
export type IncluyePosgradoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idModulo?: boolean;
    horasPresencial?: boolean;
    horasInvestigacion?: boolean;
    modulo?: boolean | Prisma.ModuloDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["incluyePosgrado"]>;
export type IncluyePosgradoSelectScalar = {
    idModulo?: boolean;
    horasPresencial?: boolean;
    horasInvestigacion?: boolean;
};
export type IncluyePosgradoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idModulo" | "horasPresencial" | "horasInvestigacion", ExtArgs["result"]["incluyePosgrado"]>;
export type IncluyePosgradoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modulo?: boolean | Prisma.ModuloDefaultArgs<ExtArgs>;
};
export type IncluyePosgradoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modulo?: boolean | Prisma.ModuloDefaultArgs<ExtArgs>;
};
export type IncluyePosgradoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modulo?: boolean | Prisma.ModuloDefaultArgs<ExtArgs>;
};
export type $IncluyePosgradoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "IncluyePosgrado";
    objects: {
        modulo: Prisma.$ModuloPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idModulo: number;
        horasPresencial: string;
        horasInvestigacion: string;
    }, ExtArgs["result"]["incluyePosgrado"]>;
    composites: {};
};
export type IncluyePosgradoGetPayload<S extends boolean | null | undefined | IncluyePosgradoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload, S>;
export type IncluyePosgradoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IncluyePosgradoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IncluyePosgradoCountAggregateInputType | true;
};
export interface IncluyePosgradoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['IncluyePosgrado'];
        meta: {
            name: 'IncluyePosgrado';
        };
    };
    findUnique<T extends IncluyePosgradoFindUniqueArgs>(args: Prisma.SelectSubset<T, IncluyePosgradoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IncluyePosgradoClient<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IncluyePosgradoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IncluyePosgradoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncluyePosgradoClient<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IncluyePosgradoFindFirstArgs>(args?: Prisma.SelectSubset<T, IncluyePosgradoFindFirstArgs<ExtArgs>>): Prisma.Prisma__IncluyePosgradoClient<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IncluyePosgradoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IncluyePosgradoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IncluyePosgradoClient<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IncluyePosgradoFindManyArgs>(args?: Prisma.SelectSubset<T, IncluyePosgradoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IncluyePosgradoCreateArgs>(args: Prisma.SelectSubset<T, IncluyePosgradoCreateArgs<ExtArgs>>): Prisma.Prisma__IncluyePosgradoClient<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IncluyePosgradoCreateManyArgs>(args?: Prisma.SelectSubset<T, IncluyePosgradoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IncluyePosgradoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IncluyePosgradoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IncluyePosgradoDeleteArgs>(args: Prisma.SelectSubset<T, IncluyePosgradoDeleteArgs<ExtArgs>>): Prisma.Prisma__IncluyePosgradoClient<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IncluyePosgradoUpdateArgs>(args: Prisma.SelectSubset<T, IncluyePosgradoUpdateArgs<ExtArgs>>): Prisma.Prisma__IncluyePosgradoClient<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IncluyePosgradoDeleteManyArgs>(args?: Prisma.SelectSubset<T, IncluyePosgradoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IncluyePosgradoUpdateManyArgs>(args: Prisma.SelectSubset<T, IncluyePosgradoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IncluyePosgradoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IncluyePosgradoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IncluyePosgradoUpsertArgs>(args: Prisma.SelectSubset<T, IncluyePosgradoUpsertArgs<ExtArgs>>): Prisma.Prisma__IncluyePosgradoClient<runtime.Types.Result.GetResult<Prisma.$IncluyePosgradoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IncluyePosgradoCountArgs>(args?: Prisma.Subset<T, IncluyePosgradoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IncluyePosgradoCountAggregateOutputType> : number>;
    aggregate<T extends IncluyePosgradoAggregateArgs>(args: Prisma.Subset<T, IncluyePosgradoAggregateArgs>): Prisma.PrismaPromise<GetIncluyePosgradoAggregateType<T>>;
    groupBy<T extends IncluyePosgradoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IncluyePosgradoGroupByArgs['orderBy'];
    } : {
        orderBy?: IncluyePosgradoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IncluyePosgradoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncluyePosgradoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IncluyePosgradoFieldRefs;
}
export interface Prisma__IncluyePosgradoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    modulo<T extends Prisma.ModuloDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ModuloDefaultArgs<ExtArgs>>): Prisma.Prisma__ModuloClient<runtime.Types.Result.GetResult<Prisma.$ModuloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IncluyePosgradoFieldRefs {
    readonly idModulo: Prisma.FieldRef<"IncluyePosgrado", 'Int'>;
    readonly horasPresencial: Prisma.FieldRef<"IncluyePosgrado", 'String'>;
    readonly horasInvestigacion: Prisma.FieldRef<"IncluyePosgrado", 'String'>;
}
export type IncluyePosgradoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    where: Prisma.IncluyePosgradoWhereUniqueInput;
};
export type IncluyePosgradoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    where: Prisma.IncluyePosgradoWhereUniqueInput;
};
export type IncluyePosgradoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    where?: Prisma.IncluyePosgradoWhereInput;
    orderBy?: Prisma.IncluyePosgradoOrderByWithRelationInput | Prisma.IncluyePosgradoOrderByWithRelationInput[];
    cursor?: Prisma.IncluyePosgradoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncluyePosgradoScalarFieldEnum | Prisma.IncluyePosgradoScalarFieldEnum[];
};
export type IncluyePosgradoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    where?: Prisma.IncluyePosgradoWhereInput;
    orderBy?: Prisma.IncluyePosgradoOrderByWithRelationInput | Prisma.IncluyePosgradoOrderByWithRelationInput[];
    cursor?: Prisma.IncluyePosgradoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncluyePosgradoScalarFieldEnum | Prisma.IncluyePosgradoScalarFieldEnum[];
};
export type IncluyePosgradoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    where?: Prisma.IncluyePosgradoWhereInput;
    orderBy?: Prisma.IncluyePosgradoOrderByWithRelationInput | Prisma.IncluyePosgradoOrderByWithRelationInput[];
    cursor?: Prisma.IncluyePosgradoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IncluyePosgradoScalarFieldEnum | Prisma.IncluyePosgradoScalarFieldEnum[];
};
export type IncluyePosgradoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncluyePosgradoCreateInput, Prisma.IncluyePosgradoUncheckedCreateInput>;
};
export type IncluyePosgradoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IncluyePosgradoCreateManyInput | Prisma.IncluyePosgradoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IncluyePosgradoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    data: Prisma.IncluyePosgradoCreateManyInput | Prisma.IncluyePosgradoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IncluyePosgradoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IncluyePosgradoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncluyePosgradoUpdateInput, Prisma.IncluyePosgradoUncheckedUpdateInput>;
    where: Prisma.IncluyePosgradoWhereUniqueInput;
};
export type IncluyePosgradoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IncluyePosgradoUpdateManyMutationInput, Prisma.IncluyePosgradoUncheckedUpdateManyInput>;
    where?: Prisma.IncluyePosgradoWhereInput;
    limit?: number;
};
export type IncluyePosgradoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IncluyePosgradoUpdateManyMutationInput, Prisma.IncluyePosgradoUncheckedUpdateManyInput>;
    where?: Prisma.IncluyePosgradoWhereInput;
    limit?: number;
    include?: Prisma.IncluyePosgradoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IncluyePosgradoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    where: Prisma.IncluyePosgradoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IncluyePosgradoCreateInput, Prisma.IncluyePosgradoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IncluyePosgradoUpdateInput, Prisma.IncluyePosgradoUncheckedUpdateInput>;
};
export type IncluyePosgradoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
    where: Prisma.IncluyePosgradoWhereUniqueInput;
};
export type IncluyePosgradoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncluyePosgradoWhereInput;
    limit?: number;
};
export type IncluyePosgradoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IncluyePosgradoSelect<ExtArgs> | null;
    omit?: Prisma.IncluyePosgradoOmit<ExtArgs> | null;
    include?: Prisma.IncluyePosgradoInclude<ExtArgs> | null;
};
