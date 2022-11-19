const types = {
  QUOTATION_LIST: 'QUOTATION_LIST',

  SUPPLIER_RFQ_TYPE: 'SUPPLIER_RFQ_TYPE',
  SUPPLIER_STATUS: 'SUPPLIER_STATUS',
  SUPPLIER_DELTA_PN: 'SUPPLIER_DELTA_PN',
  SUPPLIER_VENDOR_PN: 'SUPPLIER_VENDOR_PN',
  SUPPLIER_QUOTATION_ID: 'SUPPLIER_QUOTATION_ID',
  SUPPLIER_FORM_NO: 'SUPPLIER_FORM_NO',

  CPC_RFQ_TYPE: 'CPC_RFQ_TYPE',
  CPC_STATUS: 'CPC_STATUS',
  CPC_STATUS_ENUM: 'CPC_STATUS_ENUM',
  CPC_DELTA_PN: 'CPC_DELTA_PN',
  CPC_VENDOR_PN: 'CPC_VENDOR_PN',
  CPC_FROM_RFQ_DATE: 'CPC_FROM_RFQ_DATE',
  CPC_TO_RFQ_DATE: 'CPC_TO_RFQ_DATE',
  CPC_VENDOR_CODE: 'CPC_VENDOR_CODE',
  CPC_QUOTATION_ID: 'CPC_QUOTATION_ID',
  CPC_DELTA_PN_SINGLE: 'CPC_DELTA_PN_SINGLE',
  CPC_OA_CODE: 'CPC_OA_CODE',
  CPC_GROUP_ID: 'CPC_GROUP_ID',
  CPC_GROUP_UUID: 'CPC_GROUP_UUID',
  CPC_FORM_NO: 'CPC_FORM_NO',

  PARAMETER_VALUE: 'PARAMETER_VALUE',

  SUPERVISOR_DELTA_PN: 'SUPERVISOR_DELTA_PN',
  SUPERVISOR_VENDOR_PN: 'SUPERVISOR_VENDOR_PN',
  SUPERVISOR_FROM_RFQ_DATE: 'SUPERVISOR_FROM_RFQ_DATE',
  SUPERVISOR_TO_RFQ_DATE: 'SUPERVISOR_TO_RFQ_DATE',
  SUPERVISOR_GROUP_ID: 'SUPERVISOR_GROUP_ID',
  SUPERVISOR_GROUP_UUID: 'SUPERVISOR_GROUP_UUID',

  HISTORY_REPORT_RFQ_TYPE: 'HISTORY_REPORT_RFQ_TYPE',
  HISTORY_REPORT_DELTA_PN: 'HISTORY_REPORT_DELTA_PN',
  HISTORY_REPORT_VENDIR_CDOE: 'HISTORY_REPORT_VENDIR_CDOE',
  HISTORY_REPORT_VENDIR_PN: 'HISTORY_REPORT_VENDIR_PN',
  HISTORY_REPORT_QUOTE_FROM_DATE: 'HISTORY_REPORT_QUOTE_FROM_DATE',
  HISTORY_REPORT_QUOTE_TO_DATE: 'HISTORY_REPORT_QUOTE_TO_DATE',
  HISTORY_REPORT_APPROVE_FROM_DATE: 'HISTORY_REPORT_APPROVE_FROM_DATE',
  HISTORY_REPORT_APPROVE_TO_DATE: 'HISTORY_REPORT_APPROVE_TO_DATE',


  STATUS_REPORT_RFQ_TYPE: 'STATUS_REPORT_RFQ_TYPE',
  STATUS_REPORT_STATS: 'STATUS_REPORT_STATS',
  STATUS_REPORT_BUYER: 'STATUS_REPORT_BUYER',
  STATUS_REPORT_FORM_NO: 'STATUS_REPORT_FORM_NO',
  STATUS_REPORT_PLANT_CODE: 'STATUS_REPORT_PLANT_CODE',
  STATUS_REPORT_VENDOR_CODE: 'STATUS_REPORT_VENDOR_CODE',
  STATUS_REPORT_PART_NO: 'STAUTS_REPORT_PART_NO',
  STATUS_REPORT_VENDOR_PN: 'STATUS_REPORT_VENDOR_PN',
  STATUS_REPORT_APPLY_FROM_DATE: 'STATUS_REPORT_APPLY_FROM_DATE',
  STATUS_REPORT_APPLY_TO_DATE: 'STATUS_REPORT_APPLY_TO_DATE',
  STATUS_REPORT_APPROVE_FROM_DATE: 'STATUS_REPORT_APPROVE_FROM_DATE',
  STATUS_REPORT_APPROVE_TO_DATE: 'STATUS_REPORT_APPROVE_TO_DATE',
 }

