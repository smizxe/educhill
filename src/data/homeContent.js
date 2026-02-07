import { Check, CheckCircle } from "lucide-react";
import React from "react";

export const homeContent = {
    en: {
        hero: {
            badge: "Save time · Increase efficiency",
            titleStart: "Bring your Class",
            titleHighlight: "Online",
            titleEnd: "",
            subtitleStart: "Save your",
            subtitleHighlight: "time, energy",
            subtitleEnd: ". Handle English exercises easily with our system so you can focus on teaching.",
            ctaPrimary: "Contact Us",
            ctaSecondary: "View Plans",
        },
        studentView: {
            badge: "Chill AI: Your Teaching Assistant",
            titleStart: "You set the standard.",
            titleHighlight: "AI handles the grading.",
            description: "Imagine grading 30 speaking tasks in 3 seconds? You assign the work, Chill AI acts as a dedicated teaching assistant—giving detailed feedback, fixing pronunciation and grammar errors with \"care\" just like you. It's not just grading, it's personalized coaching for every student.",
            features: [
                "Pronunciation & Accent Training",
                "Deep Grammar & Vocabulary Hints",
                "Standardized to IELTS, TOEFL or Custom Rubrics"
            ],
            demoLink: "View Student Demo"
        },
        features: {
            number: "01",
            title: "Features built for modern teaching",
            description: "Everything you need to manage your classroom efficiently. From automated grading to detailed student analytics.",
            cards: {
                one: {
                    title: "Speaking & Writing",
                    desc: "Auto-graded oral and written assignments."
                },
                two: {
                    title: "Student Progress",
                    desc: "Identify struggling students early."
                },
                three: {
                    title: "Result to Quiz in Seconds",
                    desc: "Upload any PDF, Word doc, or image. Educhill extracts the content and creates interactive exercises automatically.",
                    button: "Try it for free",
                    clickMe: "ClickMe.pdf",
                    quizList: [
                        "Speaking (AI Active)",
                        "Multiple Choices",
                        "Writing Essay (AI Active)"
                    ]
                }
            }
        },
        studentUI: {
            // Using English for UI demo mostly, but outer text can be translated if needed. 
            // Currently StudentUI component has hardcoded English titles inside the mockup.
            // We will keep the StudentUI component itself mostly English as it's a "Demo", 
            // but maybe the section header if it existed.
            // Actually StudentUI in Home.jsx is the "Designed for Deep Focus" section?
            // Let's check StudentUI.jsx content again.
            // It has "Student Experience / Designed for Deep Focus".
            badge: "Student Experience",
            title: "Designed for Deep Focus",
            description: "A distraction-free environment where students can practice speaking and writing with confidence.",
            stat1: "Completion Rate",
            stat2: "Avg. Engagement"
        },
        pricing: {
            number: "03",
            badge: "Pricing",
            title: "Plans for every stage",
            description: "Start small, scale as you grow. Transparent pricing for educators and institutions.",
            plans: [
                {
                    name: "Individual",
                    desc: "For solo teachers",
                    highlight: "Best plan for solo teachers",
                    features: ["AI Auto-grading", "Up to 50 students", "Basic Reports"],
                    cta: "Contact Us",
                    popular: false
                },
                {
                    name: "Center",
                    desc: "For growing centers",
                    highlight: "Best for growing centers",
                    features: ["Everything in Individual", "Team Management", "Up to 500 students", "Priority Support"],
                    cta: "Contact Us",
                    popular: true,
                    popularText: "Most Popular"
                },
                {
                    name: "Enterprise",
                    desc: "For large institutions",
                    highlight: "Best for large institutions",
                    features: ["Unlimited students", "LMS Integration", "White-labeling", "Dedicated Success Manager"],
                    cta: "Contact Us",
                    popular: false
                }
            ]
        },
        testimonials: {
            number: "02",
            title: "Trusted by modern educators",
            description: "Join thousands of teachers who are saving 10+ hours a week with Educhill.",
            items: [
                {
                    id: 1,
                    quote: "Educhill automates our entire center's grading workflow. We scaled from 50 to 500 students without adding a single admin staff.",
                    name: "Jason Do",
                    role: "Founder at Jado Education",
                    initials: "JD"
                },
                {
                    id: 2,
                    quote: "Moving my classes online was seamless. The AI grading assistant works 24/7, giving me more time to focus on personalized coaching.",
                    name: "Henry Johnson",
                    role: "Solo English Teacher",
                    initials: "HJ"
                },
                {
                    id: 3,
                    quote: "My students love the instant feedback! It keeps them engaged, and they actually look forward to submitting their homework now.",
                    name: "Thuy Nguyen",
                    role: "IELTS Instructor",
                    initials: "TN"
                }
            ]
        },
        contact: {
            badge: "Get in Touch",
            title: "Contact Us",
            description: "Have questions or want to see a demo? Fill out the form below or book a direct meeting with us.",
            form: {
                name: "Name",
                email: "Email",
                message: "Message",
                placeholders: {
                    name: "Jane Doe",
                    email: "jane@school.edu",
                    message: "Tell us about your needs..."
                }
            },
            submit: "Send Message",
            submitting: "Sending...",
            orSchedule: "Or Schedule Directly",
            bookCall: "Book a Call"
        },
        aboutPage: {
            seoTitle: "About Educhill - Our Mission & Team",
            seoDesc: "Founded by teachers for teachers. Educhill's mission is to reduce administrative workload for English educators using advanced AI technology.",
            foundedBy: "Founded by",
            founderName: "Giang Vuong",
            role: "Founder - CEO",
            bio1Parts: ["Giang Vuong is also the founder of ", "Yangai", " - an agency specializing in Web, App, and AI solutions for enterprises."],
            bio2: "Backed by his experience as an English teacher, Giang deeply understands the \"pain points\" regarding time and management pressures that teachers and training centers face daily.",
            bio3: "\"Educhill was born not just as a tool, but as a solution to free teachers from administrative burdens, allowing them to focus on what matters most: Inspiring students.\"",
            learnMore: "Learn more about me at Yangai"
        },
        contactPage: {
            seoTitle: "Contact Educhill - Get in Touch",
            seoDesc: "Have questions or want a demo? Contact the Educhill team today. We are here to help you upgrade your English teaching business.",
            titleStart: "Chat with",
            titleHighlight: "Educhill",
            badge: "Get in Touch",
            heading: "Contact Us",
            desc: "Have questions or want a custom demo? Fill out the form below or book a call directly with our team.",
            form: {
                name: "Name",
                namePlaceholder: "Jane Doe",
                email: "Email",
                emailPlaceholder: "jane@school.edu",
                message: "Message",
                messagePlaceholder: "Tell us about your needs...",
                btn: "Send Message"
            },
            orSchedule: "Or Schedule Directly",
            bookCall: "Book a Call"
        },
        header: {
            features: "Features",
            plans: "Plans",
            about: "About Us",
            contact: "Contact",
            demoLink: "Demo Lesson",
            getStarted: "Get Started"
        },
        footer: {
            description: "The intelligent platform for creating, grading, and tracking assignments effortlessly.",
            product: "Product",
            features: "Features",
            plans: "Plans",
            about: "About Us",
            contact: "Contact",
            resources: "Resources",
            blog: "Blog",
            newsletter: {
                title: "Send us an Email to receive Demo",
                description: "Enter your email address and we will contact you to schedule a personalized demo.",
                placeholder: "Email address",
                button: "Send"
            },
            designedBy: "Designed for teachers, by teachers.",
            copyright: "Copyright © Educhill. All Rights Reserved"
        }
    },
    vi: {
        hero: {
            badge: "Tiết kiệm thời gian · Tăng hiệu quả",
            titleStart: "Đưa lớp học lên",
            titleHighlight: "Online",
            titleEnd: "",
            subtitleStart: "Tiết kiệm",
            subtitleHighlight: "thời gian, công sức",
            subtitleEnd: ". Giao bài tập, cấu hình AI chấm điểm với hệ thống Educhill để bạn tập trung vào việc giảng dạy Tiếng Anh.",
            ctaPrimary: "Liên hệ",
            ctaSecondary: "Xem Bảng Giá",
        },
        studentView: {
            badge: "Chill AI: Trợ giảng đắc lực",
            titleStart: "Bạn thiết lập tiêu chuẩn. ",
            titleHighlight: "AI lo phần chấm bài.",
            description: "Tưởng tượng chấm 30 bài nói chỉ trong 3 giây? Bạn ra đề, Chill AI sẽ đóng vai trợ giảng tận tâm—đưa ra nhận xét chi tiết, sửa lỗi phát âm và ngữ pháp \"có tâm\" như chính bạn. Không chỉ là chấm điểm, đó là sự kèm cặp riêng biệt cho từng học viên.",
            features: [
                "Chấm phát âm & Luyện giọng chuẩn",
                "Gợi ý Ngữ pháp & Từ vựng chuyên sâu",
                "Chuẩn hoá theo IELTS, TOEFL hoặc Rubric riêng"
            ],
            demoLink: "Xem demo học sinh"
        },
        features: {
            number: "01",
            title: "Tính năng xây dựng cho giáo dục hiện đại",
            description: "Mọi thứ bạn cần để quản lý lớp học hiệu quả. Từ chấm điểm tự động đến phân tích học sinh chi tiết.",
            cards: {
                one: {
                    title: "Nói & Viết",
                    desc: "Bài tập nói và viết được chấm tự động."
                },
                two: {
                    title: "Tiến độ học sinh",
                    desc: "Nhận biết học sinh yếu sớm."
                },
                three: {
                    title: "Tạo bài tập trong vài giây",
                    desc: "Tải lên bất kỳ PDF, Word, hay ảnh nào. Educhill trích xuất nội dung và tạo bài tập tương tác tự động.",
                    button: "Dùng thử miễn phí",
                    clickMe: "ClickMe.pdf",
                    quizList: [
                        "Nói (AI Active)",
                        "Trắc nghiệm",
                        "Viết luận (AI Active)"
                    ]
                }
            }
        },
        studentUI: {
            badge: "Trải nghiệm học sinh",
            title: "Thiết kế cho sự tập trung sâu",
            description: "Một môi trường không xao nhãng nơi học sinh có thể luyện tập nói và viết một cách tự tin.",
            stat1: "Tỷ lệ hoàn thành",
            stat2: "Mức độ tương tác"
        },
        pricing: {
            number: "03",
            badge: "Bảng giá",
            title: "Các gói cho mọi giai đoạn",
            description: "Bắt đầu nhỏ, mở rộng khi bạn phát triển. Giá cả minh bạch cho giáo viên và tổ chức.",
            plans: [
                {
                    name: "Cá nhân",
                    desc: "Dành cho giáo viên độc lập",
                    highlight: "Tốt nhất cho giáo viên độc lập",
                    features: ["Chấm điểm AI tự động", "Tối đa 50 học sinh", "Báo cáo cơ bản"],
                    cta: "Liên hệ",
                    popular: false
                },
                {
                    name: "Trung tâm",
                    desc: "Dành cho trung tâm đang phát triển",
                    highlight: "Tốt nhất cho trung tâm",
                    features: ["Bao gồm mọi thứ gói Cá nhân", "Quản lý đội ngũ", "Tối đa 500 học sinh", "Hỗ trợ ưu tiên"],
                    cta: "Liên hệ",
                    popular: true,
                    popularText: "Phổ biến nhất"
                },
                {
                    name: "Doanh nghiệp",
                    desc: "Dành cho tổ chức lớn",
                    highlight: "Tốt nhất cho tổ chức lớn",
                    features: ["Không giới hạn học sinh", "Tích hợp LMS", "White-label (Thương hiệu riêng)", "Quản lý hỗ trợ riêng"],
                    cta: "Liên hệ",
                    popular: false
                }
            ]
        },
        testimonials: {
            number: "02",
            title: "Được tin dùng bởi các nhà giáo dục",
            description: "Tham gia cùng hàng ngàn giáo viên đang tiết kiệm 10+ giờ mỗi tuần với Educhill.",
            items: [
                {
                    id: 1,
                    quote: "Educhill tự động hóa toàn bộ quy trình chấm bài của trung tâm. Mình mở rộng từ 50 lên 500 học sinh mà không cần thuê thêm nhân viên hành chính nào!",
                    name: "Jason Do",
                    role: "Founder tại Jado Education",
                    initials: "JD"
                },
                {
                    id: 2,
                    quote: "Chuyển lớp lên online chưa bao giờ dễ đến vậy. AI chấm bài 24/7, giúp mình có thời gian tập trung coaching từng học sinh thay vì ngồi chấm bài cả đêm.",
                    name: "Henry Johnson",
                    role: "Giáo viên Tiếng Anh tại TP.HCM",
                    initials: "HJ"
                },
                {
                    id: 3,
                    quote: "Học sinh mình mê phản hồi tức thì luôn! Giờ các em háo hức nộp bài thay vì trì hoãn như trước. Game changer thật sự!",
                    name: "Thuy Nguyen",
                    role: "Giáo viên dạy thêm",
                    initials: "TN"
                }
            ]
        },
        contact: {
            badge: "Kết nối ngay",
            title: "Liên hệ",
            description: "Bạn có câu hỏi hoặc muốn xem bản demo? Điền vào form bên dưới hoặc đặt lịch hẹn trực tiếp với chúng tôi.",
            form: {
                name: "Tên",
                email: "Email",
                message: "Tin nhắn",
                placeholders: {
                    name: "Nguyen Van A",
                    email: "nguyen@truong.edu.vn",
                    message: "Hãy cho chúng tôi biết nhu cầu của bạn..."
                }
            },
            submit: "Gửi tin nhắn",
            submitting: "Đang gửi...",
            orSchedule: "Hoặc đặt lịch trực tiếp",
            bookCall: "Đặt lịch hẹn"
        },
        aboutPage: {
            seoTitle: "Về chúng tôi - Educhill",
            seoDesc: "Được thành lập bởi giáo viên, cho giáo viên. Sứ mệnh của Educhill là giảm khối lượng công việc hành chính cho giáo viên tiếng Anh sử dụng công nghệ AI tiên tiến.",
            foundedBy: "Người sáng lập",
            founderName: "Giang Vuong",
            role: "Founder - CEO",
            bio1Parts: ["Giang Vuong cũng là founder của ", "Yangai", " - agency chuyên phát triển Web, App và giải pháp AI cho doanh nghiệp."],
            bio2: "Bảo chứng bởi kinh nghiệm thực tế là một giáo viên tiếng Anh, Giang hiểu sâu sắc những \"nỗi đau\" về thời gian và áp lực quản lý mà các giáo viên và trung tâm đào tạo phải đối mặt hàng ngày.",
            bio3: "\"Educhill ra đời không chỉ là một công cụ, mà là giải pháp để giải phóng giáo viên khỏi áp lực thời gian, giúp họ tập trung vào điều quan trọng nhất: Truyền cảm hứng cho học sinh.\"",
            learnMore: "Tìm hiểu thêm về tôi tại Yangai"
        },
        contactPage: {
            seoTitle: "Liên hệ - Educhill",
            seoDesc: "Bạn có câu hỏi hoặc muốn xem bản demo? Liên hệ với đội ngũ Educhill ngay hôm nay.",
            titleStart: "Trò chuyện với",
            titleHighlight: "Educhill",
            badge: "Kết nối ngay",
            heading: "Liên hệ",
            desc: "Bạn có câu hỏi hoặc muốn xem bản demo? Điền vào form bên dưới hoặc đặt lịch hẹn trực tiếp với chúng tôi.",
            form: {
                name: "Tên",
                namePlaceholder: "Nguyễn Văn A",
                email: "Email",
                emailPlaceholder: "example@school.edu",
                message: "Tin nhắn",
                messagePlaceholder: "Chia sẻ nhu cầu của bạn...",
                btn: "Gửi tin nhắn"
            },
            orSchedule: "Hoặc đặt lịch trực tiếp",
            bookCall: "Book a Call"
        },
        header: {
            features: "Tính năng",
            plans: "Bảng giá",
            about: "Về chúng tôi",
            contact: "Liên hệ",
            demoLink: "Bài học mẫu",
            getStarted: "Bắt đầu ngay"
        },
        footer: {
            description: "Nền tảng thông minh giúp tạo, chấm điểm và theo dõi bài tập dễ dàng.",
            product: "Sản phẩm",
            features: "Tính năng",
            plans: "Bảng giá",
            about: "Về chúng tôi",
            contact: "Liên hệ",
            resources: "Tài nguyên",
            blog: "Blog",
            newsletter: {
                title: "Gửi email để nhận Demo",
                description: "Nhập email của bạn và chúng tôi sẽ liên hệ để xếp lịch demo cá nhân.",
                placeholder: "Địa chỉ email",
                button: "Gửi"
            },
            designedBy: "Thiết kế cho giáo viên, bởi giáo viên.",
            copyright: "Bản quyền © Educhill. Bảo lưu mọi quyền."
        }
    }
};
