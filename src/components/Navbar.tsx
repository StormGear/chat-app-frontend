interface Title {
    title: string;
}

const NavBar = ({ title } : Title) => {
   return (
   <div className="bg-amber-600 w-full ">
        <div>
            <p className="text-center font-bold text-6xl text-black py-4">{title}</p>
        </div>
    </div>
    )
}


export default NavBar;