const state = {
  quotationList: [],

  supplierRfqType: 'COMPONENT',
  supplierStatus: '',
  supplierDeltaPn: '',
  supplierVendorPn: '',
  supplierQuotationId: '',
  supplierFormNo: '',

  cpcRfqType: 'COMPONENT',
  cpcStatus: '',
  cpcStatusEnum: '',
  cpcDeltaPn: '',
  cpcVendorPn: '',
  cpcFromRfqDate: '',
  cpcToRfqDate: '',
  cpcVendorCode: '',
  cpcQuotationId: '',
  cpcDeltaPnSingle: '',
  cpcOaCode: '',
  cpcGroupId: '',
  cpcGroupUuid: '',
  cpcFormNo: '',

  parameterValue: '',

  supervisorDeltaPn: '',
  supervisorVendorCode: '',
  supervisorFromRfqDate: '',
  supervisorToRfqDate: '',
  supervisorGroupId: '',
  supervisorGroupUuid: '',

  historyReportRfqType: 'COMPONENT',
  historyReportDeltaPn: '',
  historyReportVendorCode: '',
  historyReportVendorPn: '',
  historyReportQuoteFromDate: '',
  historyReportQuoteToDate: '',
  historyReportApproveFromDate: '',
  historyReportApproveToDate: '',

  statusReportRfqType: 'COMPONENT',
  statusReportStatus: '',
  statusReportBuyer: '',
  statusReportFormNo: '',
  statusReportPlantCode: '',
  statusReportVendorCode: '',
  statusReportPartNo: '',
  statusReportVendorPn: '',
  statusReportApplyFromDate: '',
  statusReportApplyToDate: '',
  statusReportApproveFromDate: '',
  statusReportApproveToDate: ''
}

const getters = {
  getQuotationList: state => state.quotationList,

  getSupplierRfqType: state => state.supplierRfqType,
  getSupplierStatus: state => state.supplierStatus,
  getSupplierDeltaPn: state => state.supplierDeltaPn,
  getSupplierVendorPn: state => state.supplierVendorPn,
  getSupplierQuotationId: state => state.supplierQuotationId,
  getSupplierFormNo: state => state.supplierFormNo,

  getCpcRfqType: state => state.cpcRfqType,
  getCpcStatus: state => state.cpcStatus,
  getCpcStatusEnum: state => state.cpcStatusEnum,
  getCpcDeltaPn: state => state.cpcDeltaPn,
  getCpcVendorPn: state => state.cpcVendorPn,
  getCpcFromRfqDate: state => state.cpcFromRfqDate,
  getCpcToRfqDate: state => state.cpcToRfqDate,
  getCpcVendorCode: state => state.cpcVendorCode,
  getCpcQuotationId: state => state.cpcQuotationId,
  getCpcDeltaPnSingle: state => state.cpcDeltaPnSingle,
  getCpcOaCode: state => state.cpcOaCode,
  getCpcGroupId: state => state.cpcGroupId,
  getCpcGroupUuid: state => state.cpcGroupUuid,
  getCpcFormNo: state => state.cpcFormNo,
  
  getParameterValue: state => state.parameterValue,

  getSupervisorDeltaPn: state => state.supervisorDeltaPn,
  getSupervisorVendorCode: state => state.supervisorVendorCode,
  getSupervisorFromRfqDate: state => state.supervisorFromRfqDate,
  getSupervisorToRfqDate: state => state.supervisorToRfqDate,
  getSupervisorGroupId: state => state.supervisorGroupId,
  getSupervisorGroupUuid: state => state.supervisorGroupUuid,

  getHistoryReportRfqType: state => state.historyReportRfqType,
  getHistoryReportDeltaPn: state => state.historyReportDeltaPn,
  getHistoryReportVendorCode: state => state.historyReportVendorCode,
  getHistoryReportVendorPn: state => state.historyReportVendorPn,
  getHistoryReportQuoteFromDate: state => state.historyReportQuoteFromDate,
  getHistoryReportQuoteToDate: state => state.historyReportQuoteToDate,
  getHistoryReportApproveFromDate: state => state.historyReportApproveFromDate,
  getHistoryReportApproveToDate: state => state.historyReportApproveToDate,

  getStatusReportRfqType: state => state.statusReportRfqType,
  getStatusReportStatus: state => state.statusReportStatus,
  getStatusReportBuyer: state=> state.statusReportBuyer,
  getStatusReportFormNo: state => state.statusReportFormNo,
  getStatusReportPlantCode: state => state.statusReportPlantCode,
  getStatusReportVendorCode: state => state.statusReportVendorCode,
  getStatusReportPartNo: state => state.statusReportPartNo,
  getStatusReportVendorPn: state => state.statusReportVendorPn,
  getStatusReportApplyFromDate: state=> state.statusReportApplyFromDate,
  getStatusReportApplyToDate: state=> state.statusReportApplyToDate,
  getStatusReportApproveFromDate: state=> state.statusReportApproveFromDate,
  getStatusReportApproveToDate: state=> state.statusReportApproveToDate
}

