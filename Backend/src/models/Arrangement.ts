import mongoose from 'mongoose';

const ArrangementSchema = new mongoose.Schema({
  image: { type: String, required: true },
  flowers: [
    {
      type: { type: String, required: true }, // 'Girasoles' o 'Rosas'
      quantity: { type: Number, required: true }, // Cantidad seleccionada
      color: { type: String, required: true }, // Color seleccionado
    }
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  price: { type: Number, required: true },
  status: { type: String, default: 'pending' }, // Estado del ramo ('pending', 'accepted', 'edited', 'deleted')
});

const Arrangement = mongoose.model('Arrangement', ArrangementSchema);
export default Arrangement;
