export const Questions = () => {
    return(
        <>
        <section id="questions" className="flex flex-col w-full h-175 py-22 bg-amber-500">
            <div className="max-w-270 w-full mx-auto">
                <h2 className="mb-2 text-4xl text-white font-bold max-w-200">Perguntas Frequentes</h2>
                <p className="mb-15 text-sm text-white  font-light">Tire suas dúvidas sobre como a Ponskan transforma a tecnologia em resultados para sua colheita</p>
            </div>

            <div className="grid grid-cols-3 max-w-270 gap-y-10 gap-x-5 mx-auto">
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-amber-900">Como o sistema identifica a pinta preta nas frutas?</h3>
                    <p className="text-sm text-white">Utilizamos visão computacional para reconhecer padrões visuais da pinta preta na superfície da fruta, detectando lesões precoces invisíveis a olho nu.</p>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-amber-900">O monitoramento é em tempo real?</h3>
                    <p className="text-sm text-white">Sim. As imagens são processadas instantaneamente, gerando alertas automáticos assim que uma anomalia é detectada no pomar.</p>
                </div>


                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-amber-900">Funciona sem internet no campo?</h3>
                    <p className="text-sm text-white">Sim. O sistema pode processar dados localmente e sincronizar os relatórios com a nuvem assim que houver sinal disponível.</p>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-amber-900">Como o projeto reduz custos?</h3>
                    <p className="text-sm text-white">Ao identificar focos específicos, permite a aplicação localizada de fungicidas, economizando insumos e reduzindo o impacto ambiental.</p>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-amber-900">Qual o impacto na exportação?</h3>
                    <p className="text-sm text-white">Garante que os lotes atendam aos rigorosos padrões fitossanitários internacionais, aumentando o valor comercial e a aceitação no mercado externo.</p>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-amber-900">Quais relatórios são gerados?</h3>
                    <p className="text-sm text-white">O sistema entrega mapas de calor das áreas afetadas, históricos de evolução da doença e alertas de risco para suporte à decisão.</p>
                </div>
            </div>
        </section>
        </>
    )
}