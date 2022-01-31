function Chat() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto min-h-screen">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2 rounded-lg border border-solid border-gray-200 bg-white mt-5">
            <div className="hover:bg-indigo-100"><button className="p-3">Room 1</button></div>
            <div className="hover:bg-indigo-100"><button className="p-3">Room 2</button></div>
          </div>
          <div className="col-span-10 rounded-lg border border-solid border-gray-200 bg-white mt-5">
            <div className="p-4">
              <div className="font-bold">Pedro Perez</div>
              <div className="">Este es el primer mensaje</div>
            </div>
            <div className="p-4">
              <div className="font-bold">Maria Gomez</div>
              <div className="">Este es el segundo mensaje</div>
            </div>
            <div className="p-4 flex">
              <input type="text" className="grow rounded-lg border border-gray-200 mr-4 p-2 "></input>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat