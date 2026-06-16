import React, { useState } from 'react';
import { Plus, Trash2, Edit2, Package, TrendingDown } from 'lucide-react';

const AdminPanel = () => {
  // FIFO nyilvántartás - beérkezési sorrend szerint
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Munkavédelmi mellény – Reflex',
      category: 'Mellények',
      price: 8990,
      sku: 'MELL-001',
      stock: [
        { batchId: 'B001', arrivalDate: '2024-01-05', quantity: 50, usedQuantity: 0 },
        { batchId: 'B002', arrivalDate: '2024-01-12', quantity: 30, usedQuantity: 5 }
      ],
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop',
      description: 'Magas láthatóságú reflex mellény EN ISO 20471 Class 2 szabvány szerint.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
  ]);

  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    sku: '',
    image: '',
    description: '',
    sizes: ''
  });
  const [newBatchData, setNewBatchData] = useState({
    productId: null,
    quantity: '',
    batchId: ''
  });

  // Összesen raktár
  const calculateTotalStock = (stockBatches) => {
    return stockBatches.reduce((sum, batch) => sum + (batch.quantity - batch.usedQuantity), 0);
  };

  // FIFO - első batch-ből veszi el
  const deductFromStock = (productId, quantity) => {
    setProducts(products.map(p => {
      if (p.id === productId) {
        let remaining = quantity;
        const newStock = [...p.stock];

        for (let i = 0; i < newStock.length && remaining > 0; i++) {
          const availableInBatch = newStock[i].quantity - newStock[i].usedQuantity;
          const deduct = Math.min(remaining, availableInBatch);

          newStock[i].usedQuantity += deduct;
          remaining -= deduct;
        }

        return { ...p, stock: newStock };
      }
      return p;
    }));
  };

  // Batch hozzáadása
  const addBatch = (productId, quantity, batchId) => {
    setProducts(products.map(p => {
      if (p.id === productId) {
        return {
          ...p,
          stock: [
            ...p.stock,
            {
              batchId: batchId || `B${Date.now()}`,
              arrivalDate: new Date().toISOString().split('T')[0],
              quantity: parseInt(quantity),
              usedQuantity: 0
            }
          ]
        };
      }
      return p;
    }));
    setNewBatchData({ productId: null, quantity: '', batchId: '' });
  };

  // Termék hozzáadása
  const handleAddProduct = () => {
    if (!formData.name || !formData.category || !formData.price || !formData.sku) {
      alert('Töltsd ki az összes kötelező mezőt!');
      return;
    }

    if (editingId) {
      // Szerkesztés
      setProducts(products.map(p =>
        p.id === editingId
          ? {
            ...p,
            ...formData,
            price: parseFloat(formData.price),
            sizes: formData.sizes.split(',').map(s => s.trim())
          }
          : p
      ));
      setEditingId(null);
    } else {
      // Új termék
      const newProduct = {
        id: Math.max(...products.map(p => p.id), 0) + 1,
        ...formData,
        price: parseFloat(formData.price),
        stock: [{
          batchId: `B${Date.now()}`,
          arrivalDate: new Date().toISOString().split('T')[0],
          quantity: 0,
          usedQuantity: 0
        }],
        sizes: formData.sizes.split(',').map(s => s.trim())
      };
      setProducts([...products, newProduct]);
    }

    setFormData({
      name: '',
      category: '',
      price: '',
      sku: '',
      image: '',
      description: '',
      sizes: ''
    });
    setShowForm(false);
  };

  // Szerkesztés
  const handleEditProduct = (product) => {
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price.toString(),
      sku: product.sku,
      image: product.image,
      description: product.description,
      sizes: product.sizes.join(', ')
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  // Törlés
  const handleDeleteProduct = (id) => {
    if (window.confirm('Biztosan törlöd ezt a terméket?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <div style={{ backgroundColor: '#fafaf8', minHeight: '100vh', padding: '2rem 1.5rem' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <h1 style={{ fontSize: '2.5rem', color: '#0F2A1D', fontFamily: 'Georgia, serif', margin: 0 }}>
            Admin Felület – FIFO Nyilvántartás
          </h1>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingId(null);
              setFormData({
                name: '',
                category: '',
                price: '',
                sku: '',
                image: '',
                description: '',
                sizes: ''
              });
            }}
            style={{
              backgroundColor: '#0F2A1D',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Plus size={20} /> {showForm ? 'Mégsem' : 'Új Termék'}
          </button>
        </div>

        {/* Statisztika */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>Összes Termék</p>
            <h3 style={{ color: '#0F2A1D', margin: 0, fontSize: '2rem' }}>{products.length}</h3>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>Összes Raktár (db)</p>
            <h3 style={{ color: '#0F2A1D', margin: 0, fontSize: '2rem' }}>
              {products.reduce((sum, p) => sum + calculateTotalStock(p.stock), 0)}
            </h3>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <p style={{ color: '#666', margin: '0 0 0.5rem 0' }}>Összes Raktári Érték</p>
            <h3 style={{ color: '#C9A961', margin: 0, fontSize: '1.5rem' }}>
              {(products.reduce((sum, p) => sum + (p.price * calculateTotalStock(p.stock)), 0)).toLocaleString('hu-HU')} Ft
            </h3>
          </div>
        </div>

        {/* Új Termék / Szerkesztés Form */}
        {showForm && (
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            boxShadow: '0 2px 12px rgba(0,0,0,0.1)'
          }}>
            <h2 style={{ color: '#0F2A1D', marginTop: 0 }}>
              {editingId ? '✏️ Termék Szerkesztése' : '➕ Új Termék Hozzáadása'}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              <input
                type="text"
                placeholder="Termék neve *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="text"
                placeholder="Kategória *"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="number"
                placeholder="Ár (Ft) *"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="text"
                placeholder="SKU / Cikkszám *"
                value={formData.sku}
                onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="url"
                placeholder="Kép URL"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
              <input
                type="text"
                placeholder="Méretek (S, M, L, XL)"
                value={formData.sizes}
                onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <textarea
              placeholder="Termék leírása"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '1rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                minHeight: '100px',
                fontFamily: 'inherit'
              }}
            />

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button
                onClick={handleAddProduct}
                style={{
                  backgroundColor: '#0F2A1D',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {editingId ? 'Módosítások Mentése' : 'Termék Hozzáadása'}
              </button>
              <button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({
                    name: '',
                    category: '',
                    price: '',
                    sku: '',
                    image: '',
                    description: '',
                    sizes: ''
                  });
                }}
                style={{
                  backgroundColor: 'transparent',
                  color: '#0F2A1D',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  border: '2px solid #0F2A1D',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Mégsem
              </button>
            </div>
          </div>
        )}

        {/* Terméklista */}
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {products.map(product => {
            const totalStock = calculateTotalStock(product.stock);
            const totalUsed = product.stock.reduce((sum, batch) => sum + batch.usedQuantity, 0);
            const stockValue = product.price * totalStock;

            return (
              <div
                key={product.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  borderLeft: `4px solid #0F2A1D`
                }}
              >
                {/* Termék Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                  <div>
                    <h3 style={{ color: '#0F2A1D', margin: '0 0 0.5rem 0', fontSize: '1.3rem' }}>
                      {product.name}
                    </h3>
                    <p style={{ color: '#C9A961', margin: '0.25rem 0', fontWeight: 'bold' }}>
                      SKU: {product.sku}
                    </p>
                    <p style={{ color: '#666', margin: '0.25rem 0', fontSize: '0.9rem' }}>
                      {product.category}
                    </p>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <p style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem', fontWeight: 'bold', color: '#0F2A1D' }}>
                      {product.price.toLocaleString('hu-HU')} Ft
                    </p>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => handleEditProduct(product)}
                        style={{
                          backgroundColor: '#C9A961',
                          color: '#0F2A1D',
                          padding: '0.5rem 1rem',
                          borderRadius: '4px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <Edit2 size={16} /> Szerkesztés
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        style={{
                          backgroundColor: '#d32f2f',
                          color: 'white',
                          padding: '0.5rem 1rem',
                          borderRadius: '4px',
                          border: 'none',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <Trash2 size={16} /> Törlés
                      </button>
                    </div>
                  </div>
                </div>

                {/* Raktár statisztika */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#f0f0ec',
                  borderRadius: '4px'
                }}>
                  <div>
                    <p style={{ color: '#666', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Teljes Raktár</p>
                    <h4 style={{ margin: 0, color: '#0F2A1D', fontSize: '1.5rem' }}>{totalStock} db</h4>
                  </div>
                  <div>
                    <p style={{ color: '#666', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Felhasznált (FIFO)</p>
                    <h4 style={{ margin: 0, color: '#d32f2f', fontSize: '1.5rem' }}>{totalUsed} db</h4>
                  </div>
                  <div>
                    <p style={{ color: '#666', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Raktári Érték</p>
                    <h4 style={{ margin: 0, color: '#C9A961', fontSize: '1.3rem' }}>{stockValue.toLocaleString('hu-HU')} Ft</h4>
                  </div>
                  <div>
                    <p style={{ color: '#666', margin: '0 0 0.5rem 0', fontSize: '0.9rem' }}>Batch-ek</p>
                    <h4 style={{ margin: 0, color: '#0F2A1D', fontSize: '1.5rem' }}>{product.stock.length}</h4>
                  </div>
                </div>

                {/* FIFO Batch-ek */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#0F2A1D', marginTop: 0, marginBottom: '0.5rem' }}>
                    <Package size={18} style={{ display: 'inline', marginRight: '0.5rem' }} />
                    FIFO Raktári Batch-ek (Beérkezés szerint)
                  </h4>

                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    {product.stock.map((batch, idx) => {
                      const available = batch.quantity - batch.usedQuantity;
                      const usagePercent = (batch.usedQuantity / batch.quantity) * 100;

                      return (
                        <div
                          key={batch.batchId}
                          style={{
                            backgroundColor: '#f9f9f9',
                            padding: '0.75rem',
                            borderRadius: '4px',
                            border: idx === 0 ? '2px solid #C9A961' : '1px solid #ddd'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: 'bold', color: '#0F2A1D' }}>
                              {idx === 0 && '📦 '}Batch {batch.batchId}
                            </span>
                            <span style={{ color: '#666', fontSize: '0.85rem' }}>
                              Beérkezés: {batch.arrivalDate}
                            </span>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <div>
                              <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#666' }}>Beérkezett</p>
                              <p style={{ margin: 0, fontWeight: 'bold' }}>{batch.quantity} db</p>
                            </div>
                            <div>
                              <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#666' }}>Felhasznált</p>
                              <p style={{ margin: 0, fontWeight: 'bold', color: '#d32f2f' }}>{batch.usedQuantity} db</p>
                            </div>
                            <div>
                              <p style={{ margin: '0 0 0.25rem 0', fontSize: '0.8rem', color: '#666' }}>Elérhető</p>
                              <p style={{ margin: 0, fontWeight: 'bold', color: available > 0 ? '#0F2A1D' : '#999' }}>
                                {available} db
                              </p>
                            </div>
                          </div>

                          {/* Progress bar */}
                          <div style={{
                            height: '8px',
                            backgroundColor: '#ddd',
                            borderRadius: '4px',
                            overflow: 'hidden'
                          }}>
                            <div
                              style={{
                                height: '100%',
                                width: `${usagePercent}%`,
                                backgroundColor: usagePercent > 50 ? '#d32f2f' : '#C9A961',
                                transition: 'width 0.3s'
                              }}
                            ></div>
                          </div>

                          {/* Gyors Raktár módosítás */}
                          <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <input
                              type="number"
                              placeholder="Kivenni (db)"
                              min="0"
                              max={available}
                              id={`deduct-${batch.batchId}`}
                              style={{
                                width: '100px',
                                padding: '0.5rem',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '0.9rem'
                              }}
                            />
                            <button
                              onClick={() => {
                                const input = document.getElementById(`deduct-${batch.batchId}`);
                                const qty = parseInt(input.value);
                                if (qty > 0 && qty <= available) {
                                  deductFromStock(product.id, qty);
                                  input.value = '';
                                }
                              }}
                              style={{
                                backgroundColor: '#0F2A1D',
                                color: 'white',
                                padding: '0.5rem 1rem',
                                borderRadius: '4px',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.25rem'
                              }}
                            >
                              <TrendingDown size={14} /> Kivenni
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Új Batch Hozzáadása */}
                <div style={{
                  backgroundColor: '#f0f0ec',
                  padding: '1rem',
                  borderRadius: '4px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                  gap: '0.75rem',
                  alignItems: 'end'
                }}>
                  <input
                    type="text"
                    placeholder="Batch ID (B001)"
                    value={newBatchData.productId === product.id ? newBatchData.batchId : ''}
                    onChange={(e) => setNewBatchData({ ...newBatchData, batchId: e.target.value })}
                    style={{
                      padding: '0.5rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '0.9rem'
                    }}
                  />
                  <input
                    type="number"
                    placeholder="Mennyiség (db)"
                    min="0"
                    value={newBatchData.productId === product.id ? newBatchData.quantity : ''}
                    onChange={(e) => setNewBatchData({ ...newBatchData, quantity: e.target.value })}
                    style={{
                      padding: '0.5rem',
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      fontSize: '0.9rem'
                    }}
                  />
                  <button
                    onClick={() => {
                      const batchId = newBatchData.batchId || `B${Date.now()}`;
                      const quantity = parseInt(newBatchData.quantity);
                      if (quantity > 0) {
                        addBatch(product.id, quantity, batchId);
                      }
                    }}
                    style={{
                      backgroundColor: '#C9A961',
                      color: '#0F2A1D',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Plus size={16} /> Batch Hozzáadása
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {products.length === 0 && (
          <div style={{
            backgroundColor: 'white',
            padding: '3rem',
            borderRadius: '8px',
            textAlign: 'center',
            color: '#666'
          }}>
            <Package size={48} style={{ margin: '0 auto 1rem', color: '#C9A961' }} />
            <h2 style={{ color: '#0F2A1D' }}>Nincsenek termékek</h2>
            <p>Kattints az "Új Termék" gombra az első termék hozzáadásához.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
