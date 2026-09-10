import { httpClient } from './http-client'

export const seccionPaginaService = {
  async findAll() {
    const response = await httpClient('/seccion-pagina')
    return response.json()
  },

  async save(section) {
    const response = await httpClient(
      `/seccion-pagina/${encodeURIComponent(section.claveCampo)}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          paginaSlug: section.paginaSlug,
          valor: section.valor,
          tipo: section.tipo,
        }),
      },
    )

    return response.json()
  },
}
