import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type EstudianteAutoridadModel = runtime.Types.Result.DefaultSelection<Prisma.$EstudianteAutoridadPayload>;
export type AggregateEstudianteAutoridad = {
    _count: EstudianteAutoridadCountAggregateOutputType | null;
    _avg: EstudianteAutoridadAvgAggregateOutputType | null;
    _sum: EstudianteAutoridadSumAggregateOutputType | null;
    _min: EstudianteAutoridadMinAggregateOutputType | null;
    _max: EstudianteAutoridadMaxAggregateOutputType | null;
};
export type EstudianteAutoridadAvgAggregateOutputType = {
    id: number | null;
};
export type EstudianteAutoridadSumAggregateOutputType = {
    id: number | null;
};
export type EstudianteAutoridadMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    cargo: string | null;
    imagen: string | null;
};
export type EstudianteAutoridadMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    cargo: string | null;
    imagen: string | null;
};
export type EstudianteAutoridadCountAggregateOutputType = {
    id: number;
    nombre: number;
    cargo: number;
    imagen: number;
    _all: number;
};
export type EstudianteAutoridadAvgAggregateInputType = {
    id?: true;
};
export type EstudianteAutoridadSumAggregateInputType = {
    id?: true;
};
export type EstudianteAutoridadMinAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    imagen?: true;
};
export type EstudianteAutoridadMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    imagen?: true;
};
export type EstudianteAutoridadCountAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    imagen?: true;
    _all?: true;
};
export type EstudianteAutoridadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstudianteAutoridadWhereInput;
    orderBy?: Prisma.EstudianteAutoridadOrderByWithRelationInput | Prisma.EstudianteAutoridadOrderByWithRelationInput[];
    cursor?: Prisma.EstudianteAutoridadWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EstudianteAutoridadCountAggregateInputType;
    _avg?: EstudianteAutoridadAvgAggregateInputType;
    _sum?: EstudianteAutoridadSumAggregateInputType;
    _min?: EstudianteAutoridadMinAggregateInputType;
    _max?: EstudianteAutoridadMaxAggregateInputType;
};
export type GetEstudianteAutoridadAggregateType<T extends EstudianteAutoridadAggregateArgs> = {
    [P in keyof T & keyof AggregateEstudianteAutoridad]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEstudianteAutoridad[P]> : Prisma.GetScalarType<T[P], AggregateEstudianteAutoridad[P]>;
};
export type EstudianteAutoridadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstudianteAutoridadWhereInput;
    orderBy?: Prisma.EstudianteAutoridadOrderByWithAggregationInput | Prisma.EstudianteAutoridadOrderByWithAggregationInput[];
    by: Prisma.EstudianteAutoridadScalarFieldEnum[] | Prisma.EstudianteAutoridadScalarFieldEnum;
    having?: Prisma.EstudianteAutoridadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EstudianteAutoridadCountAggregateInputType | true;
    _avg?: EstudianteAutoridadAvgAggregateInputType;
    _sum?: EstudianteAutoridadSumAggregateInputType;
    _min?: EstudianteAutoridadMinAggregateInputType;
    _max?: EstudianteAutoridadMaxAggregateInputType;
};
export type EstudianteAutoridadGroupByOutputType = {
    id: number;
    nombre: string;
    cargo: string;
    imagen: string;
    _count: EstudianteAutoridadCountAggregateOutputType | null;
    _avg: EstudianteAutoridadAvgAggregateOutputType | null;
    _sum: EstudianteAutoridadSumAggregateOutputType | null;
    _min: EstudianteAutoridadMinAggregateOutputType | null;
    _max: EstudianteAutoridadMaxAggregateOutputType | null;
};
export type GetEstudianteAutoridadGroupByPayload<T extends EstudianteAutoridadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EstudianteAutoridadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EstudianteAutoridadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EstudianteAutoridadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EstudianteAutoridadGroupByOutputType[P]>;
}>>;
export type EstudianteAutoridadWhereInput = {
    AND?: Prisma.EstudianteAutoridadWhereInput | Prisma.EstudianteAutoridadWhereInput[];
    OR?: Prisma.EstudianteAutoridadWhereInput[];
    NOT?: Prisma.EstudianteAutoridadWhereInput | Prisma.EstudianteAutoridadWhereInput[];
    id?: Prisma.IntFilter<"EstudianteAutoridad"> | number;
    nombre?: Prisma.StringFilter<"EstudianteAutoridad"> | string;
    cargo?: Prisma.StringFilter<"EstudianteAutoridad"> | string;
    imagen?: Prisma.StringFilter<"EstudianteAutoridad"> | string;
};
export type EstudianteAutoridadOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
};
export type EstudianteAutoridadWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EstudianteAutoridadWhereInput | Prisma.EstudianteAutoridadWhereInput[];
    OR?: Prisma.EstudianteAutoridadWhereInput[];
    NOT?: Prisma.EstudianteAutoridadWhereInput | Prisma.EstudianteAutoridadWhereInput[];
    nombre?: Prisma.StringFilter<"EstudianteAutoridad"> | string;
    cargo?: Prisma.StringFilter<"EstudianteAutoridad"> | string;
    imagen?: Prisma.StringFilter<"EstudianteAutoridad"> | string;
}, "id">;
export type EstudianteAutoridadOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
    _count?: Prisma.EstudianteAutoridadCountOrderByAggregateInput;
    _avg?: Prisma.EstudianteAutoridadAvgOrderByAggregateInput;
    _max?: Prisma.EstudianteAutoridadMaxOrderByAggregateInput;
    _min?: Prisma.EstudianteAutoridadMinOrderByAggregateInput;
    _sum?: Prisma.EstudianteAutoridadSumOrderByAggregateInput;
};
export type EstudianteAutoridadScalarWhereWithAggregatesInput = {
    AND?: Prisma.EstudianteAutoridadScalarWhereWithAggregatesInput | Prisma.EstudianteAutoridadScalarWhereWithAggregatesInput[];
    OR?: Prisma.EstudianteAutoridadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EstudianteAutoridadScalarWhereWithAggregatesInput | Prisma.EstudianteAutoridadScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"EstudianteAutoridad"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"EstudianteAutoridad"> | string;
    cargo?: Prisma.StringWithAggregatesFilter<"EstudianteAutoridad"> | string;
    imagen?: Prisma.StringWithAggregatesFilter<"EstudianteAutoridad"> | string;
};
export type EstudianteAutoridadCreateInput = {
    nombre: string;
    cargo: string;
    imagen: string;
};
export type EstudianteAutoridadUncheckedCreateInput = {
    id?: number;
    nombre: string;
    cargo: string;
    imagen: string;
};
export type EstudianteAutoridadUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    imagen?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EstudianteAutoridadUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    imagen?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EstudianteAutoridadCreateManyInput = {
    id?: number;
    nombre: string;
    cargo: string;
    imagen: string;
};
export type EstudianteAutoridadUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    imagen?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EstudianteAutoridadUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    imagen?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EstudianteAutoridadCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
};
export type EstudianteAutoridadAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EstudianteAutoridadMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
};
export type EstudianteAutoridadMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
};
export type EstudianteAutoridadSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EstudianteAutoridadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    imagen?: boolean;
}, ExtArgs["result"]["estudianteAutoridad"]>;
export type EstudianteAutoridadSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    imagen?: boolean;
}, ExtArgs["result"]["estudianteAutoridad"]>;
export type EstudianteAutoridadSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    imagen?: boolean;
}, ExtArgs["result"]["estudianteAutoridad"]>;
export type EstudianteAutoridadSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    imagen?: boolean;
};
export type EstudianteAutoridadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "cargo" | "imagen", ExtArgs["result"]["estudianteAutoridad"]>;
export type $EstudianteAutoridadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EstudianteAutoridad";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        cargo: string;
        imagen: string;
    }, ExtArgs["result"]["estudianteAutoridad"]>;
    composites: {};
};
export type EstudianteAutoridadGetPayload<S extends boolean | null | undefined | EstudianteAutoridadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload, S>;
export type EstudianteAutoridadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EstudianteAutoridadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EstudianteAutoridadCountAggregateInputType | true;
};
export interface EstudianteAutoridadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EstudianteAutoridad'];
        meta: {
            name: 'EstudianteAutoridad';
        };
    };
    findUnique<T extends EstudianteAutoridadFindUniqueArgs>(args: Prisma.SelectSubset<T, EstudianteAutoridadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EstudianteAutoridadClient<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EstudianteAutoridadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EstudianteAutoridadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstudianteAutoridadClient<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EstudianteAutoridadFindFirstArgs>(args?: Prisma.SelectSubset<T, EstudianteAutoridadFindFirstArgs<ExtArgs>>): Prisma.Prisma__EstudianteAutoridadClient<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EstudianteAutoridadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EstudianteAutoridadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EstudianteAutoridadClient<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EstudianteAutoridadFindManyArgs>(args?: Prisma.SelectSubset<T, EstudianteAutoridadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EstudianteAutoridadCreateArgs>(args: Prisma.SelectSubset<T, EstudianteAutoridadCreateArgs<ExtArgs>>): Prisma.Prisma__EstudianteAutoridadClient<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EstudianteAutoridadCreateManyArgs>(args?: Prisma.SelectSubset<T, EstudianteAutoridadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EstudianteAutoridadCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EstudianteAutoridadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EstudianteAutoridadDeleteArgs>(args: Prisma.SelectSubset<T, EstudianteAutoridadDeleteArgs<ExtArgs>>): Prisma.Prisma__EstudianteAutoridadClient<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EstudianteAutoridadUpdateArgs>(args: Prisma.SelectSubset<T, EstudianteAutoridadUpdateArgs<ExtArgs>>): Prisma.Prisma__EstudianteAutoridadClient<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EstudianteAutoridadDeleteManyArgs>(args?: Prisma.SelectSubset<T, EstudianteAutoridadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EstudianteAutoridadUpdateManyArgs>(args: Prisma.SelectSubset<T, EstudianteAutoridadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EstudianteAutoridadUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EstudianteAutoridadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EstudianteAutoridadUpsertArgs>(args: Prisma.SelectSubset<T, EstudianteAutoridadUpsertArgs<ExtArgs>>): Prisma.Prisma__EstudianteAutoridadClient<runtime.Types.Result.GetResult<Prisma.$EstudianteAutoridadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EstudianteAutoridadCountArgs>(args?: Prisma.Subset<T, EstudianteAutoridadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EstudianteAutoridadCountAggregateOutputType> : number>;
    aggregate<T extends EstudianteAutoridadAggregateArgs>(args: Prisma.Subset<T, EstudianteAutoridadAggregateArgs>): Prisma.PrismaPromise<GetEstudianteAutoridadAggregateType<T>>;
    groupBy<T extends EstudianteAutoridadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EstudianteAutoridadGroupByArgs['orderBy'];
    } : {
        orderBy?: EstudianteAutoridadGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EstudianteAutoridadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudianteAutoridadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EstudianteAutoridadFieldRefs;
}
export interface Prisma__EstudianteAutoridadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EstudianteAutoridadFieldRefs {
    readonly id: Prisma.FieldRef<"EstudianteAutoridad", 'Int'>;
    readonly nombre: Prisma.FieldRef<"EstudianteAutoridad", 'String'>;
    readonly cargo: Prisma.FieldRef<"EstudianteAutoridad", 'String'>;
    readonly imagen: Prisma.FieldRef<"EstudianteAutoridad", 'String'>;
}
export type EstudianteAutoridadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    where: Prisma.EstudianteAutoridadWhereUniqueInput;
};
export type EstudianteAutoridadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    where: Prisma.EstudianteAutoridadWhereUniqueInput;
};
export type EstudianteAutoridadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    where?: Prisma.EstudianteAutoridadWhereInput;
    orderBy?: Prisma.EstudianteAutoridadOrderByWithRelationInput | Prisma.EstudianteAutoridadOrderByWithRelationInput[];
    cursor?: Prisma.EstudianteAutoridadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstudianteAutoridadScalarFieldEnum | Prisma.EstudianteAutoridadScalarFieldEnum[];
};
export type EstudianteAutoridadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    where?: Prisma.EstudianteAutoridadWhereInput;
    orderBy?: Prisma.EstudianteAutoridadOrderByWithRelationInput | Prisma.EstudianteAutoridadOrderByWithRelationInput[];
    cursor?: Prisma.EstudianteAutoridadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstudianteAutoridadScalarFieldEnum | Prisma.EstudianteAutoridadScalarFieldEnum[];
};
export type EstudianteAutoridadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    where?: Prisma.EstudianteAutoridadWhereInput;
    orderBy?: Prisma.EstudianteAutoridadOrderByWithRelationInput | Prisma.EstudianteAutoridadOrderByWithRelationInput[];
    cursor?: Prisma.EstudianteAutoridadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EstudianteAutoridadScalarFieldEnum | Prisma.EstudianteAutoridadScalarFieldEnum[];
};
export type EstudianteAutoridadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstudianteAutoridadCreateInput, Prisma.EstudianteAutoridadUncheckedCreateInput>;
};
export type EstudianteAutoridadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EstudianteAutoridadCreateManyInput | Prisma.EstudianteAutoridadCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EstudianteAutoridadCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    data: Prisma.EstudianteAutoridadCreateManyInput | Prisma.EstudianteAutoridadCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EstudianteAutoridadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstudianteAutoridadUpdateInput, Prisma.EstudianteAutoridadUncheckedUpdateInput>;
    where: Prisma.EstudianteAutoridadWhereUniqueInput;
};
export type EstudianteAutoridadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EstudianteAutoridadUpdateManyMutationInput, Prisma.EstudianteAutoridadUncheckedUpdateManyInput>;
    where?: Prisma.EstudianteAutoridadWhereInput;
    limit?: number;
};
export type EstudianteAutoridadUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EstudianteAutoridadUpdateManyMutationInput, Prisma.EstudianteAutoridadUncheckedUpdateManyInput>;
    where?: Prisma.EstudianteAutoridadWhereInput;
    limit?: number;
};
export type EstudianteAutoridadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    where: Prisma.EstudianteAutoridadWhereUniqueInput;
    create: Prisma.XOR<Prisma.EstudianteAutoridadCreateInput, Prisma.EstudianteAutoridadUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EstudianteAutoridadUpdateInput, Prisma.EstudianteAutoridadUncheckedUpdateInput>;
};
export type EstudianteAutoridadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
    where: Prisma.EstudianteAutoridadWhereUniqueInput;
};
export type EstudianteAutoridadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EstudianteAutoridadWhereInput;
    limit?: number;
};
export type EstudianteAutoridadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EstudianteAutoridadSelect<ExtArgs> | null;
    omit?: Prisma.EstudianteAutoridadOmit<ExtArgs> | null;
};