const actions = {
  setQuotationList({ commit }, quotationList) {
    commit(types.QUOTATION_LIST, quotationList)
  },

  setSupplierRfqType({ commit }, supplierRfqType) {
    commit(types.SUPPLIER_RFQ_TYPE, supplierRfqType)
  },
  setSupplierStatus({ commit }, supplierStatus) {
    commit(types.SUPPLIER_STATUS, supplierStatus)
  },
  setSupplierDeltaPn({ commit }, supplierDeltaPn) {
    commit(types.SUPPLIER_DELTA_PN, supplierDeltaPn)
  },
  setSupplierVendorPn({ commit }, supplierVendorPn) {
    commit(types.SUPPLIER_VENDOR_PN, supplierVendorPn)
  },
  setSupplierQuotationId({ commit }, supplierQuotationId) {
    commit(types.SUPPLIER_QUOTATION_ID, supplierQuotationId)
  },
  setSupplierFormNo({ commit }, supplierFormNo) {
    commit(types.SUPPLIER_FORM_NO, supplierFormNo)
  },

  setCpcRfqType({ commit }, cpcRfqType) {
    commit(types.CPC_RFQ_TYPE, cpcRfqType)
  },
  setCpcStatus({ commit }, cpcStatus) {
    commit(types.CPC_STATUS, cpcStatus)
  },
  setCpcStatusEnum({ commit }, cpcStatusEnum) {
    commit(types.CPC_STATUS_ENUM, cpcStatusEnum)
  },
  setCpcDeltaPn({ commit }, cpcDeltaPn) {
    commit(types.CPC_DELTA_PN, cpcDeltaPn)
  },
  setCpcVendorPn({ commit }, cpcVendorPn) {
    commit(types.CPC_VENDOR_PN, cpcVendorPn)
  },
  setCpcFromRfqDate( {commit}, cpcFromRfqDate) {
    commit(types.CPC_FROM_RFQ_DATE, cpcFromRfqDate)
  },
  setCpcToRfqDate( {commit}, cpcToRfqDate) {
    commit(types.CPC_TO_RFQ_DATE, cpcToRfqDate)
  },
  setCpcVendorCode( {commit}, cpcVendorCode) {
    commit(types.CPC_VENDOR_CODE, cpcVendorCode)
  },
  setCpcQuotationId( {commit}, cpcQuotationId) {
    commit(types.CPC_QUOTATION_ID, cpcQuotationId)
  },
  setCpcDeltaPnSingle( {commit}, cpcDeltaPnSingle) {
    commit(types.CPC_DELTA_PN_SINGLE, cpcDeltaPnSingle)
  },
  setCpcOaCode( {commit}, cpcOaCode) {
    commit(types.CPC_OA_CODE, cpcOaCode)
  },
  setCpcGroupId( {commit}, cpcGroupId) {
    commit(types.CPC_GROUP_ID, cpcGroupId)
  },
  setCpcGroupUuid( {commit}, cpcGroupUuid) {
    commit(types.CPC_GROUP_UUID, cpcGroupUuid)
  },
  setCpcFormNo( {commit}, cpcFormNo) {
    commit(types.CPC_FORM_NO, cpcFormNo)
  },

  setRarameterValue( {commit}, parameterValue) {
    commit(types.PARAMETER_VALUE, parameterValue)
  },

  setSupervisorDeltaPn( {commit}, supervisorDeltaPn) {
    commit(types.SUPERVISOR_DELTA_PN, supervisorDeltaPn)
  },
  setSupervisorVendorCode( {commit}, supervisorVendorCode) {
    commit(types.SUPERVISOR_VENDOR_CODE, supervisorVendorCode)
  },
  setSupervisorFromRfqDate( {commit}, supervisorFromRfqDate) {
    commit(types.SUPERVISOR_FROM_RFQ_DATE, supervisorFromRfqDate)
  },
  setSupervisorToRfqDate( {commit}, supervisorToRfqDate) {
    commit(types.SUPERVISOR_TO_RFQ_DATE, supervisorToRfqDate)
  },
  setSupervisorGroupId( {commit}, supervisorGroupId) {
    commit(types.SUPERVISOR_GROUP_ID, supervisorGroupId)
  },
  setSupervisorGroupUuid( {commit}, supervisorGroupUuid) {
    commit(types.SUPERVISOR_GROUP_UUID, supervisorGroupUuid)
  },

  setHistoryReportRfqType( {commit}, historyReportRfqType) {
    commit(types.HISTORY_REPORT_RFQ_TYPE, historyReportRfqType)
  },
  setHistoryReportDeltaPn( {commit}, historyReportDeltaPn) {
    commit(types.HISTORY_REPORT_DELTA_PN, historyReportDeltaPn)
  },
  setHistoryReportVendorCode( {commit}, historyReportVendorCode) {
    commit(types.HISTORY_REPORT_VENDIR_CDOE, historyReportVendorCode)
  },
  setHistoryReportVendorPn( {commit}, historyReportVendorPn) {
    commit(types.HISTORY_REPORT_VENDIR_PN, historyReportVendorPn)
  },
  setHistoryReportQuoteFromDate( {commit}, historyReportQuoteFromDate) {
    commit(types.HISTORY_REPORT_QUOTE_FROM_DATE, historyReportQuoteFromDate)
  },
  setHistoryReportQuoteToDate( {commit}, historyReportQuoteToDate) {
    commit(types.HISTORY_REPORT_QUOTE_TO_DATE, historyReportQuoteToDate)
  },
  setHistoryReportApproveFromDate( {commit}, historyReportApproveFromDate) {
    commit(types.HISTORY_REPORT_APPROVE_FROM_DATE, historyReportApproveFromDate)
  },
  setHistoryReportApproveToDate( {commit}, historyReportApproveToDate) {
    commit(types.HISTORY_REPORT_APPROVE_TO_DATE, historyReportApproveToDate)
  },

  setStatusReportRfqType( {commit}, statusReportRfqType) {
    commit(types.STATUS_REPORT_RFQ_TYPE, statusReportRfqType)
  },
  setStatusReportStatus( {commit}, statusReportStatus) {
    commit(types.STATUS_REPORT_STATS, statusReportStatus)
  },
  setStatusReportBuyer( {commit}, statusReportBuyer) {
    commit(types.STATUS_REPORT_BUYER, statusReportBuyer)
  },
  setStatusReportFormNo( {commit}, statusReportFormNo) {
    commit(types.STATUS_REPORT_FORM_NO, statusReportFormNo)
  },
  setStatusReportPlantCode( {commit}, statusReportPlantCode) {
    commit(types.STATUS_REPORT_PLANT_CODE, statusReportPlantCode)
  },
  setStatusReportPartNo( {commit}, statusReportPartNo) {
    commit(types.STATUS_REPORT_PART_NO, statusReportPartNo)
  },
  setStatusReportVendorCode( {commit}, statusReportVendorCode) {
    commit(types.STATUS_REPORT_VENDOR_CODE, statusReportVendorCode)
  },
  setStatusReportVendorPn( {commit}, statusReportVendorPn) {
    commit(types.STATUS_REPORT_VENDOR_PN, statusReportVendorPn)
  },
  setStatusReportApplyFromDate( {commit}, statusReportApplyFromDate) {
    commit(types.STATUS_REPORT_APPLY_FROM_DATE, statusReportApplyFromDate)
  },
  setStatusReportApplyToDate( {commit}, statusReportApplyToDate) {
    commit(types.STATUS_REPORT_APPLY_TO_DATE, statusReportApplyToDate)
  },
  setStatusReportApproveFromDate( {commit}, statusReportApproveFromDate) {
    commit(types.STATUS_REPORT_APPROVE_FROM_DATE, statusReportApproveFromDate)
  },
  setStatusReportApproveToDate( {commit}, statusReportApproveToDate) {
    commit(types.STATUS_REPORT_APPROVE_TO_DATE, statusReportApproveToDate)
  },
}

