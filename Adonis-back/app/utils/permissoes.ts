export const permissions = [
  // USUÁRIO COMUM - 0
  {
    listCliente: false,
    viewCliente: false,
    createCliente: false,
    editCliente: false,
    deleteCliente: false,

    listConta: false,
    viewConta: false,
    createConta: false,
    editConta: false,
    deleteConta: false,

    listMovimentacao: false,
    viewMovimentacao: false,
    createMovimentacao: false,
    editMovimentacao: false,
    deleteMovimentacao: false,

    listAplicacao: false,
    viewAplicacao: false,
    createAplicacao: false,
    editAplicacao: false,
    deleteAplicacao: false,
  },

  // GERENTE/ADMIN - 1
  {
    listCliente: true,
    viewCliente: true,
    createCliente: true,
    editCliente: true,
    deleteCliente: true,

    listConta: true,
    viewConta: true,
    createConta: true,
    editConta: true,
    deleteConta: true,

    listMovimentacao: true,
    viewMovimentacao: true,
    createMovimentacao: true,
    editMovimentacao: true,
    deleteMovimentacao: true,

    listAplicacao: true,
    viewAplicacao: true,
    createAplicacao: true,
    editAplicacao: true,
    deleteAplicacao: true,
  },]