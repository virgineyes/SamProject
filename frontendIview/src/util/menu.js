var menu = [
    {
      code: "ACCOUNT_MGMT",
      name: "ACCOUNT_MANAGEMENT",
      children: [
        {
          code: "ACCOUNT_MGMT_GROUP_ACCOUNT_MAINTENANCE",
          name: "GROUP_ACCOUNT_MAINTAIN",
          path: "AccountMaintain",
          icon: "fa-user-circle-o",
        },
        {
          code: "GROUP_ACCOUNT_MAINTENANCE",
          name: "GROUP_ACCOUNT_LIST",
          path: "AccountList",
          icon: "fas fa-list",
        },
      ],
    },
    {
      code: "SYSTEM_DATA_MAINTAIN",
      name: "DATA_MAINTAIN",
      children: [
        {
          code: "SYSTEM_DATA_MAINTAIN_MAIN_DATA_MAINTAIN",
          name: "MASTER_DATA_MAINTAIN",
          path: "MaintainMasterData",
          icon: "fa-database",
        },
        {
          code: "SYSTEM_DATA_MAINTAIN_APPROVE_AND_FLOW_MAINTAIN",
          name: "QUOTATION_WORKFLOW_MAINTAIN",
          path: "Workflow",
          icon: "fa-circle-o-notch",
        },
        {
          code: "SYSTEM_DATA_MAINTAIN_AUTHORITY_ROLE_MAINTAIN",
          name: "ROLE_MAINTAIN",
          path: "RoleMaintain",
          icon: "fa-university",
        },
        {
          code: "FUNCTION_MAINTAIN",
          name: "FUNCTION_MAINTAIN",
          path: "FunctionMaintain",
          icon: "fa-registered",
        },
        {
          code: "USER_MAINTAIN",
          name: "USER_MAINTAIN",
          path: "UserMaintain",
          icon: "fa-user-circle",
        },
        {
          code: "SYSTEM_DATA_MAINTAIN_ANNOUNCEMENT_MAINTAIN",
          name: "ANNOUNCEMENT_MAINTAIN",
          path: "Announcement",
          icon: "fa-pencil-square-o",
        },
        {
          code: "SYSTEM_DATA_MAINTAIN_JOB_SCHEDULING",
          name: "JOB_SCHEDULING",
          path: "JobSchedule",
          icon: "fa-pencil-square-o",
        },
        {
          code: "SYSTEM_DATA_MAINTAIN_CONTACT_PERSON",
          name: "CONTACT_PERSON",
          path: "ContactPerson",
          icon: "fa-pencil-square-o",
        },
      ],
    },
    {
      code: "QUOTATION_MAINTAIN",
      name: "QUOTATION_MAINTAIN",
      children: [
        {
          code: "QUOTATION_MAINTAIN_AVERAGE_PURCHASE_PRICE",
          name: "AVERAGE_PURCHASE_PRICE_MAINTAIN",
          path: "AVERAGE_PURCHASE_PRICE",
          icon: "fa-money",
        },
        {
          code: "QUOTATION_MAINTAIN_QUOTATION_SUPPLIER_MAINTAIN",
          name: "QUOTATION_MAINTAIN_SUPPLIER",
          path: "SUPPLIER_MAINTAIN",
          icon: "fa-pencil-square-o",
        },
        {
          code: "QUOTATION_MAINTAIN_QUOTATION_CPC_MAINTAIN",
          name: "QUOTATION_DATA_MAINTAIN",
          path: "CPC_MAINTAIN",
          icon: "fa-handshake-o",
        },
        {
          code: "QUOTATION_MAINTAIN_QUOTATION_SUPERVISOR_MAINTAIN",
          name: "QUOTATION_APPROVAL",
          path: "SUPERVISOR_MAINTAIN",
          icon: "fa-check-square",
        },
        {
          code: "QUOTATION_MAINTAIN_QUOTATION_HISTORY_REPORT",
          name: "QUOTATION_HISTORY_REPORT",
          path: "HISTORY",
          icon: "fa-history",
        },
        {
          code: "QUOTATION_MAINTAIN_QUOTATION_STATUS_REPORT",
          name: "STATUS_REPORT",
          path: "REPORT",
          icon: "fa-clone",
        },
      ],
    }
]

export {menu}