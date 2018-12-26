import http from "./httpService";
import { currentRateUrl, historyRateUrl } from "../config.json";

export function getCurrentRates() {
  return http.get(currentRateUrl);
}

export function getHistoryRates() {
  return http.get(historyRateUrl);
}
