import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DirectivoEstudianteModel = runtime.Types.Result.DefaultSelection<Prisma.$DirectivoEstudiantePayload>;
export type AggregateDirectivoEstudiante = {
    _count: DirectivoEstudianteCountAggregateOutputType | null;
    _avg: DirectivoEstudianteAvgAggregateOutputType | null;
    _sum: DirectivoEstudianteSumAggregateOutputType | null;
    _min: DirectivoEstudianteMinAggregateOutputType | null;
    _max: DirectivoEstudianteMaxAggregateOutputType | null;
};
export type DirectivoEstudianteAvgAggregateOutputType = {
    id: number | null;
};
export type DirectivoEstudianteSumAggregateOutputType = {
    id: number | null;
};
export type DirectivoEstudianteMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    cargo: string | null;
    area: string | null;
};
export type DirectivoEstudianteMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    cargo: string | null;
    area: string | null;
};
export type DirectivoEstudianteCountAggregateOutputType = {
    id: number;
    nombre: number;
    cargo: number;
    area: number;
    _all: number;
};
export type DirectivoEstudianteAvgAggregateInputType = {
    id?: true;
};
export type DirectivoEstudianteSumAggregateInputType = {
    id?: true;
};
export type DirectivoEstudianteMinAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    area?: true;
};
export type DirectivoEstudianteMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    area?: true;
};
export type DirectivoEstudianteCountAggregateInputType = {
    id?: true;
    nombre?: true;
    cargo?: true;
    area?: true;
    _all?: true;
};
export type DirectivoEstudianteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DirectivoEstudianteWhereInput;
    orderBy?: Prisma.DirectivoEstudianteOrderByWithRelationInput | Prisma.DirectivoEstudianteOrderByWithRelationInput[];
    cursor?: Prisma.DirectivoEstudianteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DirectivoEstudianteCountAggregateInputType;
    _avg?: DirectivoEstudianteAvgAggregateInputType;
    _sum?: DirectivoEstudianteSumAggregateInputType;
    _min?: DirectivoEstudianteMinAggregateInputType;
    _max?: DirectivoEstudianteMaxAggregateInputType;
};
export type GetDirectivoEstudianteAggregateType<T extends DirectivoEstudianteAggregateArgs> = {
    [P in keyof T & keyof AggregateDirectivoEstudiante]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDirectivoEstudiante[P]> : Prisma.GetScalarType<T[P], AggregateDirectivoEstudiante[P]>;
};
export type DirectivoEstudianteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DirectivoEstudianteWhereInput;
    orderBy?: Prisma.DirectivoEstudianteOrderByWithAggregationInput | Prisma.DirectivoEstudianteOrderByWithAggregationInput[];
    by: Prisma.DirectivoEstudianteScalarFieldEnum[] | Prisma.DirectivoEstudianteScalarFieldEnum;
    having?: Prisma.DirectivoEstudianteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DirectivoEstudianteCountAggregateInputType | true;
    _avg?: DirectivoEstudianteAvgAggregateInputType;
    _sum?: DirectivoEstudianteSumAggregateInputType;
    _min?: DirectivoEstudianteMinAggregateInputType;
    _max?: DirectivoEstudianteMaxAggregateInputType;
};
export type DirectivoEstudianteGroupByOutputType = {
    id: number;
    nombre: string;
    cargo: string;
    area: string;
    _count: DirectivoEstudianteCountAggregateOutputType | null;
    _avg: DirectivoEstudianteAvgAggregateOutputType | null;
    _sum: DirectivoEstudianteSumAggregateOutputType | null;
    _min: DirectivoEstudianteMinAggregateOutputType | null;
    _max: DirectivoEstudianteMaxAggregateOutputType | null;
};
export type GetDirectivoEstudianteGroupByPayload<T extends DirectivoEstudianteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DirectivoEstudianteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DirectivoEstudianteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DirectivoEstudianteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DirectivoEstudianteGroupByOutputType[P]>;
}>>;
export type DirectivoEstudianteWhereInput = {
    AND?: Prisma.DirectivoEstudianteWhereInput | Prisma.DirectivoEstudianteWhereInput[];
    OR?: Prisma.DirectivoEstudianteWhereInput[];
    NOT?: Prisma.DirectivoEstudianteWhereInput | Prisma.DirectivoEstudianteWhereInput[];
    id?: Prisma.IntFilter<"DirectivoEstudiante"> | number;
    nombre?: Prisma.StringFilter<"DirectivoEstudiante"> | string;
    cargo?: Prisma.StringFilter<"DirectivoEstudiante"> | string;
    area?: Prisma.StringFilter<"DirectivoEstudiante"> | string;
};
export type DirectivoEstudianteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type DirectivoEstudianteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DirectivoEstudianteWhereInput | Prisma.DirectivoEstudianteWhereInput[];
    OR?: Prisma.DirectivoEstudianteWhereInput[];
    NOT?: Prisma.DirectivoEstudianteWhereInput | Prisma.DirectivoEstudianteWhereInput[];
    nombre?: Prisma.StringFilter<"DirectivoEstudiante"> | string;
    cargo?: Prisma.StringFilter<"DirectivoEstudiante"> | string;
    area?: Prisma.StringFilter<"DirectivoEstudiante"> | string;
}, "id">;
export type DirectivoEstudianteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
    _count?: Prisma.DirectivoEstudianteCountOrderByAggregateInput;
    _avg?: Prisma.DirectivoEstudianteAvgOrderByAggregateInput;
    _max?: Prisma.DirectivoEstudianteMaxOrderByAggregateInput;
    _min?: Prisma.DirectivoEstudianteMinOrderByAggregateInput;
    _sum?: Prisma.DirectivoEstudianteSumOrderByAggregateInput;
};
export type DirectivoEstudianteScalarWhereWithAggregatesInput = {
    AND?: Prisma.DirectivoEstudianteScalarWhereWithAggregatesInput | Prisma.DirectivoEstudianteScalarWhereWithAggregatesInput[];
    OR?: Prisma.DirectivoEstudianteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DirectivoEstudianteScalarWhereWithAggregatesInput | Prisma.DirectivoEstudianteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DirectivoEstudiante"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"DirectivoEstudiante"> | string;
    cargo?: Prisma.StringWithAggregatesFilter<"DirectivoEstudiante"> | string;
    area?: Prisma.StringWithAggregatesFilter<"DirectivoEstudiante"> | string;
};
export type DirectivoEstudianteCreateInput = {
    nombre: string;
    cargo: string;
    area: string;
};
export type DirectivoEstudianteUncheckedCreateInput = {
    id?: number;
    nombre: string;
    cargo: string;
    area: string;
};
export type DirectivoEstudianteUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DirectivoEstudianteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DirectivoEstudianteCreateManyInput = {
    id?: number;
    nombre: string;
    cargo: string;
    area: string;
};
export type DirectivoEstudianteUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DirectivoEstudianteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    cargo?: Prisma.StringFieldUpdateOperationsInput | string;
    area?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DirectivoEstudianteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type DirectivoEstudianteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DirectivoEstudianteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type DirectivoEstudianteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    cargo?: Prisma.SortOrder;
    area?: Prisma.SortOrder;
};
export type DirectivoEstudianteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DirectivoEstudianteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    area?: boolean;
}, ExtArgs["result"]["directivoEstudiante"]>;
export type DirectivoEstudianteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    area?: boolean;
}, ExtArgs["result"]["directivoEstudiante"]>;
export type DirectivoEstudianteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    area?: boolean;
}, ExtArgs["result"]["directivoEstudiante"]>;
export type DirectivoEstudianteSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    cargo?: boolean;
    area?: boolean;
};
export type DirectivoEstudianteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "cargo" | "area", ExtArgs["result"]["directivoEstudiante"]>;
export type $DirectivoEstudiantePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DirectivoEstudiante";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        cargo: string;
        area: string;
    }, ExtArgs["result"]["directivoEstudiante"]>;
    composites: {};
};
export type DirectivoEstudianteGetPayload<S extends boolean | null | undefined | DirectivoEstudianteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload, S>;
export type DirectivoEstudianteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DirectivoEstudianteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DirectivoEstudianteCountAggregateInputType | true;
};
export interface DirectivoEstudianteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DirectivoEstudiante'];
        meta: {
            name: 'DirectivoEstudiante';
        };
    };
    findUnique<T extends DirectivoEstudianteFindUniqueArgs>(args: Prisma.SelectSubset<T, DirectivoEstudianteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DirectivoEstudianteClient<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DirectivoEstudianteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DirectivoEstudianteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DirectivoEstudianteClient<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DirectivoEstudianteFindFirstArgs>(args?: Prisma.SelectSubset<T, DirectivoEstudianteFindFirstArgs<ExtArgs>>): Prisma.Prisma__DirectivoEstudianteClient<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DirectivoEstudianteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DirectivoEstudianteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DirectivoEstudianteClient<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DirectivoEstudianteFindManyArgs>(args?: Prisma.SelectSubset<T, DirectivoEstudianteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DirectivoEstudianteCreateArgs>(args: Prisma.SelectSubset<T, DirectivoEstudianteCreateArgs<ExtArgs>>): Prisma.Prisma__DirectivoEstudianteClient<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DirectivoEstudianteCreateManyArgs>(args?: Prisma.SelectSubset<T, DirectivoEstudianteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DirectivoEstudianteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DirectivoEstudianteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DirectivoEstudianteDeleteArgs>(args: Prisma.SelectSubset<T, DirectivoEstudianteDeleteArgs<ExtArgs>>): Prisma.Prisma__DirectivoEstudianteClient<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DirectivoEstudianteUpdateArgs>(args: Prisma.SelectSubset<T, DirectivoEstudianteUpdateArgs<ExtArgs>>): Prisma.Prisma__DirectivoEstudianteClient<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DirectivoEstudianteDeleteManyArgs>(args?: Prisma.SelectSubset<T, DirectivoEstudianteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DirectivoEstudianteUpdateManyArgs>(args: Prisma.SelectSubset<T, DirectivoEstudianteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DirectivoEstudianteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DirectivoEstudianteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DirectivoEstudianteUpsertArgs>(args: Prisma.SelectSubset<T, DirectivoEstudianteUpsertArgs<ExtArgs>>): Prisma.Prisma__DirectivoEstudianteClient<runtime.Types.Result.GetResult<Prisma.$DirectivoEstudiantePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DirectivoEstudianteCountArgs>(args?: Prisma.Subset<T, DirectivoEstudianteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DirectivoEstudianteCountAggregateOutputType> : number>;
    aggregate<T extends DirectivoEstudianteAggregateArgs>(args: Prisma.Subset<T, DirectivoEstudianteAggregateArgs>): Prisma.PrismaPromise<GetDirectivoEstudianteAggregateType<T>>;
    groupBy<T extends DirectivoEstudianteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DirectivoEstudianteGroupByArgs['orderBy'];
    } : {
        orderBy?: DirectivoEstudianteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DirectivoEstudianteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectivoEstudianteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DirectivoEstudianteFieldRefs;
}
export interface Prisma__DirectivoEstudianteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DirectivoEstudianteFieldRefs {
    readonly id: Prisma.FieldRef<"DirectivoEstudiante", 'Int'>;
    readonly nombre: Prisma.FieldRef<"DirectivoEstudiante", 'String'>;
    readonly cargo: Prisma.FieldRef<"DirectivoEstudiante", 'String'>;
    readonly area: Prisma.FieldRef<"DirectivoEstudiante", 'String'>;
}
export type DirectivoEstudianteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    where: Prisma.DirectivoEstudianteWhereUniqueInput;
};
export type DirectivoEstudianteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    where: Prisma.DirectivoEstudianteWhereUniqueInput;
};
export type DirectivoEstudianteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    where?: Prisma.DirectivoEstudianteWhereInput;
    orderBy?: Prisma.DirectivoEstudianteOrderByWithRelationInput | Prisma.DirectivoEstudianteOrderByWithRelationInput[];
    cursor?: Prisma.DirectivoEstudianteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DirectivoEstudianteScalarFieldEnum | Prisma.DirectivoEstudianteScalarFieldEnum[];
};
export type DirectivoEstudianteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    where?: Prisma.DirectivoEstudianteWhereInput;
    orderBy?: Prisma.DirectivoEstudianteOrderByWithRelationInput | Prisma.DirectivoEstudianteOrderByWithRelationInput[];
    cursor?: Prisma.DirectivoEstudianteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DirectivoEstudianteScalarFieldEnum | Prisma.DirectivoEstudianteScalarFieldEnum[];
};
export type DirectivoEstudianteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    where?: Prisma.DirectivoEstudianteWhereInput;
    orderBy?: Prisma.DirectivoEstudianteOrderByWithRelationInput | Prisma.DirectivoEstudianteOrderByWithRelationInput[];
    cursor?: Prisma.DirectivoEstudianteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DirectivoEstudianteScalarFieldEnum | Prisma.DirectivoEstudianteScalarFieldEnum[];
};
export type DirectivoEstudianteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DirectivoEstudianteCreateInput, Prisma.DirectivoEstudianteUncheckedCreateInput>;
};
export type DirectivoEstudianteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DirectivoEstudianteCreateManyInput | Prisma.DirectivoEstudianteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DirectivoEstudianteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    data: Prisma.DirectivoEstudianteCreateManyInput | Prisma.DirectivoEstudianteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DirectivoEstudianteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DirectivoEstudianteUpdateInput, Prisma.DirectivoEstudianteUncheckedUpdateInput>;
    where: Prisma.DirectivoEstudianteWhereUniqueInput;
};
export type DirectivoEstudianteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DirectivoEstudianteUpdateManyMutationInput, Prisma.DirectivoEstudianteUncheckedUpdateManyInput>;
    where?: Prisma.DirectivoEstudianteWhereInput;
    limit?: number;
};
export type DirectivoEstudianteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DirectivoEstudianteUpdateManyMutationInput, Prisma.DirectivoEstudianteUncheckedUpdateManyInput>;
    where?: Prisma.DirectivoEstudianteWhereInput;
    limit?: number;
};
export type DirectivoEstudianteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    where: Prisma.DirectivoEstudianteWhereUniqueInput;
    create: Prisma.XOR<Prisma.DirectivoEstudianteCreateInput, Prisma.DirectivoEstudianteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DirectivoEstudianteUpdateInput, Prisma.DirectivoEstudianteUncheckedUpdateInput>;
};
export type DirectivoEstudianteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
    where: Prisma.DirectivoEstudianteWhereUniqueInput;
};
export type DirectivoEstudianteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DirectivoEstudianteWhereInput;
    limit?: number;
};
export type DirectivoEstudianteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DirectivoEstudianteSelect<ExtArgs> | null;
    omit?: Prisma.DirectivoEstudianteOmit<ExtArgs> | null;
};
