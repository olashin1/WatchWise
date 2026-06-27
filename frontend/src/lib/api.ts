import axios from "axios";
import { supabase } from "./supabase";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Before every Axios request, automatically ensure the user session token
// is submitted to the authorization header

api.interceptors.request.use(async (config) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    config.headers.Authorization = `Bearer ${session.access_token}`;
  }

  return config;
});
