import { EditPerfilForm } from "../../components/User/EditPerfil/EditPerfilForm";
import { IconArrow } from "../../components/Icons/IconArrow";
import { Link } from 'react-router-dom'

export function EditPerfilPage() {
  return (
      <section className="flex items-start gap-x-12   border-t border-border-box relative h-[calc(100vh-100px)]">

        <aside className="border-r border-b border-border-box w-24 py-6 h-full hidden md:flex">
          <section className="h-12 border-b border-border-box w-full flex justify-center ">
            <Link to='/perfil'>
              <IconArrow/>
            </Link>
          </section>
        </aside>

        <section className="py-4 pb-12">
          <div>
            <h3 className="font-semibold text-2xl mb-2">Editar perfil</h3>
            <p className="w-auto lg:w-[28rem] text-gray-400 text-sm"> Podras editar tus datos personales. Cualquier usuario que pueda ver tu perfil podrá ver la información que agregues aquí.</p>
          </div>
          
          <EditPerfilForm />
    
        </section>
      </section>
  )
}
