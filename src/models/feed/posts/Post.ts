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
                title: this.jobPostData.company.name,
                subtitle: this.jobPostData.title,
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

export {JobPost};