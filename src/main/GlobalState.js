import { atom } from "recoil";

export const triggerState = atom({
  key: "triggerState",
  default: true,
});
export const pathsState = atom({
  key: "pathsState",
  default: [],
});

export const ApiKeyState = atom({
  key: "ApiKeyState",
  default: "",
});
export const OrganizationsListState = atom({
  key: "OrganizationsListState",
  default: [],
});
export const SingleOrganizationSelectedState = atom({
  key: "SingleOrganizationSelectedState",
  default: [],
});
export const OrganizationSelectedState = atom({
  key: "OrganizationSelectedState",
  default: [],
});
export const OrganizationSelectedInfoState = atom({
  key: "OrganizationSelectedInfoState",
  default: [],
});

export const NetworksAndDevicesState = atom({
  key: "NetworksAndDevicesState",
  default: [],
});
export const openOrganizationsModalState = atom({
  key: "openOrganizationsModalState",
  default: false,
});
export const openNetworksModalState = atom({
  key: "openNetworksModalState",
  default: false,
});
export const openDevicesModalState = atom({
  key: "openDevicesModalState",
  default: false,
});
export const openSummaryModalState = atom({
  key: "openSummaryModalState",
  default: false,
});
export const openRollbackModalState = atom({
  key: "openRollbackModalState",
  default: false,
});
export const openTaskManagerModalState = atom({
  key: "openTaskManagerModalState",
  default: false,
});
export const openResultsModalState = atom({
  key: "openResultsModalState",
  default: false,
});
export const openAuthenticationModalState = atom({
  key: "openAuthenticationModalState",
  default: true,
});
export const triggerGetOrganizationsState = atom({
  key: "triggerGetOrganizationsState",
  default: false,
});
export const openLogsModalState = atom({
  key: "openLogsModalState",
  default: false,
});
export const authenticatedState = atom({
  key: "authenticatedState",
  default: false,
});

export const networksSelectedState = atom({
  key: "networksSelectedState",
  default: [],
});
export const devicesSelectedState = atom({
  key: "devicesSelectedState",
  default: [],
});
export const triggerShowNotificationState = atom({
  key: "triggerShowNotificationState",
  default: false,
});
export const triggergetAllTasksState = atom({
  key: "triggergetAllTasksState",
  default: false,
});
export const loadingSubmitEnpointState = atom({
  key: "loadingSubmitEnpointState",
  default: false,
});
export const notificationMessageState = atom({
  key: "notificationMessageState",
  default: "",
});
export const notificationTypeState = atom({
  key: "notificationTypeState",
  default: "info",
});
export const usefulParameterState = atom({
  key: "usefulParameterState",
  default: "",
});
export const rollbackParametersState = atom({
  key: "rollbackParametersState",
  default: {},
});
export const operationIdSelectedState = atom({
  key: "operationIdSelectedState",
  default: "",
});
export const openAPIrandomStringState = atom({
  key: "openAPIrandomStringState",
  default: "zcondwzxyo",
});
export const requiredParametersState = atom({
  key: "requiredParametersState",
  default: [],
});
