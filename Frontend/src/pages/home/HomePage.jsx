import { PinList } from "../../components/shared/PinList"
import { usePins } from "../../hooks/usePins"

export function HomePage () {

    const { data, isLoading, isError } = usePins()

    console.log(data)

    if(isLoading) return <p>Cargando...</p>
    if(isError) return <p>Hubo un error...</p>
    
    return(
        <section className="pt-6 space-y-6 px-4 lg:px-0 pb-6">
            <h1 className="text-3xl font-semibold">Pines para tí</h1>

            <PinList pins={data}/>

        </section>
    )
}