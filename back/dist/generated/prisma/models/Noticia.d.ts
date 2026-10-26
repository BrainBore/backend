import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type NoticiaModel = runtime.Types.Result.DefaultSelection<Prisma.$NoticiaPayload>;
export type AggregateNoticia = {
    _count: NoticiaCountAggregateOutputType | null;
    _avg: NoticiaAvgAggregateOutputType | null;
    _sum: NoticiaSumAggregateOutputType | null;
    _min: NoticiaMinAggregateOutputType | null;
    _max: NoticiaMaxAggregateOutputType | null;
};
export type NoticiaAvgAggregateOutputType = {
    id: number | null;
};
export type NoticiaSumAggregateOutputType = {
    id: number | null;
};
export type NoticiaMinAggregateOutputType = {
    id: number | null;
    categoria: string | null;
    color: string | null;
    fecha: Date | null;
    titulo: string | null;
    extracto: string | null;
    imagenUrl: string | null;
    tiempoLectura: string | null;
    enlace: string | null;
    estado: string | null;
    fechaExpiracion: Date | null;
};
export type NoticiaMaxAggregateOutputType = {
    id: number | null;
    categoria: string | null;
    color: string | null;
    fecha: Date | null;
    titulo: string | null;
    extracto: string | null;
    imagenUrl: string | null;
    tiempoLectura: string | null;
    enlace: string | null;
    estado: string | null;
    fechaExpiracion: Date | null;
};
export type NoticiaCountAggregateOutputType = {
    id: number;
    categoria: number;
    color: number;
    fecha: number;
    titulo: number;
    extracto: number;
    imagenUrl: number;
    tiempoLectura: number;
    enlace: number;
    estado: number;
    fechaExpiracion: number;
    _all: number;
};
export type NoticiaAvgAggregateInputType = {
    id?: true;
};
export type NoticiaSumAggregateInputType = {
    id?: true;
};
export type NoticiaMinAggregateInputType = {
    id?: true;
    categoria?: true;
    color?: true;
    fecha?: true;
    titulo?: true;
    extracto?: true;
    imagenUrl?: true;
    tiempoLectura?: true;
    enlace?: true;
    estado?: true;
    fechaExpiracion?: true;
};
export type NoticiaMaxAggregateInputType = {
    id?: true;
    categoria?: true;
    color?: true;
    fecha?: true;
    titulo?: true;
    extracto?: true;
    imagenUrl?: true;
    tiempoLectura?: true;
    enlace?: true;
    estado?: true;
    fechaExpiracion?: true;
};
export type NoticiaCountAggregateInputType = {
    id?: true;
    categoria?: true;
    color?: true;
    fecha?: true;
    titulo?: true;
    extracto?: true;
    imagenUrl?: true;
    tiempoLectura?: true;
    enlace?: true;
    estado?: true;
    fechaExpiracion?: true;
    _all?: true;
};
export type NoticiaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NoticiaWhereInput;
    orderBy?: Prisma.NoticiaOrderByWithRelationInput | Prisma.NoticiaOrderByWithRelationInput[];
    cursor?: Prisma.NoticiaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NoticiaCountAggregateInputType;
    _avg?: NoticiaAvgAggregateInputType;
    _sum?: NoticiaSumAggregateInputType;
    _min?: NoticiaMinAggregateInputType;
    _max?: NoticiaMaxAggregateInputType;
};
export type GetNoticiaAggregateType<T extends NoticiaAggregateArgs> = {
    [P in keyof T & keyof AggregateNoticia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNoticia[P]> : Prisma.GetScalarType<T[P], AggregateNoticia[P]>;
};
export type NoticiaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NoticiaWhereInput;
    orderBy?: Prisma.NoticiaOrderByWithAggregationInput | Prisma.NoticiaOrderByWithAggregationInput[];
    by: Prisma.NoticiaScalarFieldEnum[] | Prisma.NoticiaScalarFieldEnum;
    having?: Prisma.NoticiaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NoticiaCountAggregateInputType | true;
    _avg?: NoticiaAvgAggregateInputType;
    _sum?: NoticiaSumAggregateInputType;
    _min?: NoticiaMinAggregateInputType;
    _max?: NoticiaMaxAggregateInputType;
};
export type NoticiaGroupByOutputType = {
    id: number;
    categoria: string;
    color: string;
    fecha: Date;
    titulo: string;
    extracto: string;
    imagenUrl: string | null;
    tiempoLectura: string;
    enlace: string;
    estado: string;
    fechaExpiracion: Date | null;
    _count: NoticiaCountAggregateOutputType | null;
    _avg: NoticiaAvgAggregateOutputType | null;
    _sum: NoticiaSumAggregateOutputType | null;
    _min: NoticiaMinAggregateOutputType | null;
    _max: NoticiaMaxAggregateOutputType | null;
};
export type GetNoticiaGroupByPayload<T extends NoticiaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NoticiaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NoticiaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NoticiaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NoticiaGroupByOutputType[P]>;
}>>;
export type NoticiaWhereInput = {
    AND?: Prisma.NoticiaWhereInput | Prisma.NoticiaWhereInput[];
    OR?: Prisma.NoticiaWhereInput[];
    NOT?: Prisma.NoticiaWhereInput | Prisma.NoticiaWhereInput[];
    id?: Prisma.IntFilter<"Noticia"> | number;
    categoria?: Prisma.StringFilter<"Noticia"> | string;
    color?: Prisma.StringFilter<"Noticia"> | string;
    fecha?: Prisma.DateTimeFilter<"Noticia"> | Date | string;
    titulo?: Prisma.StringFilter<"Noticia"> | string;
    extracto?: Prisma.StringFilter<"Noticia"> | string;
    imagenUrl?: Prisma.StringNullableFilter<"Noticia"> | string | null;
    tiempoLectura?: Prisma.StringFilter<"Noticia"> | string;
    enlace?: Prisma.StringFilter<"Noticia"> | string;
    estado?: Prisma.StringFilter<"Noticia"> | string;
    fechaExpiracion?: Prisma.DateTimeNullableFilter<"Noticia"> | Date | string | null;
};
export type NoticiaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    extracto?: Prisma.SortOrder;
    imagenUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    tiempoLectura?: Prisma.SortOrder;
    enlace?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaExpiracion?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type NoticiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.NoticiaWhereInput | Prisma.NoticiaWhereInput[];
    OR?: Prisma.NoticiaWhereInput[];
    NOT?: Prisma.NoticiaWhereInput | Prisma.NoticiaWhereInput[];
    categoria?: Prisma.StringFilter<"Noticia"> | string;
    color?: Prisma.StringFilter<"Noticia"> | string;
    fecha?: Prisma.DateTimeFilter<"Noticia"> | Date | string;
    titulo?: Prisma.StringFilter<"Noticia"> | string;
    extracto?: Prisma.StringFilter<"Noticia"> | string;
    imagenUrl?: Prisma.StringNullableFilter<"Noticia"> | string | null;
    tiempoLectura?: Prisma.StringFilter<"Noticia"> | string;
    enlace?: Prisma.StringFilter<"Noticia"> | string;
    estado?: Prisma.StringFilter<"Noticia"> | string;
    fechaExpiracion?: Prisma.DateTimeNullableFilter<"Noticia"> | Date | string | null;
}, "id">;
export type NoticiaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    extracto?: Prisma.SortOrder;
    imagenUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    tiempoLectura?: Prisma.SortOrder;
    enlace?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaExpiracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.NoticiaCountOrderByAggregateInput;
    _avg?: Prisma.NoticiaAvgOrderByAggregateInput;
    _max?: Prisma.NoticiaMaxOrderByAggregateInput;
    _min?: Prisma.NoticiaMinOrderByAggregateInput;
    _sum?: Prisma.NoticiaSumOrderByAggregateInput;
};
export type NoticiaScalarWhereWithAggregatesInput = {
    AND?: Prisma.NoticiaScalarWhereWithAggregatesInput | Prisma.NoticiaScalarWhereWithAggregatesInput[];
    OR?: Prisma.NoticiaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NoticiaScalarWhereWithAggregatesInput | Prisma.NoticiaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Noticia"> | number;
    categoria?: Prisma.StringWithAggregatesFilter<"Noticia"> | string;
    color?: Prisma.StringWithAggregatesFilter<"Noticia"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Noticia"> | Date | string;
    titulo?: Prisma.StringWithAggregatesFilter<"Noticia"> | string;
    extracto?: Prisma.StringWithAggregatesFilter<"Noticia"> | string;
    imagenUrl?: Prisma.StringNullableWithAggregatesFilter<"Noticia"> | string | null;
    tiempoLectura?: Prisma.StringWithAggregatesFilter<"Noticia"> | string;
    enlace?: Prisma.StringWithAggregatesFilter<"Noticia"> | string;
    estado?: Prisma.StringWithAggregatesFilter<"Noticia"> | string;
    fechaExpiracion?: Prisma.DateTimeNullableWithAggregatesFilter<"Noticia"> | Date | string | null;
};
export type NoticiaCreateInput = {
    categoria: string;
    color: string;
    fecha: Date | string;
    titulo: string;
    extracto: string;
    imagenUrl?: string | null;
    tiempoLectura: string;
    enlace: string;
    estado?: string;
    fechaExpiracion?: Date | string | null;
};
export type NoticiaUncheckedCreateInput = {
    id?: number;
    categoria: string;
    color: string;
    fecha: Date | string;
    titulo: string;
    extracto: string;
    imagenUrl?: string | null;
    tiempoLectura: string;
    enlace: string;
    estado?: string;
    fechaExpiracion?: Date | string | null;
};
export type NoticiaUpdateInput = {
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    extracto?: Prisma.StringFieldUpdateOperationsInput | string;
    imagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempoLectura?: Prisma.StringFieldUpdateOperationsInput | string;
    enlace?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaExpiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NoticiaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    extracto?: Prisma.StringFieldUpdateOperationsInput | string;
    imagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempoLectura?: Prisma.StringFieldUpdateOperationsInput | string;
    enlace?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaExpiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NoticiaCreateManyInput = {
    id?: number;
    categoria: string;
    color: string;
    fecha: Date | string;
    titulo: string;
    extracto: string;
    imagenUrl?: string | null;
    tiempoLectura: string;
    enlace: string;
    estado?: string;
    fechaExpiracion?: Date | string | null;
};
export type NoticiaUpdateManyMutationInput = {
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    extracto?: Prisma.StringFieldUpdateOperationsInput | string;
    imagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempoLectura?: Prisma.StringFieldUpdateOperationsInput | string;
    enlace?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaExpiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NoticiaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    categoria?: Prisma.StringFieldUpdateOperationsInput | string;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    extracto?: Prisma.StringFieldUpdateOperationsInput | string;
    imagenUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempoLectura?: Prisma.StringFieldUpdateOperationsInput | string;
    enlace?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaExpiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type NoticiaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    extracto?: Prisma.SortOrder;
    imagenUrl?: Prisma.SortOrder;
    tiempoLectura?: Prisma.SortOrder;
    enlace?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaExpiracion?: Prisma.SortOrder;
};
export type NoticiaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type NoticiaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    extracto?: Prisma.SortOrder;
    imagenUrl?: Prisma.SortOrder;
    tiempoLectura?: Prisma.SortOrder;
    enlace?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaExpiracion?: Prisma.SortOrder;
};
export type NoticiaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    extracto?: Prisma.SortOrder;
    imagenUrl?: Prisma.SortOrder;
    tiempoLectura?: Prisma.SortOrder;
    enlace?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaExpiracion?: Prisma.SortOrder;
};
export type NoticiaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type NoticiaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoria?: boolean;
    color?: boolean;
    fecha?: boolean;
    titulo?: boolean;
    extracto?: boolean;
    imagenUrl?: boolean;
    tiempoLectura?: boolean;
    enlace?: boolean;
    estado?: boolean;
    fechaExpiracion?: boolean;
}, ExtArgs["result"]["noticia"]>;
export type NoticiaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoria?: boolean;
    color?: boolean;
    fecha?: boolean;
    titulo?: boolean;
    extracto?: boolean;
    imagenUrl?: boolean;
    tiempoLectura?: boolean;
    enlace?: boolean;
    estado?: boolean;
    fechaExpiracion?: boolean;
}, ExtArgs["result"]["noticia"]>;
export type NoticiaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoria?: boolean;
    color?: boolean;
    fecha?: boolean;
    titulo?: boolean;
    extracto?: boolean;
    imagenUrl?: boolean;
    tiempoLectura?: boolean;
    enlace?: boolean;
    estado?: boolean;
    fechaExpiracion?: boolean;
}, ExtArgs["result"]["noticia"]>;
export type NoticiaSelectScalar = {
    id?: boolean;
    categoria?: boolean;
    color?: boolean;
    fecha?: boolean;
    titulo?: boolean;
    extracto?: boolean;
    imagenUrl?: boolean;
    tiempoLectura?: boolean;
    enlace?: boolean;
    estado?: boolean;
    fechaExpiracion?: boolean;
};
export type NoticiaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "categoria" | "color" | "fecha" | "titulo" | "extracto" | "imagenUrl" | "tiempoLectura" | "enlace" | "estado" | "fechaExpiracion", ExtArgs["result"]["noticia"]>;
export type $NoticiaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Noticia";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        categoria: string;
        color: string;
        fecha: Date;
        titulo: string;
        extracto: string;
        imagenUrl: string | null;
        tiempoLectura: string;
        enlace: string;
        estado: string;
        fechaExpiracion: Date | null;
    }, ExtArgs["result"]["noticia"]>;
    composites: {};
};
export type NoticiaGetPayload<S extends boolean | null | undefined | NoticiaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NoticiaPayload, S>;
export type NoticiaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NoticiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NoticiaCountAggregateInputType | true;
};
export interface NoticiaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Noticia'];
        meta: {
            name: 'Noticia';
        };
    };
    findUnique<T extends NoticiaFindUniqueArgs>(args: Prisma.SelectSubset<T, NoticiaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NoticiaClient<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NoticiaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NoticiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NoticiaClient<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NoticiaFindFirstArgs>(args?: Prisma.SelectSubset<T, NoticiaFindFirstArgs<ExtArgs>>): Prisma.Prisma__NoticiaClient<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NoticiaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NoticiaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NoticiaClient<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NoticiaFindManyArgs>(args?: Prisma.SelectSubset<T, NoticiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NoticiaCreateArgs>(args: Prisma.SelectSubset<T, NoticiaCreateArgs<ExtArgs>>): Prisma.Prisma__NoticiaClient<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NoticiaCreateManyArgs>(args?: Prisma.SelectSubset<T, NoticiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NoticiaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NoticiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NoticiaDeleteArgs>(args: Prisma.SelectSubset<T, NoticiaDeleteArgs<ExtArgs>>): Prisma.Prisma__NoticiaClient<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NoticiaUpdateArgs>(args: Prisma.SelectSubset<T, NoticiaUpdateArgs<ExtArgs>>): Prisma.Prisma__NoticiaClient<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NoticiaDeleteManyArgs>(args?: Prisma.SelectSubset<T, NoticiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NoticiaUpdateManyArgs>(args: Prisma.SelectSubset<T, NoticiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NoticiaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NoticiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NoticiaUpsertArgs>(args: Prisma.SelectSubset<T, NoticiaUpsertArgs<ExtArgs>>): Prisma.Prisma__NoticiaClient<runtime.Types.Result.GetResult<Prisma.$NoticiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NoticiaCountArgs>(args?: Prisma.Subset<T, NoticiaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NoticiaCountAggregateOutputType> : number>;
    aggregate<T extends NoticiaAggregateArgs>(args: Prisma.Subset<T, NoticiaAggregateArgs>): Prisma.PrismaPromise<GetNoticiaAggregateType<T>>;
    groupBy<T extends NoticiaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NoticiaGroupByArgs['orderBy'];
    } : {
        orderBy?: NoticiaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NoticiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NoticiaFieldRefs;
}
export interface Prisma__NoticiaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NoticiaFieldRefs {
    readonly id: Prisma.FieldRef<"Noticia", 'Int'>;
    readonly categoria: Prisma.FieldRef<"Noticia", 'String'>;
    readonly color: Prisma.FieldRef<"Noticia", 'String'>;
    readonly fecha: Prisma.FieldRef<"Noticia", 'DateTime'>;
    readonly titulo: Prisma.FieldRef<"Noticia", 'String'>;
    readonly extracto: Prisma.FieldRef<"Noticia", 'String'>;
    readonly imagenUrl: Prisma.FieldRef<"Noticia", 'String'>;
    readonly tiempoLectura: Prisma.FieldRef<"Noticia", 'String'>;
    readonly enlace: Prisma.FieldRef<"Noticia", 'String'>;
    readonly estado: Prisma.FieldRef<"Noticia", 'String'>;
    readonly fechaExpiracion: Prisma.FieldRef<"Noticia", 'DateTime'>;
}
export type NoticiaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    where: Prisma.NoticiaWhereUniqueInput;
};
export type NoticiaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    where: Prisma.NoticiaWhereUniqueInput;
};
export type NoticiaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    where?: Prisma.NoticiaWhereInput;
    orderBy?: Prisma.NoticiaOrderByWithRelationInput | Prisma.NoticiaOrderByWithRelationInput[];
    cursor?: Prisma.NoticiaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NoticiaScalarFieldEnum | Prisma.NoticiaScalarFieldEnum[];
};
export type NoticiaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    where?: Prisma.NoticiaWhereInput;
    orderBy?: Prisma.NoticiaOrderByWithRelationInput | Prisma.NoticiaOrderByWithRelationInput[];
    cursor?: Prisma.NoticiaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NoticiaScalarFieldEnum | Prisma.NoticiaScalarFieldEnum[];
};
export type NoticiaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    where?: Prisma.NoticiaWhereInput;
    orderBy?: Prisma.NoticiaOrderByWithRelationInput | Prisma.NoticiaOrderByWithRelationInput[];
    cursor?: Prisma.NoticiaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NoticiaScalarFieldEnum | Prisma.NoticiaScalarFieldEnum[];
};
export type NoticiaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NoticiaCreateInput, Prisma.NoticiaUncheckedCreateInput>;
};
export type NoticiaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NoticiaCreateManyInput | Prisma.NoticiaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NoticiaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    data: Prisma.NoticiaCreateManyInput | Prisma.NoticiaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NoticiaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NoticiaUpdateInput, Prisma.NoticiaUncheckedUpdateInput>;
    where: Prisma.NoticiaWhereUniqueInput;
};
export type NoticiaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NoticiaUpdateManyMutationInput, Prisma.NoticiaUncheckedUpdateManyInput>;
    where?: Prisma.NoticiaWhereInput;
    limit?: number;
};
export type NoticiaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NoticiaUpdateManyMutationInput, Prisma.NoticiaUncheckedUpdateManyInput>;
    where?: Prisma.NoticiaWhereInput;
    limit?: number;
};
export type NoticiaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    where: Prisma.NoticiaWhereUniqueInput;
    create: Prisma.XOR<Prisma.NoticiaCreateInput, Prisma.NoticiaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NoticiaUpdateInput, Prisma.NoticiaUncheckedUpdateInput>;
};
export type NoticiaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
    where: Prisma.NoticiaWhereUniqueInput;
};
export type NoticiaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NoticiaWhereInput;
    limit?: number;
};
export type NoticiaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NoticiaSelect<ExtArgs> | null;
    omit?: Prisma.NoticiaOmit<ExtArgs> | null;
};
