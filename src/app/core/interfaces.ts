export interface Service {
	id: number;
	iconPath: string;
	name: string;
}

export interface Privilege {
	id: number;
	title: string;
	description: string;
}

export interface Review {
	id: number;
	username: string;
	text: string;
	userAvatar: string;
	job: string;
}

export interface LoginForm {
	email: string;
	password: string;
}

export interface RegistrationForm {
	email: string;
	password: string;
	username: string;
}

export interface ContactInfoData {
	fullName: string;
	contactInfo: string;
	message: string;
}

/** ENV **/
export interface Environment {
	isProduction: boolean;
	apiUrl: string;
}

/** API **/
export interface Response<T> {
	data: T;
	success: boolean;
}

export interface AuthorizationResponse {
	user: UserData;
	tokens: TokensData;
}

export interface UserData {
	id: string;
	username: string;
	email: string;
	role: string;
	learnedTrafficRules: string[];
	learnedRoadSigns: string[];
}

export interface TokensData {
	accessToken: string;
	refreshToken: string;
}

export interface ToggleLearnedResponse {
	currentIsLearned: boolean;
}

export interface SectionsResponse {
	sections: Section[];
}

export interface TrafficRuleQuestionsResponse {
	questions: QuestionResponse[];
}
export interface Answer {
	id: string;
	answerId: string;
}

export interface SubmitAnswerResponse {
	testId: string;
	answerId: string;
	isCorrect: boolean;
}

export interface QuestionResponse {
	id: string;
	question: string;
	answers: AnswerResponse[];
}

export interface AnswerResponse {
	id: string;
	text: string;
}

export interface Section {
	id: string;
	name: string;
	sectionNumber: number;
	isLearned: boolean;
}

export interface ParagraphsResponse<T> {
	id: string;
	name: string;
	sectionNumber: number;
	paragraphs: T[];
}

export interface TrafficRuleParagraph {
	text: string;
	fullParagraphNumber: string;
	paragraphNumber: string;
}

export interface RoadSignParagraph {
	name: string;
	imageUrl: string;
	fullParagraphNumber: string;
	paragraphNumber: string;
}
