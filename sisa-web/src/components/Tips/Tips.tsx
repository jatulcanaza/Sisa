
export function Tips() {
  return (
    <div className="bg-white text-gray-900">
    {/* Hero Section */}
    <section 
  className="relative w-full min-h-[200px] flex items-center justify-center bg-cover bg-center" 
  style={{ backgroundImage: "url('/flores-hero.jpg')" }}>
  <div className="absolute inset-0 bg-[#FB6F92] opacity-80"></div>
  <div className="relative text-center text-white px-6 md:px-14">
    <h1 className="text-4xl md:text-6xl font-bold">Cuidado de Flores</h1>
    <p className="text-lg md:text-xl mt-2">Mantén tus flores frescas con estos consejos.</p>
  </div>
</section>

  
    {/* Consejos */}
    <section className="py-16 px-6 md:px-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-[#FB6F92]">Tips para Prolongar la Frescura</h2>
      
      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {/* Consejo 1 */}
        <div className="flex items-center gap-6">
          <img src="/assets/florero.png" className="w-16 h-16 rounded-full shadow-lg" />
          <div>
            <h3 className="text-xl font-semibold">Al Recibir Tu Ramo</h3>
            <p className="text-gray-700">1. Coloca las flores en agua lo antes posible y usa jarrones limpios. 
                <br></br>2. Lava los jarrones con agua y un poco de cloro para eliminar bacterias.</p>
          </div>
        </div>
        
        {/* Consejo 2 */}
        <div className="flex items-center gap-6">
          <img src="/assets/preparacion.png" className="w-16 h-16 rounded-full shadow-lg" />
          <div>
            <h3 className="text-xl font-semibold">Preparación de las Flores</h3>
            <p className="text-gray-700">1. Haz un corte diagonal en cada tallo y cambia el agua regularmente.</p>
          </div>
        </div>
  
        {/* Consejo 3 */}
        <div className="flex items-center gap-6">
          <img src="/assets/agua.png" className="w-16 h-16 rounded-full shadow-lg" />
          <div>
            <h3 className="text-xl font-semibold">Conservación Prolongada</h3>
            <p className="text-gray-700">1. Cambia el agua del jarrón cada 3 o 4 días.
            <br></br>2. Diluye una pequeña pastilla de aspirina en el agua para ayudar a conservar las flores frescas por más tiempo.
            </p>
          </div>
        </div>
        
        {/* Consejo 4 */}
        <div className="flex items-center gap-6">
          <img src="/assets/reviviendo.png" className="w-16 h-16 rounded-full shadow-lg" />
          <div>
            <h3 className="text-xl font-semibold">Reviviendo Flores</h3>
            <p className="text-gray-700">1. Sumerge las flores marchitas en agua fría para rehidratarlas.</p>
          </div>
        </div>
      </div>
    </section>
  
  </div>
  
  )
}
