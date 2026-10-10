import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MatrizCientificaModel = runtime.Types.Result.DefaultSelection<Prisma.$MatrizCientificaPayload>;
export type AggregateMatrizCientifica = {
    _count: MatrizCientificaCountAggregateOutputType | null;
    _avg: MatrizCientificaAvgAggregateOutputType | null;
    _sum: MatrizCientificaSumAggregateOutputType | null;
    _min: MatrizCientificaMinAggregateOutputType | null;
    _max: MatrizCientificaMaxAggregateOutputType | null;
};
export type MatrizCientificaAvgAggregateOutputType = {
    id: number | null;
};
export type MatrizCientificaSumAggregateOutputType = {
    id: number | null;
};
export type MatrizCientificaMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    descripcion: string | null;
    autor: string | null;
};
export type MatrizCientificaMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    descripcion: string | null;
    autor: string | null;
};
export type MatrizCientificaCountAggregateOutputType = {
    id: number;
    titulo: number;
    descripcion: number;
    autor: number;
    _all: number;
};
export type MatrizCientificaAvgAggregateInputType = {
    id?: true;
};
export type MatrizCientificaSumAggregateInputType = {
    id?: true;
};
export type MatrizCientificaMinAggregateInputType = {
    id?: true;
    titulo?: true;
    descripcion?: true;
    autor?: true;
};
export type MatrizCientificaMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    descripcion?: true;
    autor?: true;
};
export type MatrizCientificaCountAggregateInputType = {
    id?: true;
    titulo?: true;
    descripcion?: true;
    autor?: true;
    _all?: true;
};
export type MatrizCientificaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatrizCientificaWhereInput;
    orderBy?: Prisma.MatrizCientificaOrderByWithRelationInput | Prisma.MatrizCientificaOrderByWithRelationInput[];
    cursor?: Prisma.MatrizCientificaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MatrizCientificaCountAggregateInputType;
    _avg?: MatrizCientificaAvgAggregateInputType;
    _sum?: MatrizCientificaSumAggregateInputType;
    _min?: MatrizCientificaMinAggregateInputType;
    _max?: MatrizCientificaMaxAggregateInputType;
};
export type GetMatrizCientificaAggregateType<T extends MatrizCientificaAggregateArgs> = {
    [P in keyof T & keyof AggregateMatrizCientifica]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMatrizCientifica[P]> : Prisma.GetScalarType<T[P], AggregateMatrizCientifica[P]>;
};
export type MatrizCientificaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatrizCientificaWhereInput;
    orderBy?: Prisma.MatrizCientificaOrderByWithAggregationInput | Prisma.MatrizCientificaOrderByWithAggregationInput[];
    by: Prisma.MatrizCientificaScalarFieldEnum[] | Prisma.MatrizCientificaScalarFieldEnum;
    having?: Prisma.MatrizCientificaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MatrizCientificaCountAggregateInputType | true;
    _avg?: MatrizCientificaAvgAggregateInputType;
    _sum?: MatrizCientificaSumAggregateInputType;
    _min?: MatrizCientificaMinAggregateInputType;
    _max?: MatrizCientificaMaxAggregateInputType;
};
export type MatrizCientificaGroupByOutputType = {
    id: number;
    titulo: string;
    descripcion: string;
    autor: string;
    _count: MatrizCientificaCountAggregateOutputType | null;
    _avg: MatrizCientificaAvgAggregateOutputType | null;
    _sum: MatrizCientificaSumAggregateOutputType | null;
    _min: MatrizCientificaMinAggregateOutputType | null;
    _max: MatrizCientificaMaxAggregateOutputType | null;
};
export type GetMatrizCientificaGroupByPayload<T extends MatrizCientificaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MatrizCientificaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MatrizCientificaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MatrizCientificaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MatrizCientificaGroupByOutputType[P]>;
}>>;
export type MatrizCientificaWhereInput = {
    AND?: Prisma.MatrizCientificaWhereInput | Prisma.MatrizCientificaWhereInput[];
    OR?: Prisma.MatrizCientificaWhereInput[];
    NOT?: Prisma.MatrizCientificaWhereInput | Prisma.MatrizCientificaWhereInput[];
    id?: Prisma.IntFilter<"MatrizCientifica"> | number;
    titulo?: Prisma.StringFilter<"MatrizCientifica"> | string;
    descripcion?: Prisma.StringFilter<"MatrizCientifica"> | string;
    autor?: Prisma.StringFilter<"MatrizCientifica"> | string;
};
export type MatrizCientificaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
};
export type MatrizCientificaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MatrizCientificaWhereInput | Prisma.MatrizCientificaWhereInput[];
    OR?: Prisma.MatrizCientificaWhereInput[];
    NOT?: Prisma.MatrizCientificaWhereInput | Prisma.MatrizCientificaWhereInput[];
    titulo?: Prisma.StringFilter<"MatrizCientifica"> | string;
    descripcion?: Prisma.StringFilter<"MatrizCientifica"> | string;
    autor?: Prisma.StringFilter<"MatrizCientifica"> | string;
}, "id">;
export type MatrizCientificaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
    _count?: Prisma.MatrizCientificaCountOrderByAggregateInput;
    _avg?: Prisma.MatrizCientificaAvgOrderByAggregateInput;
    _max?: Prisma.MatrizCientificaMaxOrderByAggregateInput;
    _min?: Prisma.MatrizCientificaMinOrderByAggregateInput;
    _sum?: Prisma.MatrizCientificaSumOrderByAggregateInput;
};
export type MatrizCientificaScalarWhereWithAggregatesInput = {
    AND?: Prisma.MatrizCientificaScalarWhereWithAggregatesInput | Prisma.MatrizCientificaScalarWhereWithAggregatesInput[];
    OR?: Prisma.MatrizCientificaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MatrizCientificaScalarWhereWithAggregatesInput | Prisma.MatrizCientificaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MatrizCientifica"> | number;
    titulo?: Prisma.StringWithAggregatesFilter<"MatrizCientifica"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"MatrizCientifica"> | string;
    autor?: Prisma.StringWithAggregatesFilter<"MatrizCientifica"> | string;
};
export type MatrizCientificaCreateInput = {
    titulo: string;
    descripcion: string;
    autor: string;
};
export type MatrizCientificaUncheckedCreateInput = {
    id?: number;
    titulo: string;
    descripcion: string;
    autor: string;
};
export type MatrizCientificaUpdateInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    autor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MatrizCientificaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    autor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MatrizCientificaCreateManyInput = {
    id?: number;
    titulo: string;
    descripcion: string;
    autor: string;
};
export type MatrizCientificaUpdateManyMutationInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    autor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MatrizCientificaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    autor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MatrizCientificaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
};
export type MatrizCientificaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MatrizCientificaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
};
export type MatrizCientificaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
};
export type MatrizCientificaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type MatrizCientificaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    autor?: boolean;
}, ExtArgs["result"]["matrizCientifica"]>;
export type MatrizCientificaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    autor?: boolean;
}, ExtArgs["result"]["matrizCientifica"]>;
export type MatrizCientificaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    autor?: boolean;
}, ExtArgs["result"]["matrizCientifica"]>;
export type MatrizCientificaSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    autor?: boolean;
};
export type MatrizCientificaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "descripcion" | "autor", ExtArgs["result"]["matrizCientifica"]>;
export type $MatrizCientificaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MatrizCientifica";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string;
        descripcion: string;
        autor: string;
    }, ExtArgs["result"]["matrizCientifica"]>;
    composites: {};
};
export type MatrizCientificaGetPayload<S extends boolean | null | undefined | MatrizCientificaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload, S>;
export type MatrizCientificaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MatrizCientificaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MatrizCientificaCountAggregateInputType | true;
};
export interface MatrizCientificaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MatrizCientifica'];
        meta: {
            name: 'MatrizCientifica';
        };
    };
    findUnique<T extends MatrizCientificaFindUniqueArgs>(args: Prisma.SelectSubset<T, MatrizCientificaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MatrizCientificaClient<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MatrizCientificaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MatrizCientificaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatrizCientificaClient<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MatrizCientificaFindFirstArgs>(args?: Prisma.SelectSubset<T, MatrizCientificaFindFirstArgs<ExtArgs>>): Prisma.Prisma__MatrizCientificaClient<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MatrizCientificaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MatrizCientificaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MatrizCientificaClient<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MatrizCientificaFindManyArgs>(args?: Prisma.SelectSubset<T, MatrizCientificaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MatrizCientificaCreateArgs>(args: Prisma.SelectSubset<T, MatrizCientificaCreateArgs<ExtArgs>>): Prisma.Prisma__MatrizCientificaClient<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MatrizCientificaCreateManyArgs>(args?: Prisma.SelectSubset<T, MatrizCientificaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MatrizCientificaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MatrizCientificaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MatrizCientificaDeleteArgs>(args: Prisma.SelectSubset<T, MatrizCientificaDeleteArgs<ExtArgs>>): Prisma.Prisma__MatrizCientificaClient<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MatrizCientificaUpdateArgs>(args: Prisma.SelectSubset<T, MatrizCientificaUpdateArgs<ExtArgs>>): Prisma.Prisma__MatrizCientificaClient<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MatrizCientificaDeleteManyArgs>(args?: Prisma.SelectSubset<T, MatrizCientificaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MatrizCientificaUpdateManyArgs>(args: Prisma.SelectSubset<T, MatrizCientificaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MatrizCientificaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MatrizCientificaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MatrizCientificaUpsertArgs>(args: Prisma.SelectSubset<T, MatrizCientificaUpsertArgs<ExtArgs>>): Prisma.Prisma__MatrizCientificaClient<runtime.Types.Result.GetResult<Prisma.$MatrizCientificaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MatrizCientificaCountArgs>(args?: Prisma.Subset<T, MatrizCientificaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MatrizCientificaCountAggregateOutputType> : number>;
    aggregate<T extends MatrizCientificaAggregateArgs>(args: Prisma.Subset<T, MatrizCientificaAggregateArgs>): Prisma.PrismaPromise<GetMatrizCientificaAggregateType<T>>;
    groupBy<T extends MatrizCientificaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MatrizCientificaGroupByArgs['orderBy'];
    } : {
        orderBy?: MatrizCientificaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MatrizCientificaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatrizCientificaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MatrizCientificaFieldRefs;
}
export interface Prisma__MatrizCientificaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MatrizCientificaFieldRefs {
    readonly id: Prisma.FieldRef<"MatrizCientifica", 'Int'>;
    readonly titulo: Prisma.FieldRef<"MatrizCientifica", 'String'>;
    readonly descripcion: Prisma.FieldRef<"MatrizCientifica", 'String'>;
    readonly autor: Prisma.FieldRef<"MatrizCientifica", 'String'>;
}
export type MatrizCientificaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    where: Prisma.MatrizCientificaWhereUniqueInput;
};
export type MatrizCientificaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    where: Prisma.MatrizCientificaWhereUniqueInput;
};
export type MatrizCientificaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    where?: Prisma.MatrizCientificaWhereInput;
    orderBy?: Prisma.MatrizCientificaOrderByWithRelationInput | Prisma.MatrizCientificaOrderByWithRelationInput[];
    cursor?: Prisma.MatrizCientificaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatrizCientificaScalarFieldEnum | Prisma.MatrizCientificaScalarFieldEnum[];
};
export type MatrizCientificaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    where?: Prisma.MatrizCientificaWhereInput;
    orderBy?: Prisma.MatrizCientificaOrderByWithRelationInput | Prisma.MatrizCientificaOrderByWithRelationInput[];
    cursor?: Prisma.MatrizCientificaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatrizCientificaScalarFieldEnum | Prisma.MatrizCientificaScalarFieldEnum[];
};
export type MatrizCientificaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    where?: Prisma.MatrizCientificaWhereInput;
    orderBy?: Prisma.MatrizCientificaOrderByWithRelationInput | Prisma.MatrizCientificaOrderByWithRelationInput[];
    cursor?: Prisma.MatrizCientificaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MatrizCientificaScalarFieldEnum | Prisma.MatrizCientificaScalarFieldEnum[];
};
export type MatrizCientificaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatrizCientificaCreateInput, Prisma.MatrizCientificaUncheckedCreateInput>;
};
export type MatrizCientificaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MatrizCientificaCreateManyInput | Prisma.MatrizCientificaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MatrizCientificaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    data: Prisma.MatrizCientificaCreateManyInput | Prisma.MatrizCientificaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MatrizCientificaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatrizCientificaUpdateInput, Prisma.MatrizCientificaUncheckedUpdateInput>;
    where: Prisma.MatrizCientificaWhereUniqueInput;
};
export type MatrizCientificaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MatrizCientificaUpdateManyMutationInput, Prisma.MatrizCientificaUncheckedUpdateManyInput>;
    where?: Prisma.MatrizCientificaWhereInput;
    limit?: number;
};
export type MatrizCientificaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MatrizCientificaUpdateManyMutationInput, Prisma.MatrizCientificaUncheckedUpdateManyInput>;
    where?: Prisma.MatrizCientificaWhereInput;
    limit?: number;
};
export type MatrizCientificaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    where: Prisma.MatrizCientificaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MatrizCientificaCreateInput, Prisma.MatrizCientificaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MatrizCientificaUpdateInput, Prisma.MatrizCientificaUncheckedUpdateInput>;
};
export type MatrizCientificaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
    where: Prisma.MatrizCientificaWhereUniqueInput;
};
export type MatrizCientificaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MatrizCientificaWhereInput;
    limit?: number;
};
export type MatrizCientificaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MatrizCientificaSelect<ExtArgs> | null;
    omit?: Prisma.MatrizCientificaOmit<ExtArgs> | null;
};
