import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AuxiliarModel = runtime.Types.Result.DefaultSelection<Prisma.$AuxiliarPayload>;
export type AggregateAuxiliar = {
    _count: AuxiliarCountAggregateOutputType | null;
    _avg: AuxiliarAvgAggregateOutputType | null;
    _sum: AuxiliarSumAggregateOutputType | null;
    _min: AuxiliarMinAggregateOutputType | null;
    _max: AuxiliarMaxAggregateOutputType | null;
};
export type AuxiliarAvgAggregateOutputType = {
    id: number | null;
};
export type AuxiliarSumAggregateOutputType = {
    id: number | null;
};
export type AuxiliarMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    tipo: string | null;
    foto: string | null;
    materia: string | null;
    paralelo: string | null;
    diasAuxiliatura: string | null;
    horarioAuxiliatura: string | null;
    aula: string | null;
};
export type AuxiliarMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    tipo: string | null;
    foto: string | null;
    materia: string | null;
    paralelo: string | null;
    diasAuxiliatura: string | null;
    horarioAuxiliatura: string | null;
    aula: string | null;
};
export type AuxiliarCountAggregateOutputType = {
    id: number;
    nombre: number;
    tipo: number;
    foto: number;
    materia: number;
    paralelo: number;
    diasAuxiliatura: number;
    horarioAuxiliatura: number;
    aula: number;
    _all: number;
};
export type AuxiliarAvgAggregateInputType = {
    id?: true;
};
export type AuxiliarSumAggregateInputType = {
    id?: true;
};
export type AuxiliarMinAggregateInputType = {
    id?: true;
    nombre?: true;
    tipo?: true;
    foto?: true;
    materia?: true;
    paralelo?: true;
    diasAuxiliatura?: true;
    horarioAuxiliatura?: true;
    aula?: true;
};
export type AuxiliarMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    tipo?: true;
    foto?: true;
    materia?: true;
    paralelo?: true;
    diasAuxiliatura?: true;
    horarioAuxiliatura?: true;
    aula?: true;
};
export type AuxiliarCountAggregateInputType = {
    id?: true;
    nombre?: true;
    tipo?: true;
    foto?: true;
    materia?: true;
    paralelo?: true;
    diasAuxiliatura?: true;
    horarioAuxiliatura?: true;
    aula?: true;
    _all?: true;
};
export type AuxiliarAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuxiliarWhereInput;
    orderBy?: Prisma.AuxiliarOrderByWithRelationInput | Prisma.AuxiliarOrderByWithRelationInput[];
    cursor?: Prisma.AuxiliarWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuxiliarCountAggregateInputType;
    _avg?: AuxiliarAvgAggregateInputType;
    _sum?: AuxiliarSumAggregateInputType;
    _min?: AuxiliarMinAggregateInputType;
    _max?: AuxiliarMaxAggregateInputType;
};
export type GetAuxiliarAggregateType<T extends AuxiliarAggregateArgs> = {
    [P in keyof T & keyof AggregateAuxiliar]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuxiliar[P]> : Prisma.GetScalarType<T[P], AggregateAuxiliar[P]>;
};
export type AuxiliarGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuxiliarWhereInput;
    orderBy?: Prisma.AuxiliarOrderByWithAggregationInput | Prisma.AuxiliarOrderByWithAggregationInput[];
    by: Prisma.AuxiliarScalarFieldEnum[] | Prisma.AuxiliarScalarFieldEnum;
    having?: Prisma.AuxiliarScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuxiliarCountAggregateInputType | true;
    _avg?: AuxiliarAvgAggregateInputType;
    _sum?: AuxiliarSumAggregateInputType;
    _min?: AuxiliarMinAggregateInputType;
    _max?: AuxiliarMaxAggregateInputType;
};
export type AuxiliarGroupByOutputType = {
    id: number;
    nombre: string;
    tipo: string;
    foto: string;
    materia: string | null;
    paralelo: string | null;
    diasAuxiliatura: string | null;
    horarioAuxiliatura: string | null;
    aula: string | null;
    _count: AuxiliarCountAggregateOutputType | null;
    _avg: AuxiliarAvgAggregateOutputType | null;
    _sum: AuxiliarSumAggregateOutputType | null;
    _min: AuxiliarMinAggregateOutputType | null;
    _max: AuxiliarMaxAggregateOutputType | null;
};
export type GetAuxiliarGroupByPayload<T extends AuxiliarGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuxiliarGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuxiliarGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuxiliarGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuxiliarGroupByOutputType[P]>;
}>>;
export type AuxiliarWhereInput = {
    AND?: Prisma.AuxiliarWhereInput | Prisma.AuxiliarWhereInput[];
    OR?: Prisma.AuxiliarWhereInput[];
    NOT?: Prisma.AuxiliarWhereInput | Prisma.AuxiliarWhereInput[];
    id?: Prisma.IntFilter<"Auxiliar"> | number;
    nombre?: Prisma.StringFilter<"Auxiliar"> | string;
    tipo?: Prisma.StringFilter<"Auxiliar"> | string;
    foto?: Prisma.StringFilter<"Auxiliar"> | string;
    materia?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
    paralelo?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
    diasAuxiliatura?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
    horarioAuxiliatura?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
    aula?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
};
export type AuxiliarOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    materia?: Prisma.SortOrderInput | Prisma.SortOrder;
    paralelo?: Prisma.SortOrderInput | Prisma.SortOrder;
    diasAuxiliatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    horarioAuxiliatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    aula?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type AuxiliarWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AuxiliarWhereInput | Prisma.AuxiliarWhereInput[];
    OR?: Prisma.AuxiliarWhereInput[];
    NOT?: Prisma.AuxiliarWhereInput | Prisma.AuxiliarWhereInput[];
    nombre?: Prisma.StringFilter<"Auxiliar"> | string;
    tipo?: Prisma.StringFilter<"Auxiliar"> | string;
    foto?: Prisma.StringFilter<"Auxiliar"> | string;
    materia?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
    paralelo?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
    diasAuxiliatura?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
    horarioAuxiliatura?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
    aula?: Prisma.StringNullableFilter<"Auxiliar"> | string | null;
}, "id">;
export type AuxiliarOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    materia?: Prisma.SortOrderInput | Prisma.SortOrder;
    paralelo?: Prisma.SortOrderInput | Prisma.SortOrder;
    diasAuxiliatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    horarioAuxiliatura?: Prisma.SortOrderInput | Prisma.SortOrder;
    aula?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AuxiliarCountOrderByAggregateInput;
    _avg?: Prisma.AuxiliarAvgOrderByAggregateInput;
    _max?: Prisma.AuxiliarMaxOrderByAggregateInput;
    _min?: Prisma.AuxiliarMinOrderByAggregateInput;
    _sum?: Prisma.AuxiliarSumOrderByAggregateInput;
};
export type AuxiliarScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuxiliarScalarWhereWithAggregatesInput | Prisma.AuxiliarScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuxiliarScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuxiliarScalarWhereWithAggregatesInput | Prisma.AuxiliarScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Auxiliar"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Auxiliar"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"Auxiliar"> | string;
    foto?: Prisma.StringWithAggregatesFilter<"Auxiliar"> | string;
    materia?: Prisma.StringNullableWithAggregatesFilter<"Auxiliar"> | string | null;
    paralelo?: Prisma.StringNullableWithAggregatesFilter<"Auxiliar"> | string | null;
    diasAuxiliatura?: Prisma.StringNullableWithAggregatesFilter<"Auxiliar"> | string | null;
    horarioAuxiliatura?: Prisma.StringNullableWithAggregatesFilter<"Auxiliar"> | string | null;
    aula?: Prisma.StringNullableWithAggregatesFilter<"Auxiliar"> | string | null;
};
export type AuxiliarCreateInput = {
    nombre: string;
    tipo: string;
    foto: string;
    materia?: string | null;
    paralelo?: string | null;
    diasAuxiliatura?: string | null;
    horarioAuxiliatura?: string | null;
    aula?: string | null;
};
export type AuxiliarUncheckedCreateInput = {
    id?: number;
    nombre: string;
    tipo: string;
    foto: string;
    materia?: string | null;
    paralelo?: string | null;
    diasAuxiliatura?: string | null;
    horarioAuxiliatura?: string | null;
    aula?: string | null;
};
export type AuxiliarUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.StringFieldUpdateOperationsInput | string;
    materia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paralelo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    diasAuxiliatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    horarioAuxiliatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AuxiliarUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.StringFieldUpdateOperationsInput | string;
    materia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paralelo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    diasAuxiliatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    horarioAuxiliatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AuxiliarCreateManyInput = {
    id?: number;
    nombre: string;
    tipo: string;
    foto: string;
    materia?: string | null;
    paralelo?: string | null;
    diasAuxiliatura?: string | null;
    horarioAuxiliatura?: string | null;
    aula?: string | null;
};
export type AuxiliarUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.StringFieldUpdateOperationsInput | string;
    materia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paralelo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    diasAuxiliatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    horarioAuxiliatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AuxiliarUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    foto?: Prisma.StringFieldUpdateOperationsInput | string;
    materia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paralelo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    diasAuxiliatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    horarioAuxiliatura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aula?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AuxiliarCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    paralelo?: Prisma.SortOrder;
    diasAuxiliatura?: Prisma.SortOrder;
    horarioAuxiliatura?: Prisma.SortOrder;
    aula?: Prisma.SortOrder;
};
export type AuxiliarAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AuxiliarMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    paralelo?: Prisma.SortOrder;
    diasAuxiliatura?: Prisma.SortOrder;
    horarioAuxiliatura?: Prisma.SortOrder;
    aula?: Prisma.SortOrder;
};
export type AuxiliarMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    foto?: Prisma.SortOrder;
    materia?: Prisma.SortOrder;
    paralelo?: Prisma.SortOrder;
    diasAuxiliatura?: Prisma.SortOrder;
    horarioAuxiliatura?: Prisma.SortOrder;
    aula?: Prisma.SortOrder;
};
export type AuxiliarSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AuxiliarSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    foto?: boolean;
    materia?: boolean;
    paralelo?: boolean;
    diasAuxiliatura?: boolean;
    horarioAuxiliatura?: boolean;
    aula?: boolean;
}, ExtArgs["result"]["auxiliar"]>;
export type AuxiliarSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    foto?: boolean;
    materia?: boolean;
    paralelo?: boolean;
    diasAuxiliatura?: boolean;
    horarioAuxiliatura?: boolean;
    aula?: boolean;
}, ExtArgs["result"]["auxiliar"]>;
export type AuxiliarSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    foto?: boolean;
    materia?: boolean;
    paralelo?: boolean;
    diasAuxiliatura?: boolean;
    horarioAuxiliatura?: boolean;
    aula?: boolean;
}, ExtArgs["result"]["auxiliar"]>;
export type AuxiliarSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    foto?: boolean;
    materia?: boolean;
    paralelo?: boolean;
    diasAuxiliatura?: boolean;
    horarioAuxiliatura?: boolean;
    aula?: boolean;
};
export type AuxiliarOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "tipo" | "foto" | "materia" | "paralelo" | "diasAuxiliatura" | "horarioAuxiliatura" | "aula", ExtArgs["result"]["auxiliar"]>;
export type $AuxiliarPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Auxiliar";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        tipo: string;
        foto: string;
        materia: string | null;
        paralelo: string | null;
        diasAuxiliatura: string | null;
        horarioAuxiliatura: string | null;
        aula: string | null;
    }, ExtArgs["result"]["auxiliar"]>;
    composites: {};
};
export type AuxiliarGetPayload<S extends boolean | null | undefined | AuxiliarDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload, S>;
export type AuxiliarCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuxiliarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuxiliarCountAggregateInputType | true;
};
export interface AuxiliarDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Auxiliar'];
        meta: {
            name: 'Auxiliar';
        };
    };
    findUnique<T extends AuxiliarFindUniqueArgs>(args: Prisma.SelectSubset<T, AuxiliarFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuxiliarClient<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuxiliarFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuxiliarFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuxiliarClient<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuxiliarFindFirstArgs>(args?: Prisma.SelectSubset<T, AuxiliarFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuxiliarClient<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuxiliarFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuxiliarFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuxiliarClient<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuxiliarFindManyArgs>(args?: Prisma.SelectSubset<T, AuxiliarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuxiliarCreateArgs>(args: Prisma.SelectSubset<T, AuxiliarCreateArgs<ExtArgs>>): Prisma.Prisma__AuxiliarClient<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuxiliarCreateManyArgs>(args?: Prisma.SelectSubset<T, AuxiliarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuxiliarCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuxiliarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuxiliarDeleteArgs>(args: Prisma.SelectSubset<T, AuxiliarDeleteArgs<ExtArgs>>): Prisma.Prisma__AuxiliarClient<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuxiliarUpdateArgs>(args: Prisma.SelectSubset<T, AuxiliarUpdateArgs<ExtArgs>>): Prisma.Prisma__AuxiliarClient<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuxiliarDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuxiliarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuxiliarUpdateManyArgs>(args: Prisma.SelectSubset<T, AuxiliarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuxiliarUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuxiliarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuxiliarUpsertArgs>(args: Prisma.SelectSubset<T, AuxiliarUpsertArgs<ExtArgs>>): Prisma.Prisma__AuxiliarClient<runtime.Types.Result.GetResult<Prisma.$AuxiliarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuxiliarCountArgs>(args?: Prisma.Subset<T, AuxiliarCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuxiliarCountAggregateOutputType> : number>;
    aggregate<T extends AuxiliarAggregateArgs>(args: Prisma.Subset<T, AuxiliarAggregateArgs>): Prisma.PrismaPromise<GetAuxiliarAggregateType<T>>;
    groupBy<T extends AuxiliarGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuxiliarGroupByArgs['orderBy'];
    } : {
        orderBy?: AuxiliarGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuxiliarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuxiliarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuxiliarFieldRefs;
}
export interface Prisma__AuxiliarClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuxiliarFieldRefs {
    readonly id: Prisma.FieldRef<"Auxiliar", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Auxiliar", 'String'>;
    readonly tipo: Prisma.FieldRef<"Auxiliar", 'String'>;
    readonly foto: Prisma.FieldRef<"Auxiliar", 'String'>;
    readonly materia: Prisma.FieldRef<"Auxiliar", 'String'>;
    readonly paralelo: Prisma.FieldRef<"Auxiliar", 'String'>;
    readonly diasAuxiliatura: Prisma.FieldRef<"Auxiliar", 'String'>;
    readonly horarioAuxiliatura: Prisma.FieldRef<"Auxiliar", 'String'>;
    readonly aula: Prisma.FieldRef<"Auxiliar", 'String'>;
}
export type AuxiliarFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    where: Prisma.AuxiliarWhereUniqueInput;
};
export type AuxiliarFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    where: Prisma.AuxiliarWhereUniqueInput;
};
export type AuxiliarFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    where?: Prisma.AuxiliarWhereInput;
    orderBy?: Prisma.AuxiliarOrderByWithRelationInput | Prisma.AuxiliarOrderByWithRelationInput[];
    cursor?: Prisma.AuxiliarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuxiliarScalarFieldEnum | Prisma.AuxiliarScalarFieldEnum[];
};
export type AuxiliarFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    where?: Prisma.AuxiliarWhereInput;
    orderBy?: Prisma.AuxiliarOrderByWithRelationInput | Prisma.AuxiliarOrderByWithRelationInput[];
    cursor?: Prisma.AuxiliarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuxiliarScalarFieldEnum | Prisma.AuxiliarScalarFieldEnum[];
};
export type AuxiliarFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    where?: Prisma.AuxiliarWhereInput;
    orderBy?: Prisma.AuxiliarOrderByWithRelationInput | Prisma.AuxiliarOrderByWithRelationInput[];
    cursor?: Prisma.AuxiliarWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuxiliarScalarFieldEnum | Prisma.AuxiliarScalarFieldEnum[];
};
export type AuxiliarCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuxiliarCreateInput, Prisma.AuxiliarUncheckedCreateInput>;
};
export type AuxiliarCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuxiliarCreateManyInput | Prisma.AuxiliarCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuxiliarCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    data: Prisma.AuxiliarCreateManyInput | Prisma.AuxiliarCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuxiliarUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuxiliarUpdateInput, Prisma.AuxiliarUncheckedUpdateInput>;
    where: Prisma.AuxiliarWhereUniqueInput;
};
export type AuxiliarUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuxiliarUpdateManyMutationInput, Prisma.AuxiliarUncheckedUpdateManyInput>;
    where?: Prisma.AuxiliarWhereInput;
    limit?: number;
};
export type AuxiliarUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuxiliarUpdateManyMutationInput, Prisma.AuxiliarUncheckedUpdateManyInput>;
    where?: Prisma.AuxiliarWhereInput;
    limit?: number;
};
export type AuxiliarUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    where: Prisma.AuxiliarWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuxiliarCreateInput, Prisma.AuxiliarUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuxiliarUpdateInput, Prisma.AuxiliarUncheckedUpdateInput>;
};
export type AuxiliarDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
    where: Prisma.AuxiliarWhereUniqueInput;
};
export type AuxiliarDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuxiliarWhereInput;
    limit?: number;
};
export type AuxiliarDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuxiliarSelect<ExtArgs> | null;
    omit?: Prisma.AuxiliarOmit<ExtArgs> | null;
};
