import mongoose from 'mongoose';

const evaluationSchema = new mongoose.Schema(
  {
    seminarCode: { type: String, required: true },
    score: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    evaluatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

// One evaluation per user per seminar. The partial filter keeps anonymous
// evaluations (no evaluatedBy) from colliding with each other.
evaluationSchema.index(
  { seminarCode: 1, evaluatedBy: 1 },
  { unique: true, partialFilterExpression: { evaluatedBy: { $exists: true } } }
);

export const Evaluation = mongoose.model('Evaluation', evaluationSchema);

export default Evaluation;