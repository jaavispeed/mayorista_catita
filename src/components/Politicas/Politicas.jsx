import React from 'react';

const Politicas = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-gray-300 shadow-2xl rounded-2xl border border-gray-300">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Políticas de la Tienda</h2>
      
      <div className="space-y-6 text-gray-700">
        <section className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-bold text-gray-800">📦 Recepción del Paquete</h3>
          <p className="mt-2">Al momento de recibir tu paquete, debe ser grabado al momento de abrirlo de principio a fin.</p>
        </section>
        
        <section className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-bold text-gray-800">🛠 Garantía</h3>
          <p className="mt-2">La garantía es válida durante 12 horas una vez recibido el paquete.</p>
        </section>
        
        <section className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-bold text-gray-800">🚫 Devoluciones</h3>
          <p className="mt-2">No se realizan devoluciones.</p>
        </section>
        
        <section className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-bold text-gray-800">🚚 Envíos y Entregas</h3>
          <p className="mt-2">Ofrecemos envíos nacionales con un tiempo estimado de entrega de 3-7 días hábiles.</p>
        </section>
        
        <section className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-bold text-gray-800">💳 Métodos de Pago</h3>
          <p className="mt-2">Aceptamos pagos con tarjeta de crédito, debito y transferencias bancarias.</p>
        </section>
        
        <section className="p-4 bg-white shadow-md rounded-xl">
          <h3 className="text-xl font-bold text-gray-800">📞 Atención al Cliente</h3>
          <p className="mt-2">Para cualquier duda o consulta, puedes contactarnos a través de nuestro correo electrónico o número de atención al cliente.</p>
        </section>
      </div>
    </div>
  );
};

export default Politicas;
