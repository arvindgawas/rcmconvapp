
export class ddlregion
{
    public regioncode: string;
    public regionname: string;
}

export class ddllocation
{
    public locationcode: string;
    public locationname: string;
}

export class ddlistreport
{
    public lstregionmast : ddlregion[];
    public lstlocationmast: ddllocation[];
}
