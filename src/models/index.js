// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserType = {
  "ADMIN": "ADMIN",
  "PARENT": "PARENT",
  "STUDENT": "STUDENT",
  "SUPERADMIN": "SUPERADMIN",
  "TEACHER": "TEACHER"
};

const Gender = {
  "BOY": "BOY",
  "GIRL": "GIRL"
};

const AssetCourse = {
  "COURSE": "COURSE"
};

const AssetQuiz = {
  "QUIZ": "QUIZ"
};

const AssetUserCourse = {
  "USERCOURSE": "USERCOURSE"
};

const UserStatus = {
  "ENABLED": "ENABLED",
  "DISABLED": "DISABLED"
};

const AssetQuizSection = {
  "QUIZSECTION": "QUIZSECTION"
};

const AssetQuestion = {
  "QUESTION": "QUESTION"
};

const AnswerType = {
  "SINGLE_CORRECT": "SINGLE_CORRECT",
  "MULTIPLE_CORRECT": "MULTIPLE_CORRECT",
  "RANKED": "RANKED",
  "FREE_TEXT": "FREE_TEXT",
  "FILE_UPLOAD": "FILE_UPLOAD"
};

const AssetPassage = {
  "PASSAGE": "PASSAGE"
};

const AssetTag = {
  "TAG": "TAG"
};

const BoolString = {
  "TRUE": "TRUE",
  "FALSE": "FALSE"
};

const AssetUserQuiz = {
  "USERQUIZ": "USERQUIZ"
};

const UserQuizStatus = {
  "PENDING": "PENDING",
  "STARTED": "STARTED",
  "PAUSED": "PAUSED",
  "FINISHED": "FINISHED"
};

const TagType = {
  "CONTENT": "CONTENT",
  "SKILL": "SKILL",
  "DIFFICULTY": "DIFFICULTY",
  "GRADE": "GRADE",
  "CROSS_SECTIONAL": "CROSS_SECTIONAL",
  "PROGRESSION": "PROGRESSION"
};

const { User, UserCourse, Course, Quiz, QuizSection, Question, Passage, Tag, UserQuiz, UserQuizAnswer, Answer } = initSchema(schema);

export {
  User,
  UserCourse,
  Course,
  Quiz,
  QuizSection,
  Question,
  Passage,
  Tag,
  UserQuiz,
  UserQuizAnswer,
  UserType,
  Gender,
  AssetCourse,
  AssetQuiz,
  AssetUserCourse,
  UserStatus,
  AssetQuizSection,
  AssetQuestion,
  AnswerType,
  AssetPassage,
  AssetTag,
  BoolString,
  AssetUserQuiz,
  UserQuizStatus,
  TagType,
  Answer
};