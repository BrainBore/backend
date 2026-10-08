import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PlanEstudiosModel = runtime.Types.Result.DefaultSelection<Prisma.$PlanEstudiosPayload>;
export type AggregatePlanEstudios = {
    _count: PlanEstudiosCountAggregateOutputType | null;
    _avg: PlanEstudiosAvgAggregateOutputType | null;
    _sum: PlanEstudiosSumAggregateOutputType | null;
    _min: PlanEstudiosMinAggregateOutputType | null;
    _max: PlanEstudiosMaxAggregateOutputType | null;
};
export type PlanEstudiosAvgAggregateOutputType = {
    idPlanEstudio: number | null;
};
export type PlanEstudiosSumAggregateOutputType = {
    idPlanEstudio: number | null;
};
export type PlanEstudiosMinAggregateOutputType = {
    idPlanEstudio: number | null;
    nombrePlan: string | null;
};
export type PlanEstudiosMaxAggregateOutputType = {
    idPlanEstudio: number | null;
    nombrePlan: string | null;
};
export type PlanEstudiosCountAggregateOutputType = {
    idPlanEstudio: number;
    nombrePlan: number;
    _all: number;
};
export type PlanEstudiosAvgAggregateInputType = {
    idPlanEstudio?: true;
};
export type PlanEstudiosSumAggregateInputType = {
    idPlanEstudio?: true;
};
export type PlanEstudiosMinAggregateInputType = {
    idPlanEstudio?: true;
    nombrePlan?: true;
};
export type PlanEstudiosMaxAggregateInputType = {
    idPlanEstudio?: true;
    nombrePlan?: true;
};
export type PlanEstudiosCountAggregateInputType = {
    idPlanEstudio?: true;
    nombrePlan?: true;
    _all?: true;
};
export type PlanEstudiosAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanEstudiosWhereInput;
    orderBy?: Prisma.PlanEstudiosOrderByWithRelationInput | Prisma.PlanEstudiosOrderByWithRelationInput[];
    cursor?: Prisma.PlanEstudiosWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlanEstudiosCountAggregateInputType;
    _avg?: PlanEstudiosAvgAggregateInputType;
    _sum?: PlanEstudiosSumAggregateInputType;
    _min?: PlanEstudiosMinAggregateInputType;
    _max?: PlanEstudiosMaxAggregateInputType;
};
export type GetPlanEstudiosAggregateType<T extends PlanEstudiosAggregateArgs> = {
    [P in keyof T & keyof AggregatePlanEstudios]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlanEstudios[P]> : Prisma.GetScalarType<T[P], AggregatePlanEstudios[P]>;
};
export type PlanEstudiosGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanEstudiosWhereInput;
    orderBy?: Prisma.PlanEstudiosOrderByWithAggregationInput | Prisma.PlanEstudiosOrderByWithAggregationInput[];
    by: Prisma.PlanEstudiosScalarFieldEnum[] | Prisma.PlanEstudiosScalarFieldEnum;
    having?: Prisma.PlanEstudiosScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanEstudiosCountAggregateInputType | true;
    _avg?: PlanEstudiosAvgAggregateInputType;
    _sum?: PlanEstudiosSumAggregateInputType;
    _min?: PlanEstudiosMinAggregateInputType;
    _max?: PlanEstudiosMaxAggregateInputType;
};
export type PlanEstudiosGroupByOutputType = {
    idPlanEstudio: number;
    nombrePlan: string;
    _count: PlanEstudiosCountAggregateOutputType | null;
    _avg: PlanEstudiosAvgAggregateOutputType | null;
    _sum: PlanEstudiosSumAggregateOutputType | null;
    _min: PlanEstudiosMinAggregateOutputType | null;
    _max: PlanEstudiosMaxAggregateOutputType | null;
};
export type GetPlanEstudiosGroupByPayload<T extends PlanEstudiosGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlanEstudiosGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlanEstudiosGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlanEstudiosGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlanEstudiosGroupByOutputType[P]>;
}>>;
export type PlanEstudiosWhereInput = {
    AND?: Prisma.PlanEstudiosWhereInput | Prisma.PlanEstudiosWhereInput[];
    OR?: Prisma.PlanEstudiosWhereInput[];
    NOT?: Prisma.PlanEstudiosWhereInput | Prisma.PlanEstudiosWhereInput[];
    idPlanEstudio?: Prisma.IntFilter<"PlanEstudios"> | number;
    nombrePlan?: Prisma.StringFilter<"PlanEstudios"> | string;
    incluye?: Prisma.IncluyeListRelationFilter;
};
export type PlanEstudiosOrderByWithRelationInput = {
    idPlanEstudio?: Prisma.SortOrder;
    nombrePlan?: Prisma.SortOrder;
    incluye?: Prisma.IncluyeOrderByRelationAggregateInput;
};
export type PlanEstudiosWhereUniqueInput = Prisma.AtLeast<{
    idPlanEstudio?: number;
    AND?: Prisma.PlanEstudiosWhereInput | Prisma.PlanEstudiosWhereInput[];
    OR?: Prisma.PlanEstudiosWhereInput[];
    NOT?: Prisma.PlanEstudiosWhereInput | Prisma.PlanEstudiosWhereInput[];
    nombrePlan?: Prisma.StringFilter<"PlanEstudios"> | string;
    incluye?: Prisma.IncluyeListRelationFilter;
}, "idPlanEstudio">;
export type PlanEstudiosOrderByWithAggregationInput = {
    idPlanEstudio?: Prisma.SortOrder;
    nombrePlan?: Prisma.SortOrder;
    _count?: Prisma.PlanEstudiosCountOrderByAggregateInput;
    _avg?: Prisma.PlanEstudiosAvgOrderByAggregateInput;
    _max?: Prisma.PlanEstudiosMaxOrderByAggregateInput;
    _min?: Prisma.PlanEstudiosMinOrderByAggregateInput;
    _sum?: Prisma.PlanEstudiosSumOrderByAggregateInput;
};
export type PlanEstudiosScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlanEstudiosScalarWhereWithAggregatesInput | Prisma.PlanEstudiosScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlanEstudiosScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlanEstudiosScalarWhereWithAggregatesInput | Prisma.PlanEstudiosScalarWhereWithAggregatesInput[];
    idPlanEstudio?: Prisma.IntWithAggregatesFilter<"PlanEstudios"> | number;
    nombrePlan?: Prisma.StringWithAggregatesFilter<"PlanEstudios"> | string;
};
export type PlanEstudiosCreateInput = {
    nombrePlan: string;
    incluye?: Prisma.IncluyeCreateNestedManyWithoutPlanEstudioInput;
};
export type PlanEstudiosUncheckedCreateInput = {
    idPlanEstudio?: number;
    nombrePlan: string;
    incluye?: Prisma.IncluyeUncheckedCreateNestedManyWithoutPlanEstudioInput;
};
export type PlanEstudiosUpdateInput = {
    nombrePlan?: Prisma.StringFieldUpdateOperationsInput | string;
    incluye?: Prisma.IncluyeUpdateManyWithoutPlanEstudioNestedInput;
};
export type PlanEstudiosUncheckedUpdateInput = {
    idPlanEstudio?: Prisma.IntFieldUpdateOperationsInput | number;
    nombrePlan?: Prisma.StringFieldUpdateOperationsInput | string;
    incluye?: Prisma.IncluyeUncheckedUpdateManyWithoutPlanEstudioNestedInput;
};
export type PlanEstudiosCreateManyInput = {
    idPlanEstudio?: number;
    nombrePlan: string;
};
export type PlanEstudiosUpdateManyMutationInput = {
    nombrePlan?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlanEstudiosUncheckedUpdateManyInput = {
    idPlanEstudio?: Prisma.IntFieldUpdateOperationsInput | number;
    nombrePlan?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlanEstudiosCountOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
    nombrePlan?: Prisma.SortOrder;
};
export type PlanEstudiosAvgOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
};
export type PlanEstudiosMaxOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
    nombrePlan?: Prisma.SortOrder;
};
export type PlanEstudiosMinOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
    nombrePlan?: Prisma.SortOrder;
};
export type PlanEstudiosSumOrderByAggregateInput = {
    idPlanEstudio?: Prisma.SortOrder;
};
export type PlanEstudiosScalarRelationFilter = {
    is?: Prisma.PlanEstudiosWhereInput;
    isNot?: Prisma.PlanEstudiosWhereInput;
};
export type PlanEstudiosCreateNestedOneWithoutIncluyeInput = {
    create?: Prisma.XOR<Prisma.PlanEstudiosCreateWithoutIncluyeInput, Prisma.PlanEstudiosUncheckedCreateWithoutIncluyeInput>;
    connectOrCreate?: Prisma.PlanEstudiosCreateOrConnectWithoutIncluyeInput;
    connect?: Prisma.PlanEstudiosWhereUniqueInput;
};
export type PlanEstudiosUpdateOneRequiredWithoutIncluyeNestedInput = {
    create?: Prisma.XOR<Prisma.PlanEstudiosCreateWithoutIncluyeInput, Prisma.PlanEstudiosUncheckedCreateWithoutIncluyeInput>;
    connectOrCreate?: Prisma.PlanEstudiosCreateOrConnectWithoutIncluyeInput;
    upsert?: Prisma.PlanEstudiosUpsertWithoutIncluyeInput;
    connect?: Prisma.PlanEstudiosWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlanEstudiosUpdateToOneWithWhereWithoutIncluyeInput, Prisma.PlanEstudiosUpdateWithoutIncluyeInput>, Prisma.PlanEstudiosUncheckedUpdateWithoutIncluyeInput>;
};
export type PlanEstudiosCreateWithoutIncluyeInput = {
    nombrePlan: string;
};
export type PlanEstudiosUncheckedCreateWithoutIncluyeInput = {
    idPlanEstudio?: number;
    nombrePlan: string;
};
export type PlanEstudiosCreateOrConnectWithoutIncluyeInput = {
    where: Prisma.PlanEstudiosWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanEstudiosCreateWithoutIncluyeInput, Prisma.PlanEstudiosUncheckedCreateWithoutIncluyeInput>;
};
export type PlanEstudiosUpsertWithoutIncluyeInput = {
    update: Prisma.XOR<Prisma.PlanEstudiosUpdateWithoutIncluyeInput, Prisma.PlanEstudiosUncheckedUpdateWithoutIncluyeInput>;
    create: Prisma.XOR<Prisma.PlanEstudiosCreateWithoutIncluyeInput, Prisma.PlanEstudiosUncheckedCreateWithoutIncluyeInput>;
    where?: Prisma.PlanEstudiosWhereInput;
};
export type PlanEstudiosUpdateToOneWithWhereWithoutIncluyeInput = {
    where?: Prisma.PlanEstudiosWhereInput;
    data: Prisma.XOR<Prisma.PlanEstudiosUpdateWithoutIncluyeInput, Prisma.PlanEstudiosUncheckedUpdateWithoutIncluyeInput>;
};
export type PlanEstudiosUpdateWithoutIncluyeInput = {
    nombrePlan?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlanEstudiosUncheckedUpdateWithoutIncluyeInput = {
    idPlanEstudio?: Prisma.IntFieldUpdateOperationsInput | number;
    nombrePlan?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PlanEstudiosCountOutputType = {
    incluye: number;
};
export type PlanEstudiosCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    incluye?: boolean | PlanEstudiosCountOutputTypeCountIncluyeArgs;
};
export type PlanEstudiosCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosCountOutputTypeSelect<ExtArgs> | null;
};
export type PlanEstudiosCountOutputTypeCountIncluyeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IncluyeWhereInput;
};
export type PlanEstudiosSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idPlanEstudio?: boolean;
    nombrePlan?: boolean;
    incluye?: boolean | Prisma.PlanEstudios$incluyeArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanEstudiosCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["planEstudios"]>;
