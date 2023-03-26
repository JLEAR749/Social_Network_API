const addDate Suffix - (date) => {
    let dataStr =date.toSting();

    const lastChar = dateStr ==="1" && dateStr  !== "11"){
        dataStr = `$(dataStr)st`;
    }else if (lastChar ==="2" && dataStr !=="12"){
    }else if (lastChar ==="3"&& dataStr !=="13"){
        dataStr = `$(dataStr)rd`;
    }else {
        dataStr= `${dataStr}th`;
    }
    return dataStr
    }
    }
    }
}