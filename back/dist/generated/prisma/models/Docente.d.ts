import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DocenteModel = runtime.Types.Result.DefaultSelection<Prisma.$DocentePayload>;
export type AggregateDocente = {
    _count: DocenteCountAggregateOutputType | null;
    _avg: DocenteAvgAggregateOutputType | null;
    _sum: DocenteSumAggregateOutputType | null;
    _min: DocenteMinAggregateOutputType | null;
    _max: DocenteMaxAggregateOutputType | null;
};
export type DocenteAvgAggregateOutputType = {
    id: number | null;
};
export type DocenteSumAggregateOutputType = {
    id: number | null;
};
export type DocenteMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    gradoAcademico: string | null;
    tipo: string | null;
    resumenCv: string | null;
    correoInstitucional: string | null;
    cargoAutoridad: string | null;
    imagen: string | null;
};
export type DocenteMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    gradoAcademico: string | null;
    tipo: string | null;
    resumenCv: string | null;
    correoInstitucional: string | null;
    cargoAutoridad: string | null;
    imagen: string | null;
};
export type DocenteCountAggregateOutputType = {
    id: number;
    nombre: number;
    gradoAcademico: number;
    tipo: number;
    resumenCv: number;
    correoInstitucional: number;
    cargoAutoridad: number;
    imagen: number;
    _all: number;
};
export type DocenteAvgAggregateInputType = {
    id?: true;
};
export type DocenteSumAggregateInputType = {
    id?: true;
};
export type DocenteMinAggregateInputType = {
    id?: true;
    nombre?: true;
    gradoAcademico?: true;
    tipo?: true;
    resumenCv?: true;
    correoInstitucional?: true;
    cargoAutoridad?: true;
    imagen?: true;
};
export type DocenteMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    gradoAcademico?: true;
    tipo?: true;
    resumenCv?: true;
    correoInstitucional?: true;
    cargoAutoridad?: true;
    imagen?: true;
};
export type DocenteCountAggregateInputType = {
    id?: true;
    nombre?: true;
    gradoAcademico?: true;
    tipo?: true;
    resumenCv?: true;
    correoInstitucional?: true;
    cargoAutoridad?: true;
    imagen?: true;
    _all?: true;
};
export type DocenteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocenteWhereInput;
    orderBy?: Prisma.DocenteOrderByWithRelationInput | Prisma.DocenteOrderByWithRelationInput[];
    cursor?: Prisma.DocenteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DocenteCountAggregateInputType;
    _avg?: DocenteAvgAggregateInputType;
    _sum?: DocenteSumAggregateInputType;
    _min?: DocenteMinAggregateInputType;
    _max?: DocenteMaxAggregateInputType;
};
export type GetDocenteAggregateType<T extends DocenteAggregateArgs> = {
    [P in keyof T & keyof AggregateDocente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDocente[P]> : Prisma.GetScalarType<T[P], AggregateDocente[P]>;
};
export type DocenteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocenteWhereInput;
    orderBy?: Prisma.DocenteOrderByWithAggregationInput | Prisma.DocenteOrderByWithAggregationInput[];
    by: Prisma.DocenteScalarFieldEnum[] | Prisma.DocenteScalarFieldEnum;
    having?: Prisma.DocenteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DocenteCountAggregateInputType | true;
    _avg?: DocenteAvgAggregateInputType;
    _sum?: DocenteSumAggregateInputType;
    _min?: DocenteMinAggregateInputType;
    _max?: DocenteMaxAggregateInputType;
};
export type DocenteGroupByOutputType = {
    id: number;
    nombre: string;
    gradoAcademico: string;
    tipo: string;
    resumenCv: string;
    correoInstitucional: string;
    cargoAutoridad: string | null;
    imagen: string;
    _count: DocenteCountAggregateOutputType | null;
    _avg: DocenteAvgAggregateOutputType | null;
    _sum: DocenteSumAggregateOutputType | null;
    _min: DocenteMinAggregateOutputType | null;
    _max: DocenteMaxAggregateOutputType | null;
};
export type GetDocenteGroupByPayload<T extends DocenteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DocenteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DocenteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DocenteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DocenteGroupByOutputType[P]>;
}>>;
export type DocenteWhereInput = {
    AND?: Prisma.DocenteWhereInput | Prisma.DocenteWhereInput[];
    OR?: Prisma.DocenteWhereInput[];
    NOT?: Prisma.DocenteWhereInput | Prisma.DocenteWhereInput[];
    id?: Prisma.IntFilter<"Docente"> | number;
    nombre?: Prisma.StringFilter<"Docente"> | string;
    gradoAcademico?: Prisma.StringFilter<"Docente"> | string;
    tipo?: Prisma.StringFilter<"Docente"> | string;
    resumenCv?: Prisma.StringFilter<"Docente"> | string;
    correoInstitucional?: Prisma.StringFilter<"Docente"> | string;
    cargoAutoridad?: Prisma.StringNullableFilter<"Docente"> | string | null;
    imagen?: Prisma.StringFilter<"Docente"> | string;
};
export type DocenteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    gradoAcademico?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    resumenCv?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    cargoAutoridad?: Prisma.SortOrderInput | Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
};
export type DocenteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DocenteWhereInput | Prisma.DocenteWhereInput[];
    OR?: Prisma.DocenteWhereInput[];
    NOT?: Prisma.DocenteWhereInput | Prisma.DocenteWhereInput[];
    nombre?: Prisma.StringFilter<"Docente"> | string;
    gradoAcademico?: Prisma.StringFilter<"Docente"> | string;
    tipo?: Prisma.StringFilter<"Docente"> | string;
    resumenCv?: Prisma.StringFilter<"Docente"> | string;
    correoInstitucional?: Prisma.StringFilter<"Docente"> | string;
    cargoAutoridad?: Prisma.StringNullableFilter<"Docente"> | string | null;
    imagen?: Prisma.StringFilter<"Docente"> | string;
}, "id">;
export type DocenteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    gradoAcademico?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    resumenCv?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    cargoAutoridad?: Prisma.SortOrderInput | Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
    _count?: Prisma.DocenteCountOrderByAggregateInput;
    _avg?: Prisma.DocenteAvgOrderByAggregateInput;
    _max?: Prisma.DocenteMaxOrderByAggregateInput;
    _min?: Prisma.DocenteMinOrderByAggregateInput;
    _sum?: Prisma.DocenteSumOrderByAggregateInput;
};
export type DocenteScalarWhereWithAggregatesInput = {
    AND?: Prisma.DocenteScalarWhereWithAggregatesInput | Prisma.DocenteScalarWhereWithAggregatesInput[];
    OR?: Prisma.DocenteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DocenteScalarWhereWithAggregatesInput | Prisma.DocenteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Docente"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Docente"> | string;
    gradoAcademico?: Prisma.StringWithAggregatesFilter<"Docente"> | string;
    tipo?: Prisma.StringWithAggregatesFilter<"Docente"> | string;
    resumenCv?: Prisma.StringWithAggregatesFilter<"Docente"> | string;
    correoInstitucional?: Prisma.StringWithAggregatesFilter<"Docente"> | string;
    cargoAutoridad?: Prisma.StringNullableWithAggregatesFilter<"Docente"> | string | null;
    imagen?: Prisma.StringWithAggregatesFilter<"Docente"> | string;
};
export type DocenteCreateInput = {
    nombre: string;
    gradoAcademico: string;
    tipo: string;
    resumenCv: string;
    correoInstitucional: string;
    cargoAutoridad?: string | null;
    imagen: string;
};
export type DocenteUncheckedCreateInput = {
    id?: number;
    nombre: string;
    gradoAcademico: string;
    tipo: string;
    resumenCv: string;
    correoInstitucional: string;
    cargoAutoridad?: string | null;
    imagen: string;
};
export type DocenteUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    gradoAcademico?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumenCv?: Prisma.StringFieldUpdateOperationsInput | string;
    correoInstitucional?: Prisma.StringFieldUpdateOperationsInput | string;
    cargoAutoridad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DocenteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    gradoAcademico?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumenCv?: Prisma.StringFieldUpdateOperationsInput | string;
    correoInstitucional?: Prisma.StringFieldUpdateOperationsInput | string;
    cargoAutoridad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DocenteCreateManyInput = {
    id?: number;
    nombre: string;
    gradoAcademico: string;
    tipo: string;
    resumenCv: string;
    correoInstitucional: string;
    cargoAutoridad?: string | null;
    imagen: string;
};
export type DocenteUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    gradoAcademico?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumenCv?: Prisma.StringFieldUpdateOperationsInput | string;
    correoInstitucional?: Prisma.StringFieldUpdateOperationsInput | string;
    cargoAutoridad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DocenteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    gradoAcademico?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    resumenCv?: Prisma.StringFieldUpdateOperationsInput | string;
    correoInstitucional?: Prisma.StringFieldUpdateOperationsInput | string;
    cargoAutoridad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imagen?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DocenteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    gradoAcademico?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    resumenCv?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    cargoAutoridad?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
};
export type DocenteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DocenteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    gradoAcademico?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    resumenCv?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    cargoAutoridad?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
};
export type DocenteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    gradoAcademico?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    resumenCv?: Prisma.SortOrder;
    correoInstitucional?: Prisma.SortOrder;
    cargoAutoridad?: Prisma.SortOrder;
    imagen?: Prisma.SortOrder;
};
export type DocenteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DocenteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    gradoAcademico?: boolean;
    tipo?: boolean;
    resumenCv?: boolean;
    correoInstitucional?: boolean;
    cargoAutoridad?: boolean;
    imagen?: boolean;
}, ExtArgs["result"]["docente"]>;
export type DocenteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    gradoAcademico?: boolean;
    tipo?: boolean;
    resumenCv?: boolean;
    correoInstitucional?: boolean;
    cargoAutoridad?: boolean;
    imagen?: boolean;
}, ExtArgs["result"]["docente"]>;
export type DocenteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    gradoAcademico?: boolean;
    tipo?: boolean;
    resumenCv?: boolean;
    correoInstitucional?: boolean;
    cargoAutoridad?: boolean;
    imagen?: boolean;
}, ExtArgs["result"]["docente"]>;
export type DocenteSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    gradoAcademico?: boolean;
    tipo?: boolean;
    resumenCv?: boolean;
    correoInstitucional?: boolean;
    cargoAutoridad?: boolean;
    imagen?: boolean;
};
export type DocenteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "gradoAcademico" | "tipo" | "resumenCv" | "correoInstitucional" | "cargoAutoridad" | "imagen", ExtArgs["result"]["docente"]>;
export type $DocentePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Docente";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        gradoAcademico: string;
        tipo: string;
        resumenCv: string;
        correoInstitucional: string;
        cargoAutoridad: string | null;
        imagen: string;
    }, ExtArgs["result"]["docente"]>;
    composites: {};
};
export type DocenteGetPayload<S extends boolean | null | undefined | DocenteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DocentePayload, S>;
export type DocenteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DocenteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DocenteCountAggregateInputType | true;
};
export interface DocenteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Docente'];
        meta: {
            name: 'Docente';
        };
    };
    findUnique<T extends DocenteFindUniqueArgs>(args: Prisma.SelectSubset<T, DocenteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DocenteClient<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DocenteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DocenteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocenteClient<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DocenteFindFirstArgs>(args?: Prisma.SelectSubset<T, DocenteFindFirstArgs<ExtArgs>>): Prisma.Prisma__DocenteClient<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DocenteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DocenteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DocenteClient<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DocenteFindManyArgs>(args?: Prisma.SelectSubset<T, DocenteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DocenteCreateArgs>(args: Prisma.SelectSubset<T, DocenteCreateArgs<ExtArgs>>): Prisma.Prisma__DocenteClient<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DocenteCreateManyArgs>(args?: Prisma.SelectSubset<T, DocenteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DocenteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DocenteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DocenteDeleteArgs>(args: Prisma.SelectSubset<T, DocenteDeleteArgs<ExtArgs>>): Prisma.Prisma__DocenteClient<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DocenteUpdateArgs>(args: Prisma.SelectSubset<T, DocenteUpdateArgs<ExtArgs>>): Prisma.Prisma__DocenteClient<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DocenteDeleteManyArgs>(args?: Prisma.SelectSubset<T, DocenteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DocenteUpdateManyArgs>(args: Prisma.SelectSubset<T, DocenteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DocenteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DocenteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DocenteUpsertArgs>(args: Prisma.SelectSubset<T, DocenteUpsertArgs<ExtArgs>>): Prisma.Prisma__DocenteClient<runtime.Types.Result.GetResult<Prisma.$DocentePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DocenteCountArgs>(args?: Prisma.Subset<T, DocenteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DocenteCountAggregateOutputType> : number>;
    aggregate<T extends DocenteAggregateArgs>(args: Prisma.Subset<T, DocenteAggregateArgs>): Prisma.PrismaPromise<GetDocenteAggregateType<T>>;
    groupBy<T extends DocenteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DocenteGroupByArgs['orderBy'];
    } : {
        orderBy?: DocenteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DocenteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocenteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DocenteFieldRefs;
}
export interface Prisma__DocenteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DocenteFieldRefs {
    readonly id: Prisma.FieldRef<"Docente", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Docente", 'String'>;
    readonly gradoAcademico: Prisma.FieldRef<"Docente", 'String'>;
    readonly tipo: Prisma.FieldRef<"Docente", 'String'>;
    readonly resumenCv: Prisma.FieldRef<"Docente", 'String'>;
    readonly correoInstitucional: Prisma.FieldRef<"Docente", 'String'>;
    readonly cargoAutoridad: Prisma.FieldRef<"Docente", 'String'>;
    readonly imagen: Prisma.FieldRef<"Docente", 'String'>;
}
export type DocenteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    where: Prisma.DocenteWhereUniqueInput;
};
export type DocenteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    where: Prisma.DocenteWhereUniqueInput;
};
export type DocenteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    where?: Prisma.DocenteWhereInput;
    orderBy?: Prisma.DocenteOrderByWithRelationInput | Prisma.DocenteOrderByWithRelationInput[];
    cursor?: Prisma.DocenteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocenteScalarFieldEnum | Prisma.DocenteScalarFieldEnum[];
};
export type DocenteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    where?: Prisma.DocenteWhereInput;
    orderBy?: Prisma.DocenteOrderByWithRelationInput | Prisma.DocenteOrderByWithRelationInput[];
    cursor?: Prisma.DocenteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocenteScalarFieldEnum | Prisma.DocenteScalarFieldEnum[];
};
export type DocenteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    where?: Prisma.DocenteWhereInput;
    orderBy?: Prisma.DocenteOrderByWithRelationInput | Prisma.DocenteOrderByWithRelationInput[];
    cursor?: Prisma.DocenteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DocenteScalarFieldEnum | Prisma.DocenteScalarFieldEnum[];
};
export type DocenteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocenteCreateInput, Prisma.DocenteUncheckedCreateInput>;
};
export type DocenteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DocenteCreateManyInput | Prisma.DocenteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocenteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    data: Prisma.DocenteCreateManyInput | Prisma.DocenteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DocenteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocenteUpdateInput, Prisma.DocenteUncheckedUpdateInput>;
    where: Prisma.DocenteWhereUniqueInput;
};
export type DocenteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DocenteUpdateManyMutationInput, Prisma.DocenteUncheckedUpdateManyInput>;
    where?: Prisma.DocenteWhereInput;
    limit?: number;
};
export type DocenteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DocenteUpdateManyMutationInput, Prisma.DocenteUncheckedUpdateManyInput>;
    where?: Prisma.DocenteWhereInput;
    limit?: number;
};
export type DocenteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    where: Prisma.DocenteWhereUniqueInput;
    create: Prisma.XOR<Prisma.DocenteCreateInput, Prisma.DocenteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DocenteUpdateInput, Prisma.DocenteUncheckedUpdateInput>;
};
export type DocenteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
    where: Prisma.DocenteWhereUniqueInput;
};
export type DocenteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DocenteWhereInput;
    limit?: number;
};
export type DocenteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DocenteSelect<ExtArgs> | null;
    omit?: Prisma.DocenteOmit<ExtArgs> | null;
};