export type PlanEstudiosSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idPlanEstudio?: boolean;
    nombrePlan?: boolean;
}, ExtArgs["result"]["planEstudios"]>;
export type PlanEstudiosSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    idPlanEstudio?: boolean;
    nombrePlan?: boolean;
}, ExtArgs["result"]["planEstudios"]>;
export type PlanEstudiosSelectScalar = {
    idPlanEstudio?: boolean;
    nombrePlan?: boolean;
};
export type PlanEstudiosOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"idPlanEstudio" | "nombrePlan", ExtArgs["result"]["planEstudios"]>;
export type PlanEstudiosInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    incluye?: boolean | Prisma.PlanEstudios$incluyeArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanEstudiosCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlanEstudiosIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PlanEstudiosIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PlanEstudiosPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlanEstudios";
    objects: {
        incluye: Prisma.$IncluyePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        idPlanEstudio: number;
        nombrePlan: string;
    }, ExtArgs["result"]["planEstudios"]>;
    composites: {};
};
export type PlanEstudiosGetPayload<S extends boolean | null | undefined | PlanEstudiosDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload, S>;
export type PlanEstudiosCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlanEstudiosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlanEstudiosCountAggregateInputType | true;
};
export interface PlanEstudiosDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlanEstudios'];
        meta: {
            name: 'PlanEstudios';
        };
    };
    findUnique<T extends PlanEstudiosFindUniqueArgs>(args: Prisma.SelectSubset<T, PlanEstudiosFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlanEstudiosClient<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlanEstudiosFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlanEstudiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanEstudiosClient<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlanEstudiosFindFirstArgs>(args?: Prisma.SelectSubset<T, PlanEstudiosFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlanEstudiosClient<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlanEstudiosFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlanEstudiosFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlanEstudiosClient<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlanEstudiosFindManyArgs>(args?: Prisma.SelectSubset<T, PlanEstudiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlanEstudiosCreateArgs>(args: Prisma.SelectSubset<T, PlanEstudiosCreateArgs<ExtArgs>>): Prisma.Prisma__PlanEstudiosClient<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlanEstudiosCreateManyArgs>(args?: Prisma.SelectSubset<T, PlanEstudiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlanEstudiosCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlanEstudiosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlanEstudiosDeleteArgs>(args: Prisma.SelectSubset<T, PlanEstudiosDeleteArgs<ExtArgs>>): Prisma.Prisma__PlanEstudiosClient<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlanEstudiosUpdateArgs>(args: Prisma.SelectSubset<T, PlanEstudiosUpdateArgs<ExtArgs>>): Prisma.Prisma__PlanEstudiosClient<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlanEstudiosDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlanEstudiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlanEstudiosUpdateManyArgs>(args: Prisma.SelectSubset<T, PlanEstudiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlanEstudiosUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlanEstudiosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlanEstudiosUpsertArgs>(args: Prisma.SelectSubset<T, PlanEstudiosUpsertArgs<ExtArgs>>): Prisma.Prisma__PlanEstudiosClient<runtime.Types.Result.GetResult<Prisma.$PlanEstudiosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlanEstudiosCountArgs>(args?: Prisma.Subset<T, PlanEstudiosCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlanEstudiosCountAggregateOutputType> : number>;
    aggregate<T extends PlanEstudiosAggregateArgs>(args: Prisma.Subset<T, PlanEstudiosAggregateArgs>): Prisma.PrismaPromise<GetPlanEstudiosAggregateType<T>>;
    groupBy<T extends PlanEstudiosGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlanEstudiosGroupByArgs['orderBy'];
    } : {
        orderBy?: PlanEstudiosGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlanEstudiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanEstudiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlanEstudiosFieldRefs;
}
export interface Prisma__PlanEstudiosClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    incluye<T extends Prisma.PlanEstudios$incluyeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlanEstudios$incluyeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IncluyePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlanEstudiosFieldRefs {
    readonly idPlanEstudio: Prisma.FieldRef<"PlanEstudios", 'Int'>;
    readonly nombrePlan: Prisma.FieldRef<"PlanEstudios", 'String'>;
}
export type PlanEstudiosFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
    where: Prisma.PlanEstudiosWhereUniqueInput;
};
export type PlanEstudiosFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
    where: Prisma.PlanEstudiosWhereUniqueInput;
};
export type PlanEstudiosFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
    where?: Prisma.PlanEstudiosWhereInput;
    orderBy?: Prisma.PlanEstudiosOrderByWithRelationInput | Prisma.PlanEstudiosOrderByWithRelationInput[];
    cursor?: Prisma.PlanEstudiosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanEstudiosScalarFieldEnum | Prisma.PlanEstudiosScalarFieldEnum[];
};
export type PlanEstudiosFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
    where?: Prisma.PlanEstudiosWhereInput;
    orderBy?: Prisma.PlanEstudiosOrderByWithRelationInput | Prisma.PlanEstudiosOrderByWithRelationInput[];
    cursor?: Prisma.PlanEstudiosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanEstudiosScalarFieldEnum | Prisma.PlanEstudiosScalarFieldEnum[];
};
export type PlanEstudiosFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
    where?: Prisma.PlanEstudiosWhereInput;
    orderBy?: Prisma.PlanEstudiosOrderByWithRelationInput | Prisma.PlanEstudiosOrderByWithRelationInput[];
    cursor?: Prisma.PlanEstudiosWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanEstudiosScalarFieldEnum | Prisma.PlanEstudiosScalarFieldEnum[];
};
export type PlanEstudiosCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanEstudiosCreateInput, Prisma.PlanEstudiosUncheckedCreateInput>;
};
export type PlanEstudiosCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlanEstudiosCreateManyInput | Prisma.PlanEstudiosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlanEstudiosCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    data: Prisma.PlanEstudiosCreateManyInput | Prisma.PlanEstudiosCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlanEstudiosUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanEstudiosUpdateInput, Prisma.PlanEstudiosUncheckedUpdateInput>;
    where: Prisma.PlanEstudiosWhereUniqueInput;
};
export type PlanEstudiosUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlanEstudiosUpdateManyMutationInput, Prisma.PlanEstudiosUncheckedUpdateManyInput>;
    where?: Prisma.PlanEstudiosWhereInput;
    limit?: number;
};
export type PlanEstudiosUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlanEstudiosUpdateManyMutationInput, Prisma.PlanEstudiosUncheckedUpdateManyInput>;
    where?: Prisma.PlanEstudiosWhereInput;
    limit?: number;
};
export type PlanEstudiosUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
    where: Prisma.PlanEstudiosWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlanEstudiosCreateInput, Prisma.PlanEstudiosUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlanEstudiosUpdateInput, Prisma.PlanEstudiosUncheckedUpdateInput>;
};
export type PlanEstudiosDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
    where: Prisma.PlanEstudiosWhereUniqueInput;
};
export type PlanEstudiosDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlanEstudiosWhereInput;
    limit?: number;
};
export type PlanEstudios$incluyeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlanEstudiosDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanEstudiosSelect<ExtArgs> | null;
    omit?: Prisma.PlanEstudiosOmit<ExtArgs> | null;
    include?: Prisma.PlanEstudiosInclude<ExtArgs> | null;
};
