export interface IDocument {
    DocumentWebId: string
    Name: string
    Path: string
}

export interface IForm {
    WebFormId: string

    WebsiteLinkTitle: string
    WebsiteFormTitle: string
}

export interface ILoginForm {
    WebFormId: string;
    Title: string;
    AuthColumn1Title: string;
    AuthColumn2Title: string;
    WebsiteLinkTitle: string
    WebsiteFormTitle: string
}
export interface IMilestone {
    MilestoneWebId: string
    WebName: string

}

export interface IData {
    OfficialCaseName: string;
    CaseForms: IForm[];
    CaseWebsiteMilestones: IMilestone[];
    CaseWebsiteDocuments: IDocument[];
}