const mutations = {
  [types.QUOTATION_LIST](state, quotationList) {
    state.quotationList = quotationList
  },

  [types.SUPPLIER_RFQ_TYPE](state, supplierRfqType) {
    state.supplierRfqType = supplierRfqType
  },
  [types.SUPPLIER_STATUS](state, supplierStatus) {
    state.supplierStatus = supplierStatus
  },
  [types.SUPPLIER_DELTA_PN](state, supplierDeltaPn) {
    state.supplierDeltaPn = supplierDeltaPn
  },
  [types.SUPPLIER_VENDOR_PN](state, supplierVendorPn) {
    state.supplierVendorPn = supplierVendorPn
  },
  [types.SUPPLIER_QUOTATION_ID](state, supplierQuotationId) {
    state.supplierQuotationId = supplierQuotationId
  },
  [types.SUPPLIER_FORM_NO](state, supplierFormNo) {
    state.supplierFormNo = supplierFormNo
  },

  [types.CPC_RFQ_TYPE](state, cpcRfqType) {
    state.cpcRfqType = cpcRfqType
  },
  [types.CPC_STATUS](state, cpcStatus) {
    state.cpcStatus = cpcStatus
  },
  [types.CPC_STATUS_ENUM](state, cpcStatusEnum) {
    state.cpcStatusEnum = cpcStatusEnum
  },
  [types.CPC_DELTA_PN](state, cpcDeltaPn) {
    state.cpcDeltaPn = cpcDeltaPn
  },
  [types.CPC_VENDOR_PN](state, cpcVendorPn) {
    state.cpcVendorPn = cpcVendorPn
  },
  [types.CPC_FROM_RFQ_DATE](state, cpcFromRfqDate) {
    state.cpcFromRfqDate = cpcFromRfqDate
  },
  [types.CPC_TO_RFQ_DATE](state, cpcToRfqDate) {
    state.cpcToRfqDate = cpcToRfqDate
  },
  [types.CPC_VENDOR_CODE](state, cpcVendorCode) {
    state.cpcVendorCode = cpcVendorCode
  },
  [types.CPC_QUOTATION_ID](state, cpcQuotationId) {
    state.cpcQuotationId = cpcQuotationId
  },
  [types.CPC_DELTA_PN_SINGLE](state, cpcDeltaPnSingle) {
    state.cpcDeltaPnSingle = cpcDeltaPnSingle
  },
  [types.CPC_OA_CODE](state, cpcOaCode) {
    state.cpcOaCode = cpcOaCode
  },
  [types.CPC_GROUP_ID](state, cpcGroupId) {
    state.cpcGroupId = cpcGroupId
  },
  [types.CPC_GROUP_UUID](state, cpcGroupUuid) {
    state.cpcGroupUuid = cpcGroupUuid
  },
  [types.CPC_FORM_NO](state, cpcFormNo) {
    state.cpcFormNo = cpcFormNo
  },

  [types.PARAMETER_VALUE](state, parameterValue) {
    state.parameterValue = parameterValue
  },

  [types.SUPERVISOR_DELTA_PN](state, supervisorDeltaPn) {
    state.supervisorDeltaPn = supervisorDeltaPn
  },
  [types.SUPERVISOR_VENDOR_PN](state, supervisorVendorPn) {
    state.supervisorVendorPn = supervisorVendorPn
  },
  [types.SUPERVISOR_FROM_RFQ_DATE](state, supervisorFromRfqDate) {
    state.supervisorFromRfqDate = supervisorFromRfqDate
  },
  [types.SUPERVISOR_TO_RFQ_DATE](state, supervisorToRfqDate) {
    state.supervisorToRfqDate = supervisorToRfqDate
  },
  [types.SUPERVISOR_GROUP_ID](state, supervisorGroupId) {
    state.supervisorGroupId = supervisorGroupId
  },
  [types.SUPERVISOR_GROUP_UUID](state, supervisorGroupUuid) {
    state.supervisorGroupUuid = supervisorGroupUuid
  },

  [types.HISTORY_REPORT_RFQ_TYPE](state, historyReportRfqType) {
    state.historyReportRfqType = historyReportRfqType
  },
  [types.HISTORY_REPORT_DELTA_PN](state, historyReportDeltaPn) {
    state.historyReportDeltaPn = historyReportDeltaPn
  },
  [types.HISTORY_REPORT_VENDIR_CDOE](state, historyReportVendorCode) {
    state.historyReportVendorCode = historyReportVendorCode
  },
  [types.HISTORY_REPORT_VENDIR_PN](state, historyReportVendorPn) {
    state.historyReportVendorPn = historyReportVendorPn
  },
  [types.HISTORY_REPORT_QUOTE_FROM_DATE](state, historyReportQuoteFromDate) {
    state.historyReportQuoteFromDate = historyReportQuoteFromDate
  },
  [types.HISTORY_REPORT_QUOTE_TO_DATE](state, historyReportQuoteToDate) {
    state.historyReportQuoteToDate = historyReportQuoteToDate
  },
  [types.HISTORY_REPORT_APPROVE_FROM_DATE](state, historyReportApproveFromDate) {
    state.historyReportApproveFromDate = historyReportApproveFromDate
  },
  [types.HISTORY_REPORT_APPROVE_TO_DATE](state, historyReportApproveToDate) {
    state.historyReportApproveToDate = historyReportApproveToDate
  },

  
  [types.STATUS_REPORT_RFQ_TYPE](state, statusReportRfqType) {
    state.statusReportRfqType = statusReportRfqType
  },
  [types.STATUS_REPORT_STATS](state, statusReportStatus) {
    state.statusReportStatus = statusReportStatus
  },
  [types.STATUS_REPORT_FORM_NO](state, statusReportFormNo) {
    state.statusReportFormNo = statusReportFormNo
  },
  [types.STATUS_REPORT_BUYER](state, statusReportBuyer) {
    state.statusReportBuyer = statusReportBuyer
  },
  [types.STATUS_REPORT_PART_NO](state, statusReportPartNo) {
    state.statusReportPartNo = statusReportPartNo
  },
  [types.STATUS_REPORT_PLANT_CODE](state, statusReportPlantCode) {
    state.statusReportPlantCode = statusReportPlantCode
  },
  [types.STATUS_REPORT_VENDOR_CODE](state, statusReportVendorCode) {
    state.statusReportVendorCode = statusReportVendorCode
  },
  [types.STATUS_REPORT_PLANT_CODE](state, statusReportPlantCode) {
    state.statusReportPlantCode = statusReportPlantCode
  },
  [types.STATUS_REPORT_VENDOR_PN](state, statusReportVendorPn) {
    state.statusReportVendorPn = statusReportVendorPn
  },
  [types.STATUS_REPORT_APPLY_FROM_DATE](state, statusReportApplyFromDate) {
    state.statusReportApplyFromDate = statusReportApplyFromDate
  },
  [types.STATUS_REPORT_APPLY_TO_DATE](state, statusReportApplyToDate) {
    state.statusReportApplyToDate = statusReportApplyToDate
  },
  [types.STATUS_REPORT_APPROVE_FROM_DATE](state, statusReportApproveFromDate) {
    state.statusReportApproveFromDate = statusReportApproveFromDate
  },
  [types.STATUS_REPORT_APPROVE_TO_DATE](state, statusReportApproveToDate) {
    state.statusReportApproveToDate = statusReportApproveToDate
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}