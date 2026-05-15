'use client'
import { createContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { api } from '@/services/api'; 

interface ProcessContextData {
  analysisResult: boolean; 
  isAnalyzing: boolean;
  startMonitoring: (id: number) => void;
}

// Contexto com uso da interface
export const ProcessContext = createContext<ProcessContextData>({} as ProcessContextData);

// props do ProcessProvider
interface ProcessProviderProps {
  children: ReactNode;
}

export function ProcessProvider({ children }: ProcessProviderProps) {
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState< number | null>(null);

  // Tipamos o parâmetro 'id'
  const checkStatus = useCallback(async (id: number) => {
    try {
      const response = await api.get(`/analysis/${id}`);
      
      if (response.data.status === 'completed') {
        setAnalysisResult(response.data.result);
        setIsAnalyzing(false);
        setCurrentId(null);
      }
    } catch (err) {
      console.error("Erro ao checar status", err);
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout; // Tipo específico para intervalos no Next

    if (isAnalyzing && currentId) {
      interval = setInterval(() => {
        checkStatus(currentId);
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAnalyzing, currentId, checkStatus]);

  // Tipamos a função de disparar o monitoramento
  const startMonitoring = (id: number) => {
    setCurrentId(id);
    setIsAnalyzing(true);
  }

  return (
    <ProcessContext.Provider value={{ analysisResult, isAnalyzing, startMonitoring }}>
      {children}
    </ProcessContext.Provider>
  )
}