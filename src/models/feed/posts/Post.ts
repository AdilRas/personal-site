interface PostHeader {
    name: string;
    logoSrc: string;
}

interface Post {
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

interface JobPostData {
    title: string; // Bolded part of caption
    company: Company; // top bar with pic & name comes from this
    contentImgSrc: string; // main picture (ideally some gif)
    startDate: string; // start / end dates used as normal text caption
    endDate: string;
    achievements: string[]; // comments
    skills: string[]; // hashtags
}

class JobPost implements PostBuilder {
    
    jobPostData: JobPostData;

    public toPost(): Post {
        return {
            id: (Math.random() + 1).toString(36).substring(7),
            postHeader: {
                name: this.jobPostData.company.name,
                logoSrc: this.jobPostData.company.logoImgSrc
            },
            contentImgSrc: this.jobPostData.contentImgSrc,
            nameForCaption: this.jobPostData.title,
            captionText: `${this.jobPostData.startDate} - ${this.jobPostData.endDate}`,
            hashtags: this.jobPostData.skills,
            comments: this.jobPostData.achievements
        };
    }
}