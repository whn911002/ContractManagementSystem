import http from "./httpService";
import { dbUrl } from "../config.json";

const connectUrl = dbUrl + "/contracts";

export function getContracts() {
  return http.get(connectUrl);
}

export function getContract(id) {
  return http.get(connectUrl + "/" + id);
}

export function saveContract(contract) {
  const wrappedContract = wrapContract(contract);
  if (wrappedContract.id) {
    const contractData = { ...wrappedContract };
    delete contractData.id;
    return http.put(connectUrl + "/" + wrappedContract.id, contractData);
  } else {
    return http.post(connectUrl, wrappedContract);
  }
}

function wrapContract(contract) {
  const wrappedContract = {
    ...contract,
    user: { name: contract.name, surname: contract.surname }
  };
  delete wrappedContract.name;
  delete wrappedContract.surname;
  return wrappedContract;
}

export function deleteContract(id) {
  return http.delete(connectUrl + "/" + id);
}
