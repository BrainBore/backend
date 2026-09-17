import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ConvenioModel = runtime.Types.Result.DefaultSelection<Prisma.$ConvenioPayload>;
export type AggregateConvenio = {
    _count: ConvenioCountAggregateOutputType | null;
    _avg: ConvenioAvgAggregateOutputType | null;
    _sum: ConvenioSumAggregateOutputType | null;
    _min: ConvenioMinAggregateOutputType | null;
    _max: ConvenioMaxAggregateOutputType | null;
};
export type ConvenioAvgAggregateOutputType = {
    id: number | null;
};
export type ConvenioSumAggregateOutputType = {
    id: number | null;
};
export type ConvenioMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    descripcion: string | null;
    sector: string | null;
};
export type ConvenioMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    descripcion: string | null;
    sector: string | null;
};
export type ConvenioCountAggregateOutputType = {
    id: number;
    titulo: number;
    descripcion: number;
    sector: number;
    _all: number;
};
export type ConvenioAvgAggregateInputType = {
    id?: true;
};
export type ConvenioSumAggregateInputType = {
    id?: true;
};
export type ConvenioMinAggregateInputType = {
    id?: true;
    titulo?: true;
    descripcion?: true;
    sector?: true;
};
export type ConvenioMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    descripcion?: true;
    sector?: true;
};
export type ConvenioCountAggregateInputType = {
    id?: true;
    titulo?: true;
    descripcion?: true;
    sector?: true;
    _all?: true;
};
export type ConvenioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvenioWhereInput;
    orderBy?: Prisma.ConvenioOrderByWithRelationInput | Prisma.ConvenioOrderByWithRelationInput[];
    cursor?: Prisma.ConvenioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConvenioCountAggregateInputType;
    _avg?: ConvenioAvgAggregateInputType;
    _sum?: ConvenioSumAggregateInputType;
    _min?: ConvenioMinAggregateInputType;
    _max?: ConvenioMaxAggregateInputType;
};
export type GetConvenioAggregateType<T extends ConvenioAggregateArgs> = {
    [P in keyof T & keyof AggregateConvenio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConvenio[P]> : Prisma.GetScalarType<T[P], AggregateConvenio[P]>;
};
export type ConvenioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvenioWhereInput;
    orderBy?: Prisma.ConvenioOrderByWithAggregationInput | Prisma.ConvenioOrderByWithAggregationInput[];
    by: Prisma.ConvenioScalarFieldEnum[] | Prisma.ConvenioScalarFieldEnum;
    having?: Prisma.ConvenioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConvenioCountAggregateInputType | true;
    _avg?: ConvenioAvgAggregateInputType;
    _sum?: ConvenioSumAggregateInputType;
    _min?: ConvenioMinAggregateInputType;
    _max?: ConvenioMaxAggregateInputType;
};
export type ConvenioGroupByOutputType = {
    id: number;
    titulo: string;
    descripcion: string;
    sector: string;
    _count: ConvenioCountAggregateOutputType | null;
    _avg: ConvenioAvgAggregateOutputType | null;
    _sum: ConvenioSumAggregateOutputType | null;
    _min: ConvenioMinAggregateOutputType | null;
    _max: ConvenioMaxAggregateOutputType | null;
};
export type GetConvenioGroupByPayload<T extends ConvenioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConvenioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConvenioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConvenioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConvenioGroupByOutputType[P]>;
}>>;
export type ConvenioWhereInput = {
    AND?: Prisma.ConvenioWhereInput | Prisma.ConvenioWhereInput[];
    OR?: Prisma.ConvenioWhereInput[];
    NOT?: Prisma.ConvenioWhereInput | Prisma.ConvenioWhereInput[];
    id?: Prisma.IntFilter<"Convenio"> | number;
    titulo?: Prisma.StringFilter<"Convenio"> | string;
    descripcion?: Prisma.StringFilter<"Convenio"> | string;
    sector?: Prisma.StringFilter<"Convenio"> | string;
};
export type ConvenioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
};
export type ConvenioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ConvenioWhereInput | Prisma.ConvenioWhereInput[];
    OR?: Prisma.ConvenioWhereInput[];
    NOT?: Prisma.ConvenioWhereInput | Prisma.ConvenioWhereInput[];
    titulo?: Prisma.StringFilter<"Convenio"> | string;
    descripcion?: Prisma.StringFilter<"Convenio"> | string;
    sector?: Prisma.StringFilter<"Convenio"> | string;
}, "id">;
export type ConvenioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
    _count?: Prisma.ConvenioCountOrderByAggregateInput;
    _avg?: Prisma.ConvenioAvgOrderByAggregateInput;
    _max?: Prisma.ConvenioMaxOrderByAggregateInput;
    _min?: Prisma.ConvenioMinOrderByAggregateInput;
    _sum?: Prisma.ConvenioSumOrderByAggregateInput;
};
export type ConvenioScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConvenioScalarWhereWithAggregatesInput | Prisma.ConvenioScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConvenioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConvenioScalarWhereWithAggregatesInput | Prisma.ConvenioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Convenio"> | number;
    titulo?: Prisma.StringWithAggregatesFilter<"Convenio"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"Convenio"> | string;
    sector?: Prisma.StringWithAggregatesFilter<"Convenio"> | string;
};
export type ConvenioCreateInput = {
    titulo: string;
    descripcion: string;
    sector: string;
};
export type ConvenioUncheckedCreateInput = {
    id?: number;
    titulo: string;
    descripcion: string;
    sector: string;
};
export type ConvenioUpdateInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    sector?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvenioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    sector?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvenioCreateManyInput = {
    id?: number;
    titulo: string;
    descripcion: string;
    sector: string;
};
export type ConvenioUpdateManyMutationInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    sector?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvenioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    sector?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ConvenioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
};
export type ConvenioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ConvenioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
};
export type ConvenioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    sector?: Prisma.SortOrder;
};
export type ConvenioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ConvenioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    sector?: boolean;
}, ExtArgs["result"]["convenio"]>;
export type ConvenioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    sector?: boolean;
}, ExtArgs["result"]["convenio"]>;
export type ConvenioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    sector?: boolean;
}, ExtArgs["result"]["convenio"]>;
export type ConvenioSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    sector?: boolean;
};
export type ConvenioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "descripcion" | "sector", ExtArgs["result"]["convenio"]>;
export type $ConvenioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Convenio";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string;
        descripcion: string;
        sector: string;
    }, ExtArgs["result"]["convenio"]>;
    composites: {};
};
export type ConvenioGetPayload<S extends boolean | null | undefined | ConvenioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConvenioPayload, S>;
export type ConvenioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConvenioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConvenioCountAggregateInputType | true;
};
export interface ConvenioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Convenio'];
        meta: {
            name: 'Convenio';
        };
    };
    findUnique<T extends ConvenioFindUniqueArgs>(args: Prisma.SelectSubset<T, ConvenioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConvenioClient<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConvenioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConvenioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConvenioClient<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConvenioFindFirstArgs>(args?: Prisma.SelectSubset<T, ConvenioFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConvenioClient<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConvenioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConvenioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConvenioClient<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConvenioFindManyArgs>(args?: Prisma.SelectSubset<T, ConvenioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConvenioCreateArgs>(args: Prisma.SelectSubset<T, ConvenioCreateArgs<ExtArgs>>): Prisma.Prisma__ConvenioClient<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConvenioCreateManyArgs>(args?: Prisma.SelectSubset<T, ConvenioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConvenioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConvenioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConvenioDeleteArgs>(args: Prisma.SelectSubset<T, ConvenioDeleteArgs<ExtArgs>>): Prisma.Prisma__ConvenioClient<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConvenioUpdateArgs>(args: Prisma.SelectSubset<T, ConvenioUpdateArgs<ExtArgs>>): Prisma.Prisma__ConvenioClient<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConvenioDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConvenioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConvenioUpdateManyArgs>(args: Prisma.SelectSubset<T, ConvenioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConvenioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConvenioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConvenioUpsertArgs>(args: Prisma.SelectSubset<T, ConvenioUpsertArgs<ExtArgs>>): Prisma.Prisma__ConvenioClient<runtime.Types.Result.GetResult<Prisma.$ConvenioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConvenioCountArgs>(args?: Prisma.Subset<T, ConvenioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConvenioCountAggregateOutputType> : number>;
    aggregate<T extends ConvenioAggregateArgs>(args: Prisma.Subset<T, ConvenioAggregateArgs>): Prisma.PrismaPromise<GetConvenioAggregateType<T>>;
    groupBy<T extends ConvenioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConvenioGroupByArgs['orderBy'];
    } : {
        orderBy?: ConvenioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConvenioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConvenioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConvenioFieldRefs;
}
export interface Prisma__ConvenioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConvenioFieldRefs {
    readonly id: Prisma.FieldRef<"Convenio", 'Int'>;
    readonly titulo: Prisma.FieldRef<"Convenio", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Convenio", 'String'>;
    readonly sector: Prisma.FieldRef<"Convenio", 'String'>;
}
export type ConvenioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    where: Prisma.ConvenioWhereUniqueInput;
};
export type ConvenioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    where: Prisma.ConvenioWhereUniqueInput;
};
export type ConvenioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    where?: Prisma.ConvenioWhereInput;
    orderBy?: Prisma.ConvenioOrderByWithRelationInput | Prisma.ConvenioOrderByWithRelationInput[];
    cursor?: Prisma.ConvenioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvenioScalarFieldEnum | Prisma.ConvenioScalarFieldEnum[];
};
export type ConvenioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    where?: Prisma.ConvenioWhereInput;
    orderBy?: Prisma.ConvenioOrderByWithRelationInput | Prisma.ConvenioOrderByWithRelationInput[];
    cursor?: Prisma.ConvenioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvenioScalarFieldEnum | Prisma.ConvenioScalarFieldEnum[];
};
export type ConvenioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    where?: Prisma.ConvenioWhereInput;
    orderBy?: Prisma.ConvenioOrderByWithRelationInput | Prisma.ConvenioOrderByWithRelationInput[];
    cursor?: Prisma.ConvenioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConvenioScalarFieldEnum | Prisma.ConvenioScalarFieldEnum[];
};
export type ConvenioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvenioCreateInput, Prisma.ConvenioUncheckedCreateInput>;
};
export type ConvenioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConvenioCreateManyInput | Prisma.ConvenioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConvenioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    data: Prisma.ConvenioCreateManyInput | Prisma.ConvenioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConvenioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvenioUpdateInput, Prisma.ConvenioUncheckedUpdateInput>;
    where: Prisma.ConvenioWhereUniqueInput;
};
export type ConvenioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConvenioUpdateManyMutationInput, Prisma.ConvenioUncheckedUpdateManyInput>;
    where?: Prisma.ConvenioWhereInput;
    limit?: number;
};
export type ConvenioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConvenioUpdateManyMutationInput, Prisma.ConvenioUncheckedUpdateManyInput>;
    where?: Prisma.ConvenioWhereInput;
    limit?: number;
};
export type ConvenioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    where: Prisma.ConvenioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConvenioCreateInput, Prisma.ConvenioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConvenioUpdateInput, Prisma.ConvenioUncheckedUpdateInput>;
};
export type ConvenioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
    where: Prisma.ConvenioWhereUniqueInput;
};
export type ConvenioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConvenioWhereInput;
    limit?: number;
};
export type ConvenioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConvenioSelect<ExtArgs> | null;
    omit?: Prisma.ConvenioOmit<ExtArgs> | null;
};
