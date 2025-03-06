const Controller = ({handleSetNum
}) => {

    const arr = [-1, -10, -100, +100, +10, +1]

    return(
        <div>
        {arr.map((value, index) => (
            <button
                key={index}
                className="button"
                onClick={() => handleSetNum(value)}
            >
                {value}
            </button>
        ))}
        </div>

        //<div>
        //<button class='button' onClick={()=>handleSetNum(arr[0])}>-1</button>
        //<button class='button' onClick={()=>handleSetNum(arr[1])}>-10</button>
        //<button class='button' onClick={()=>handleSetNum(arr[2])}>-100</button>
        //<button class='button' onClick={()=>handleSetNum(arr[3])}>+100</button>
        //<button class='button' onClick={()=>handleSetNum(arr[4])}>+10</button>
        //<button class='button' onClick={()=>handleSetNum(arr[5])}>+1</button>
        //</div>
    );
};

export default Controller;