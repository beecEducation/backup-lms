import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum UserType {
  ADMIN = "ADMIN",
  PARENT = "PARENT",
  STUDENT = "STUDENT",
  SUPERADMIN = "SUPERADMIN",
  TEACHER = "TEACHER"
}

export enum Gender {
  BOY = "BOY",
  GIRL = "GIRL"
}

export enum AssetCourse {
  COURSE = "COURSE"
}

export enum AssetQuiz {
  QUIZ = "QUIZ"
}

export enum AssetUserCourse {
  USERCOURSE = "USERCOURSE"
}

export enum UserStatus {
  ENABLED = "ENABLED",
  DISABLED = "DISABLED"
}

export enum AssetQuizSection {
  QUIZSECTION = "QUIZSECTION"
}

export enum AssetQuestion {
  QUESTION = "QUESTION"
}

export enum AnswerType {
  SINGLE_CORRECT = "SINGLE_CORRECT",
  MULTIPLE_CORRECT = "MULTIPLE_CORRECT",
  RANKED = "RANKED",
  FREE_TEXT = "FREE_TEXT",
  FILE_UPLOAD = "FILE_UPLOAD"
}

export enum AssetPassage {
  PASSAGE = "PASSAGE"
}

export enum AssetTag {
  TAG = "TAG"
}

export enum BoolString {
  TRUE = "TRUE",
  FALSE = "FALSE"
}

export enum AssetUserQuiz {
  USERQUIZ = "USERQUIZ"
}

export enum UserQuizStatus {
  PENDING = "PENDING",
  STARTED = "STARTED",
  PAUSED = "PAUSED",
  FINISHED = "FINISHED"
}

export enum TagType {
  CONTENT = "CONTENT",
  SKILL = "SKILL",
  DIFFICULTY = "DIFFICULTY",
  GRADE = "GRADE",
  CROSS_SECTIONAL = "CROSS_SECTIONAL",
  PROGRESSION = "PROGRESSION"
}

export declare class Answer {
  readonly answerType: AnswerType | keyof typeof AnswerType;
  readonly choices: string;
  readonly isCorrect?: string;
  readonly rationale?: string;
  constructor(init: ModelInit<Answer>);
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserCourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type QuizMetaData = {
  readOnlyFields: 'updatedAt';
}

type QuizSectionMetaData = {
  readOnlyFields: 'updatedAt';
}

type QuestionMetaData = {
  readOnlyFields: 'updatedAt';
}

type PassageMetaData = {
  readOnlyFields: 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserQuizMetaData = {
  readOnlyFields: 'updatedAt';
}

type UserQuizAnswerMetaData = {
  readOnlyFields: 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly userType: UserType | keyof typeof UserType;
  readonly email: string;
  readonly name?: string;
  readonly gender?: Gender | keyof typeof Gender;
  readonly dob?: string;
  readonly school?: string;
  readonly courses?: (UserCourse | null)[];
  readonly status: UserStatus | keyof typeof UserStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class UserCourse {
  readonly id: string;
  readonly userId: string;
  readonly course?: Course;
  readonly assetType: AssetUserCourse | keyof typeof AssetUserCourse;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserCourse, UserCourseMetaData>);
  static copyOf(source: UserCourse, mutator: (draft: MutableModel<UserCourse, UserCourseMetaData>) => MutableModel<UserCourse, UserCourseMetaData> | void): UserCourse;
}

export declare class Course {
  readonly id: string;
  readonly assetType: AssetCourse | keyof typeof AssetCourse;
  readonly companyId: string;
  readonly title: string;
  readonly quizzes?: (Quiz | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Course, CourseMetaData>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course, CourseMetaData>) => MutableModel<Course, CourseMetaData> | void): Course;
}

export declare class Quiz {
  readonly id: string;
  readonly assetType: AssetQuiz | keyof typeof AssetQuiz;
  readonly createdAt: string;
  readonly title: string;
  readonly summary?: string;
  readonly description?: string;
  readonly courseId: string;
  readonly time: number;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Quiz, QuizMetaData>);
  static copyOf(source: Quiz, mutator: (draft: MutableModel<Quiz, QuizMetaData>) => MutableModel<Quiz, QuizMetaData> | void): Quiz;
}

export declare class QuizSection {
  readonly id: string;
  readonly assetType: AssetQuizSection | keyof typeof AssetQuizSection;
  readonly createdAt: string;
  readonly title: string;
  readonly summary?: string;
  readonly description?: string;
  readonly quizId: string;
  readonly time: number;
  readonly updatedAt?: string;
  constructor(init: ModelInit<QuizSection, QuizSectionMetaData>);
  static copyOf(source: QuizSection, mutator: (draft: MutableModel<QuizSection, QuizSectionMetaData>) => MutableModel<QuizSection, QuizSectionMetaData> | void): QuizSection;
}

export declare class Question {
  readonly id: string;
  readonly assetType: AssetQuestion | keyof typeof AssetQuestion;
  readonly createdAt: string;
  readonly answer: Answer;
  readonly title?: string;
  readonly summary?: string;
  readonly description?: string;
  readonly passageId?: string;
  readonly passage?: Passage;
  readonly sectionId: string;
  readonly quizId: string;
  readonly time: number;
  readonly orderId: number;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Question, QuestionMetaData>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question, QuestionMetaData>) => MutableModel<Question, QuestionMetaData> | void): Question;
}

export declare class Passage {
  readonly id: string;
  readonly assetType: AssetPassage | keyof typeof AssetPassage;
  readonly createdAt: string;
  readonly direction: string;
  readonly attribution?: string;
  readonly body?: string;
  readonly quizId: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Passage, PassageMetaData>);
  static copyOf(source: Passage, mutator: (draft: MutableModel<Passage, PassageMetaData>) => MutableModel<Passage, PassageMetaData> | void): Passage;
}

export declare class Tag {
  readonly id: string;
  readonly assetType: AssetTag | keyof typeof AssetTag;
  readonly userId: string;
  readonly title: string;
  readonly tagType: string;
  readonly parent: string;
  readonly parentId: string;
  readonly level: number;
  readonly isGlobal: BoolString | keyof typeof BoolString;
  readonly companyId?: string;
  readonly details?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class UserQuiz {
  readonly id: string;
  readonly assetType: AssetUserQuiz | keyof typeof AssetUserQuiz;
  readonly createdAt: string;
  readonly userId: string;
  readonly quizId: string;
  readonly startedAt?: string;
  readonly finishedAt?: string;
  readonly status: UserQuizStatus | keyof typeof UserQuizStatus;
  readonly time?: number;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserQuiz, UserQuizMetaData>);
  static copyOf(source: UserQuiz, mutator: (draft: MutableModel<UserQuiz, UserQuizMetaData>) => MutableModel<UserQuiz, UserQuizMetaData> | void): UserQuiz;
}

export declare class UserQuizAnswer {
  readonly id: string;
  readonly userQuizId: string;
  readonly questionId: string;
  readonly assetType: AssetUserQuiz | keyof typeof AssetUserQuiz;
  readonly createdAt: string;
  readonly userId: string;
  readonly quizId: string;
  readonly time: number;
  readonly answer: string;
  readonly isRight: BoolString | keyof typeof BoolString;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UserQuizAnswer, UserQuizAnswerMetaData>);
  static copyOf(source: UserQuizAnswer, mutator: (draft: MutableModel<UserQuizAnswer, UserQuizAnswerMetaData>) => MutableModel<UserQuizAnswer, UserQuizAnswerMetaData> | void): UserQuizAnswer;
}