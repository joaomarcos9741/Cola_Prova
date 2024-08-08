import { IAuthenticated, IUser } from "../service/data/User";
import React, { createContext, useState, useCallback, ReactNode, useEffect, Dispatch, SetStateAction} from "react"
import { api } from "../service/api";
import { apiUser } from "../service/data";
import { isAfter, parseISO } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage"; "@react-native-async-storage/async-storage"

