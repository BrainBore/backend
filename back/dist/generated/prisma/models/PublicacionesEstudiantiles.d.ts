import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PublicacionesEstudiantilesModel = runtime.Types.Result.DefaultSelection<Prisma.$PublicacionesEstudiantilesPayload>;
export type AggregatePublicacionesEstudiantiles = {
    _count: PublicacionesEstudiantilesCountAggregateOutputType | null;
    _avg: PublicacionesEstudiantilesAvgAggregateOutputType | null;
    _sum: PublicacionesEstudiantilesSumAggregateOutputType | null;
    _min: PublicacionesEstudiantilesMinAggregateOutputType | null;
    _max: PublicacionesEstudiantilesMaxAggregateOutputType | null;
};
export type PublicacionesEstudiantilesAvgAggregateOutputType = {
    id: number | null;
    anio: number | null;
};
export type PublicacionesEstudiantilesSumAggregateOutputType = {
    id: number | null;
    anio: number | null;
};
export type PublicacionesEstudiantilesMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    anio: number | null;
    autor: string | null;
    area: string | null;
};
export type PublicacionesEstudiantilesMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    anio: number | null;
    autor: string | null;
    area: string | null;
};
export type PublicacionesEstudiantilesCountAggregateOutputType = {
    id: number;
    titulo: number;
    anio: number;
    autor: number;
    area: number;
    _all: number;
};
export type PublicacionesEstudiantilesAvgAggregateInputType = {
    id?: true;
    anio?: true;
};
export type PublicacionesEstudiantilesSumAggregateInputType = {
    id?: true;
    anio?: true;
};
export type PublicacionesEstudiantilesMinAggregateInputType = {
    id?: true;
    titulo?: true;
    anio?: true;
    autor?: true;
    area?: true;
};
export type PublicacionesEstudiantilesMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    anio?: true;
    autor?: true;
    area?: true;
};
export type PublicacionesEstudiantilesCountAggregateInputType = {
    id?: true;
    titulo?: true;
    anio?: true;
    autor?: true;
    area?: true;
    _all?: true;
};
export type PublicacionesEstudiantilesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicacionesEstudiantilesWhereInput;
    orderBy?: Prisma.PublicacionesEstudiantilesOrderByWithRelationInput | Prisma.PublicacionesEstudiantilesOrderByWithRelationInput[];
    cursor?: Prisma.PublicacionesEstudiantilesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PublicacionesEstudiantilesCountAggregateInputType;
    _avg?: PublicacionesEstudiantilesAvgAggregateInputType;
    _sum?: PublicacionesEstudiantilesSumAggregateInputType;
    _min?: PublicacionesEstudiantilesMinAggregateInputType;
    _max?: PublicacionesEstudiantilesMaxAggregateInputType;
};
export type GetPublicacionesEstudiantilesAggregateType<T extends PublicacionesEstudiantilesAggregateArgs> = {
    [P in keyof T & keyof AggregatePublicacionesEstudiantiles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePublicacionesEstudiantiles[P]> : Prisma.GetScalarType<T[P], AggregatePublicacionesEstudiantiles[P]>;
};
export type PublicacionesEstudiantilesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicacionesEstudiantilesWhereInput;
    orderBy?: Prisma.PublicacionesEstudiantilesOrderByWithAggregationInput | Prisma.PublicacionesEstudiantilesOrderByWithAggregationInput[];
    by: Prisma.PublicacionesEstudiantilesScalarFieldEnum[] | Prisma.PublicacionesEstudiantilesScalarFieldEnum;
    having?: Prisma.PublicacionesEstudiantilesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PublicacionesEstudiantilesCountAggregateInputType | true;
    _avg?: PublicacionesEstudiantilesAvgAggregateInputType;
    _sum?: PublicacionesEstudiantilesSumAggregateInputType;
    _min?: PublicacionesEstudiantilesMinAggregateInputType;
    _max?: PublicacionesEstudiantilesMaxAggregateInputType;
};
export type PublicacionesEstudiantilesGroupByOutputType = {
    id: number;
    titulo: string;
    anio: number;
    autor: string;
    area: string;
    _count: PublicacionesEstudiantilesCountAggregateOutputType | null;
    _avg: PublicacionesEstudiantilesAvgAggregateOutputType | null;
    _sum: PublicacionesEstudiantilesSumAggregateOutputType | null;
    _min: PublicacionesEstudiantilesMinAggregateOutputType | null;
    _max: PublicacionesEstudiantilesMaxAggregateOutputType | null;
};
export type GetPublicacionesEstudiantilesGroupByPayload<T extends PublicacionesEstudiantilesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PublicacionesEstudiantilesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PublicacionesEstudiantilesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PublicacionesEstudiantilesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PublicacionesEstudiantilesGroupByOutputType[P]>;
}>>;
export type PublicacionesEstudiantilesWhereInput = {
    AND?: Prisma.PublicacionesEstudiantilesWhereInput | Prisma.PublicacionesEstudiantilesWhereInput[];
    OR?: Prisma.PublicacionesEstudiantilesWhereInput[];
    NOT?: Prisma.PublicacionesEstudiantilesWhereInput | Prisma.PublicacionesEstudiantilesWhereInput[];
    id?: Prisma.IntFilter<"PublicacionesEstudiantiles"> | number;
    titulo?: Prisma.StringFilter<"PublicacionesEstudiantiles"> | string;
    anio?: Prisma.IntFilter<"PublicacionesEstudiantiles"> | number;
    autor?: Prisma.StringFilter<"PublicacionesEstudiantiles"> | string;
    area?: Prisma.StringFilter<"PublicacionesEstudiantiles"> | string;
};
export type PublicacionesEstudiantilesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type PublicacionesEstudiantilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PublicacionesEstudiantilesWhereInput | Prisma.PublicacionesEstudiantilesWhereInput[];
    OR?: Prisma.PublicacionesEstudiantilesWhereInput[];
    NOT?: Prisma.PublicacionesEstudiantilesWhereInput | Prisma.PublicacionesEstudiantilesWhereInput[];
    titulo?: Prisma.StringFilter<"PublicacionesEstudiantiles"> | string;
    anio?: Prisma.IntFilter<"PublicacionesEstudiantiles"> | number;
    autor?: Prisma.StringFilter<"PublicacionesEstudiantiles"> | string;
    area?: Prisma.StringFilter<"PublicacionesEstudiantiles"> | string;
}, "id">;
export type PublicacionesEstudiantilesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    _count?: Prisma.PublicacionesEstudiantilesCountOrderByAggregateInput;
    _avg?: Prisma.PublicacionesEstudiantilesAvgOrderByAggregateInput;
    _max?: Prisma.PublicacionesEstudiantilesMaxOrderByAggregateInput;
    _min?: Prisma.PublicacionesEstudiantilesMinOrderByAggregateInput;
    _sum?: Prisma.PublicacionesEstudiantilesSumOrderByAggregateInput;
};
export type PublicacionesEstudiantilesScalarWhereWithAggregatesInput = {
    AND?: Prisma.PublicacionesEstudiantilesScalarWhereWithAggregatesInput | Prisma.PublicacionesEstudiantilesScalarWhereWithAggregatesInput[];
    OR?: Prisma.PublicacionesEstudiantilesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PublicacionesEstudiantilesScalarWhereWithAggregatesInput | Prisma.PublicacionesEstudiantilesScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"PublicacionesEstudiantiles"> | number;
    titulo?: Prisma.StringWithAggregatesFilter<"PublicacionesEstudiantiles"> | string;
    anio?: Prisma.IntWithAggregatesFilter<"PublicacionesEstudiantiles"> | number;
    autor?: Prisma.StringWithAggregatesFilter<"PublicacionesEstudiantiles"> | string;
    area?: Prisma.StringWithAggregatesFilter<"PublicacionesEstudiantiles"> | string;
};
export type PublicacionesEstudiantilesCreateInput = {
    titulo: string;
    anio: number;
    autor: string;
    area: string;
};
export type PublicacionesEstudiantilesUncheckedCreateInput = {
    id?: number;
    titulo: string;
    anio: number;
    autor: string;
    area: string;
};
export type PublicacionesEstudiantilesUpdateInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    anio?: Prisma.IntFieldUpdateOperationsInput | number;
    autor?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PublicacionesEstudiantilesUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    anio?: Prisma.IntFieldUpdateOperationsInput | number;
    autor?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PublicacionesEstudiantilesCreateManyInput = {
    id?: number;
    titulo: string;
    anio: number;
    autor: string;
    area: string;
};
export type PublicacionesEstudiantilesUpdateManyMutationInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    anio?: Prisma.IntFieldUpdateOperationsInput | number;
    autor?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PublicacionesEstudiantilesUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    anio?: Prisma.IntFieldUpdateOperationsInput | number;
    autor?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PublicacionesEstudiantilesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type PublicacionesEstudiantilesAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
};
export type PublicacionesEstudiantilesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type PublicacionesEstudiantilesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
    autor?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type PublicacionesEstudiantilesSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    anio?: Prisma.SortOrder;
};
export type PublicacionesEstudiantilesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    anio?: boolean;
    autor?: boolean;
    area?: boolean;
}, ExtArgs["result"]["publicacionesEstudiantiles"]>;
export type PublicacionesEstudiantilesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    anio?: boolean;
    autor?: boolean;
    area?: boolean;
}, ExtArgs["result"]["publicacionesEstudiantiles"]>;
export type PublicacionesEstudiantilesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    anio?: boolean;
    autor?: boolean;
    area?: boolean;
}, ExtArgs["result"]["publicacionesEstudiantiles"]>;
export type PublicacionesEstudiantilesSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    anio?: boolean;
    autor?: boolean;
    area?: boolean;
};
export type PublicacionesEstudiantilesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "anio" | "autor" | "area", ExtArgs["result"]["publicacionesEstudiantiles"]>;
export type $PublicacionesEstudiantilesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PublicacionesEstudiantiles";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string;
        anio: number;
        autor: string;
        area: string;
    }, ExtArgs["result"]["publicacionesEstudiantiles"]>;
    composites: {};
};
export type PublicacionesEstudiantilesGetPayload<S extends boolean | null | undefined | PublicacionesEstudiantilesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload, S>;
export type PublicacionesEstudiantilesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PublicacionesEstudiantilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PublicacionesEstudiantilesCountAggregateInputType | true;
};
export interface PublicacionesEstudiantilesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PublicacionesEstudiantiles'];
        meta: {
            name: 'PublicacionesEstudiantiles';
        };
    };
    findUnique<T extends PublicacionesEstudiantilesFindUniqueArgs>(args: Prisma.SelectSubset<T, PublicacionesEstudiantilesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PublicacionesEstudiantilesClient<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PublicacionesEstudiantilesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PublicacionesEstudiantilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PublicacionesEstudiantilesClient<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PublicacionesEstudiantilesFindFirstArgs>(args?: Prisma.SelectSubset<T, PublicacionesEstudiantilesFindFirstArgs<ExtArgs>>): Prisma.Prisma__PublicacionesEstudiantilesClient<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PublicacionesEstudiantilesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PublicacionesEstudiantilesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PublicacionesEstudiantilesClient<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PublicacionesEstudiantilesFindManyArgs>(args?: Prisma.SelectSubset<T, PublicacionesEstudiantilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PublicacionesEstudiantilesCreateArgs>(args: Prisma.SelectSubset<T, PublicacionesEstudiantilesCreateArgs<ExtArgs>>): Prisma.Prisma__PublicacionesEstudiantilesClient<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PublicacionesEstudiantilesCreateManyArgs>(args?: Prisma.SelectSubset<T, PublicacionesEstudiantilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PublicacionesEstudiantilesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PublicacionesEstudiantilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PublicacionesEstudiantilesDeleteArgs>(args: Prisma.SelectSubset<T, PublicacionesEstudiantilesDeleteArgs<ExtArgs>>): Prisma.Prisma__PublicacionesEstudiantilesClient<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PublicacionesEstudiantilesUpdateArgs>(args: Prisma.SelectSubset<T, PublicacionesEstudiantilesUpdateArgs<ExtArgs>>): Prisma.Prisma__PublicacionesEstudiantilesClient<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PublicacionesEstudiantilesDeleteManyArgs>(args?: Prisma.SelectSubset<T, PublicacionesEstudiantilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PublicacionesEstudiantilesUpdateManyArgs>(args: Prisma.SelectSubset<T, PublicacionesEstudiantilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PublicacionesEstudiantilesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PublicacionesEstudiantilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PublicacionesEstudiantilesUpsertArgs>(args: Prisma.SelectSubset<T, PublicacionesEstudiantilesUpsertArgs<ExtArgs>>): Prisma.Prisma__PublicacionesEstudiantilesClient<runtime.Types.Result.GetResult<Prisma.$PublicacionesEstudiantilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PublicacionesEstudiantilesCountArgs>(args?: Prisma.Subset<T, PublicacionesEstudiantilesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PublicacionesEstudiantilesCountAggregateOutputType> : number>;
    aggregate<T extends PublicacionesEstudiantilesAggregateArgs>(args: Prisma.Subset<T, PublicacionesEstudiantilesAggregateArgs>): Prisma.PrismaPromise<GetPublicacionesEstudiantilesAggregateType<T>>;
    groupBy<T extends PublicacionesEstudiantilesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PublicacionesEstudiantilesGroupByArgs['orderBy'];
    } : {
        orderBy?: PublicacionesEstudiantilesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PublicacionesEstudiantilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicacionesEstudiantilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PublicacionesEstudiantilesFieldRefs;
}
export interface Prisma__PublicacionesEstudiantilesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PublicacionesEstudiantilesFieldRefs {
    readonly id: Prisma.FieldRef<"PublicacionesEstudiantiles", 'Int'>;
    readonly titulo: Prisma.FieldRef<"PublicacionesEstudiantiles", 'String'>;
    readonly anio: Prisma.FieldRef<"PublicacionesEstudiantiles", 'Int'>;
    readonly autor: Prisma.FieldRef<"PublicacionesEstudiantiles", 'String'>;
    readonly area: Prisma.FieldRef<"PublicacionesEstudiantiles", 'String'>;
}
export type PublicacionesEstudiantilesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    where: Prisma.PublicacionesEstudiantilesWhereUniqueInput;
};
export type PublicacionesEstudiantilesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    where: Prisma.PublicacionesEstudiantilesWhereUniqueInput;
};
export type PublicacionesEstudiantilesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    where?: Prisma.PublicacionesEstudiantilesWhereInput;
    orderBy?: Prisma.PublicacionesEstudiantilesOrderByWithRelationInput | Prisma.PublicacionesEstudiantilesOrderByWithRelationInput[];
    cursor?: Prisma.PublicacionesEstudiantilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublicacionesEstudiantilesScalarFieldEnum | Prisma.PublicacionesEstudiantilesScalarFieldEnum[];
};
export type PublicacionesEstudiantilesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    where?: Prisma.PublicacionesEstudiantilesWhereInput;
    orderBy?: Prisma.PublicacionesEstudiantilesOrderByWithRelationInput | Prisma.PublicacionesEstudiantilesOrderByWithRelationInput[];
    cursor?: Prisma.PublicacionesEstudiantilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublicacionesEstudiantilesScalarFieldEnum | Prisma.PublicacionesEstudiantilesScalarFieldEnum[];
};
export type PublicacionesEstudiantilesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    where?: Prisma.PublicacionesEstudiantilesWhereInput;
    orderBy?: Prisma.PublicacionesEstudiantilesOrderByWithRelationInput | Prisma.PublicacionesEstudiantilesOrderByWithRelationInput[];
    cursor?: Prisma.PublicacionesEstudiantilesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PublicacionesEstudiantilesScalarFieldEnum | Prisma.PublicacionesEstudiantilesScalarFieldEnum[];
};
export type PublicacionesEstudiantilesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublicacionesEstudiantilesCreateInput, Prisma.PublicacionesEstudiantilesUncheckedCreateInput>;
};
export type PublicacionesEstudiantilesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PublicacionesEstudiantilesCreateManyInput | Prisma.PublicacionesEstudiantilesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PublicacionesEstudiantilesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    data: Prisma.PublicacionesEstudiantilesCreateManyInput | Prisma.PublicacionesEstudiantilesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PublicacionesEstudiantilesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublicacionesEstudiantilesUpdateInput, Prisma.PublicacionesEstudiantilesUncheckedUpdateInput>;
    where: Prisma.PublicacionesEstudiantilesWhereUniqueInput;
};
export type PublicacionesEstudiantilesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PublicacionesEstudiantilesUpdateManyMutationInput, Prisma.PublicacionesEstudiantilesUncheckedUpdateManyInput>;
    where?: Prisma.PublicacionesEstudiantilesWhereInput;
    limit?: number;
};
export type PublicacionesEstudiantilesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PublicacionesEstudiantilesUpdateManyMutationInput, Prisma.PublicacionesEstudiantilesUncheckedUpdateManyInput>;
    where?: Prisma.PublicacionesEstudiantilesWhereInput;
    limit?: number;
};
export type PublicacionesEstudiantilesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    where: Prisma.PublicacionesEstudiantilesWhereUniqueInput;
    create: Prisma.XOR<Prisma.PublicacionesEstudiantilesCreateInput, Prisma.PublicacionesEstudiantilesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PublicacionesEstudiantilesUpdateInput, Prisma.PublicacionesEstudiantilesUncheckedUpdateInput>;
};
export type PublicacionesEstudiantilesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
    where: Prisma.PublicacionesEstudiantilesWhereUniqueInput;
};
export type PublicacionesEstudiantilesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PublicacionesEstudiantilesWhereInput;
    limit?: number;
};
export type PublicacionesEstudiantilesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PublicacionesEstudiantilesSelect<ExtArgs> | null;
    omit?: Prisma.PublicacionesEstudiantilesOmit<ExtArgs> | null;
};
