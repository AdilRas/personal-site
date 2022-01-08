interface PostHeader {
    title: string;
    subtitle: string;
    date: string;
    logoSrc: string;
}

export interface Post {
    // unique identifier
    readonly id: string;
    // header
    readonly postHeader: PostHeader;
    // content
    readonly contentImgSrc: string;
    // caption
    readonly nameForCaption: string;
    readonly captionText: string;
    readonly hashtags?: string[];
    // comments
    readonly comments?: string[];

    readonly helpLink?: Link;
}

interface PostBuilderFunc {
    (): Post;
}
interface PostBuilder {
    toPost: PostBuilderFunc;
}

interface Company {
    name: string;
    logoImgSrc: string;
}

interface Link {
    link: string;
    text: string;
}

export interface JobPostData {
    company: Company; // top bar with pic & name comes from this
    title: string; // Bolded part of caption
    team?: string;
    location?: string;
    contentImgSrc: string; // main picture (ideally some gif)
    startDate: string; // start / end dates used as normal text caption
    endDate: string;
    achievements: string[]; // comments
    skills: string[]; // hashtags
}

export interface ServicePostData {
    company: Company;
    title: string;
    imgsrc: string;
    startDate: string;
    endDate: string;
    location: string;
    roleType: string;
    achievements: string[];
    skills: string[];
    learnMore?: Link;
}

class JobPost implements PostBuilder {

    jobPostData: JobPostData;

    public constructor(postData: JobPostData) {
        this.jobPostData = postData;
    }

    public toPost(): Post {

        const dateString: string = `${this.jobPostData.startDate} - ${this.jobPostData.endDate}`;

        return {
            id: (Math.random() + 1).toString(36).substring(7),
            postHeader: {
                title: this.jobPostData.title,
                subtitle: this.jobPostData.company.name,
                date: dateString,
                logoSrc: this.jobPostData.company.logoImgSrc
            },
            contentImgSrc: this.jobPostData.contentImgSrc,
            nameForCaption: this.jobPostData.team ?? "Team TBD",
            captionText: this.jobPostData.location ?? "Remote",
            hashtags: this.jobPostData.skills,
            comments: this.jobPostData.achievements
        };
    }
}

class ServicePost implements PostBuilder {
    postData: ServicePostData;

    public constructor(postData: ServicePostData) {
        this.postData = postData;
    }

    public toPost(): Post {

        const dateString: string = `${this.postData.startDate} - ${this.postData.endDate}`;

        return {
            id: (Math.random() + 1).toString(36).substring(7),
            postHeader: {
                title: this.postData.title,
                subtitle: this.postData.company.name,
                date: dateString,
                logoSrc: this.postData.company.logoImgSrc
            },
            contentImgSrc: this.postData.imgsrc,
            nameForCaption: this.postData.roleType ?? "Community Service",
            captionText: this.postData.location ?? "Remote",
            hashtags: this.postData.skills,
            comments: this.postData.achievements,
            helpLink: this.postData.learnMore
        };
    }
}

export { JobPost, ServicePost };